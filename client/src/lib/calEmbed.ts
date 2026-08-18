export type CalNamespace = ((command: string, options?: Record<string, unknown>) => void) & { q?: unknown[][] };

export type CalEmbed = ((command: string, namespace?: string, options?: Record<string, unknown>) => void) & {
  config?: { forwardQueryParams?: boolean };
  ns?: Record<string, CalNamespace>;
};

type QueuedCalEmbed = CalEmbed & { loaded?: boolean; q?: unknown[][] };

declare global {
  interface Window {
    Cal?: CalEmbed;
  }
}

export function bootstrapCalEmbed(target: Window = window, doc: Document = document) {
  const existingCal = target.Cal as QueuedCalEmbed | undefined;
  if (existingCal) return existingCal;

  const cal = ((command: string, namespace?: string, options?: Record<string, unknown>) => {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      const script = doc.createElement("script");
      script.id = "agents-dx-cal-embed";
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      doc.head.appendChild(script);
      cal.loaded = true;
    }

    if (command === "init" && typeof namespace === "string") {
      const namespaceApi = ((namespaceCommand: string, namespaceOptions?: Record<string, unknown>) => {
        namespaceApi.q?.push([namespaceCommand, namespaceOptions]);
      }) as CalNamespace;
      namespaceApi.q = namespaceApi.q || [];
      cal.ns![namespace] = namespaceApi;
      namespaceApi.q.push([command, namespace, options]);
      cal.q!.push(["initNamespace", namespace]);
      return;
    }

    cal.q!.push([command, namespace, options]);
  }) as QueuedCalEmbed;

  target.Cal = cal;
  return cal;
}

export function configureCalNamespace(cal: CalEmbed | undefined, namespace: string) {
  if (!cal) return false;

  cal("init", namespace, { origin: "https://app.cal.com" });
  cal.config = cal.config || {};
  cal.config.forwardQueryParams = true;
  cal.ns?.[namespace]?.("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
  });

  return true;
}

export function configurePlatformCal(cal: CalEmbed | undefined) {
  return configureCalNamespace(cal, "platform");
}

export function configureDedicatedManagerCal(cal: CalEmbed | undefined) {
  return configureCalNamespace(cal, "platform-dedicated-manager");
}

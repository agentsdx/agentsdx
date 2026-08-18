export type CalEmbed = ((command: string, namespace?: string, options?: Record<string, unknown>) => void) & {
  config?: { forwardQueryParams?: boolean };
  ns?: Record<string, (command: string, options?: Record<string, unknown>) => void>;
};

declare global {
  interface Window {
    Cal?: CalEmbed;
  }
}

export function configurePlatformCal(cal: CalEmbed | undefined) {
  if (!cal) return false;

  cal("init", "platform", { origin: "https://app.cal.com" });
  cal.config = cal.config || {};
  cal.config.forwardQueryParams = true;
  cal.ns?.platform?.("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
  });

  return true;
}

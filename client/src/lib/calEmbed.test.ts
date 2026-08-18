import { describe, expect, it, vi } from "vitest";
import { bootstrapCalEmbed, configureDedicatedManagerCal, configurePlatformCal, type CalEmbed } from "./calEmbed";

describe("Cal.com platform configuration", () => {
  it("returns false when the external booking script is unavailable", () => {
    expect(configurePlatformCal(undefined)).toBe(false);
  });

  it("initializes the supplied platform namespace and its month-view options", () => {
    const cal = vi.fn() as unknown as CalEmbed;
    const platform = vi.fn();
    cal.ns = { platform };

    expect(configurePlatformCal(cal)).toBe(true);
    expect(cal).toHaveBeenCalledWith("init", "platform", { origin: "https://app.cal.com" });
    expect(cal.config?.forwardQueryParams).toBe(true);
    expect(platform).toHaveBeenCalledWith("ui", { hideEventTypeDetails: false, layout: "month_view" });
  });

  it("initializes the supplied dedicated-manager namespace with the same in-frame month-view experience", () => {
    const cal = vi.fn() as unknown as CalEmbed;
    const dedicatedManager = vi.fn();
    cal.ns = { "platform-dedicated-manager": dedicatedManager };

    expect(configureDedicatedManagerCal(cal)).toBe(true);
    expect(cal).toHaveBeenCalledWith("init", "platform-dedicated-manager", { origin: "https://app.cal.com" });
    expect(cal.config?.forwardQueryParams).toBe(true);
    expect(dedicatedManager).toHaveBeenCalledWith("ui", { hideEventTypeDetails: false, layout: "month_view" });
  });

  it("installs the Cal.com queue bootstrap before the external embed script so booking actions can be intercepted in-frame", () => {
    const script = { id: "", src: "", async: false } as HTMLScriptElement;
    const target = {} as Window;
    const doc = {
      getElementById: vi.fn(() => null),
      createElement: vi.fn(() => script),
      head: { appendChild: vi.fn() },
    } as unknown as Document;

    const cal = bootstrapCalEmbed(target, doc);

    expect(typeof cal).toBe("function");
    expect(target.Cal).toBe(cal);
    expect(doc.head.appendChild).not.toHaveBeenCalled();

    configurePlatformCal(cal);

    expect(script.id).toBe("agents-dx-cal-embed");
    expect(script.src).toBe("https://app.cal.com/embed/embed.js");
    expect(script.async).toBe(true);
    expect(doc.head.appendChild).toHaveBeenCalledWith(script);
  });
});

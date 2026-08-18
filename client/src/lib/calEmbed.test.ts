import { describe, expect, it, vi } from "vitest";
import { configurePlatformCal, type CalEmbed } from "./calEmbed";

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
});

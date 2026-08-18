import { describe, expect, it } from "vitest";
import { footerPages, getUseCase, useCases } from "./useCases";

describe("agents DX use-case route content", () => {
  it("provides a unique detail route for each supplied solution category", () => {
    const slugs = useCases.map(useCase => useCase.slug);
    expect(slugs).toEqual(["small-business", "ecommerce", "agencies", "enterprise", "startups"]);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("returns the appropriate solution content for known routes and nothing for an unknown route", () => {
    expect(getUseCase("agencies")?.label).toBe("Agencies");
    expect(getUseCase("unknown")).toBeUndefined();
  });

  it("keeps the requested footer-page family available as original page content", () => {
    expect(Object.keys(footerPages)).toEqual(["integrations", "academy", "careers", "brand-guidelines"]);
    expect(Object.values(footerPages).every(page => page.areas.length === 4)).toBe(true);
  });
});

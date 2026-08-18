import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const siteShell = readFileSync(new URL("./SiteShell.tsx", import.meta.url), "utf8");
const marketingPages = readFileSync(new URL("../../pages/MarketingPages.tsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../../index.css", import.meta.url), "utf8");

describe("Agents DX keyboard accessibility contract", () => {
  it("keeps the desktop and mobile navigation semantically labelled and keyboard-triggerable", () => {
    expect(siteShell).toContain('aria-label="Main navigation"');
    expect(siteShell).toContain('aria-label={open ? "Close navigation" : "Open navigation"}');
    expect(siteShell).toContain("aria-expanded={open}");
    expect(siteShell).toContain('aria-label="Mobile navigation"');
  });

  it("preserves accessible native controls for the key interactive routes", () => {
    expect(marketingPages).toContain("<form onSubmit={submit} noValidate>");
    expect(marketingPages).toContain("<details key={item.question}>");
    expect(marketingPages).toContain("<summary>");
    expect(marketingPages).toContain('role="alert"');
    expect(marketingPages).toContain('role="status"');
  });

  it("maintains a visible keyboard focus treatment for links, controls, and form fields", () => {
    expect(styles).toContain(":focus-visible");
    expect(styles).toContain("outline: 3px solid var(--coral)");
  });
});

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

  it("preserves the supplied tagline and public contact destinations", () => {
    expect(marketingPages).toContain("Built to <em>Engage.</em><br />Trained to Convert.");
    expect(siteShell).toContain("https://cal.com/agentsdx/platform");
    expect(siteShell).toContain("https://app.agentsdx.com/");
    expect(siteShell).toContain("https://docs.agentsdx.com/");
    ["Platform", "Solutions", "Resources", "Company", "Features", "Pricing", "Integrations", "Small Business", "E-commerce", "Agencies", "Enterprise", "Startups", "Blog &amp; Guides", "Help Center", "Agents DX Academy", "About Us", "Contact", "Careers", "Brand Guidelines"].forEach(label => expect(siteShell).toContain(label));
    [
      "https://www.facebook.com/AgentsDXai",
      "https://www.instagram.com/AgentsDXai",
      "https://www.threads.net/@AgentsDXai",
      "https://x.com/AgentsDXai",
      "https://www.linkedin.com/company/agentsdxai",
      "https://www.tiktok.com/@AgentsDXai",
      "https://www.snapchat.com/add/AgentsDXai",
      "https://www.pinterest.com/AgentsDXai",
    ].forEach(url => expect(siteShell).toContain(url));
  });

  it("keeps the contact page wired to the supplied Cal.com platform booking flow", () => {
    expect(marketingPages).toContain('data-cal-link="agentsdx/platform"');
    expect(marketingPages).toContain('href="https://cal.com/agentsdx/platform"');
    expect(marketingPages).toContain("Prepare Demo Request");
  });
});

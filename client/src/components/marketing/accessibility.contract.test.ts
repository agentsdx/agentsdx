import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const siteShell = readFileSync(new URL("./SiteShell.tsx", import.meta.url), "utf8");
const marketingPages = readFileSync(new URL("../../pages/MarketingPages.tsx", import.meta.url), "utf8");
const contactDirectory = readFileSync(new URL("../../pages/ContactDirectoryPage.tsx", import.meta.url), "utf8");
const appRoutes = readFileSync(new URL("../../App.tsx", import.meta.url), "utf8");
const howItWorksPage = readFileSync(new URL("../../pages/HowItWorksPage.tsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../../index.css", import.meta.url), "utf8");

describe("Agents DX keyboard accessibility contract", () => {
  it("keeps the desktop and mobile navigation semantically labelled and keyboard-triggerable", () => {
    expect(siteShell).toContain('aria-label="Main navigation"');
    expect(siteShell).toContain('aria-label={open ? "Close navigation" : "Open navigation"}');
    expect(siteShell).toContain("aria-expanded={open}");
    expect(siteShell).toContain('aria-label="Mobile navigation"');
  });

  it("preserves accessible native controls and clear contact routes for the key interactive pages", () => {
    expect(marketingPages).toContain("<details key={item.question}>");
    expect(marketingPages).toContain("<summary>");
    expect(contactDirectory).toContain('href="mailto:cs@AgentsDX.com"');
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
      "https://x.com/AgentsDXai",
      "https://www.linkedin.com/company/agentsdxai",
      "https://www.youtube.com/@AgentsDXai",
      "https://www.tiktok.com/@AgentsDXai",
      "https://www.snapchat.com/add/AgentsDXai",
      "https://www.pinterest.com/AgentsDXai",
    ].forEach(url => expect(siteShell).toContain(url));
    expect(siteShell).not.toContain("threads.net");
  });

  it("keeps the contact page wired to the supplied Cal.com platform booking flow", () => {
    expect(contactDirectory).toContain('link: "agentsdx/platform"');
    expect(contactDirectory).toContain('href: "https://cal.com/agentsdx/platform"');
    expect(contactDirectory).toContain('link: "agentsdx/platform-dedicated-manager"');
    expect(contactDirectory).toContain('href: "https://cal.com/agentsdx/platform-dedicated-manager"');
    expect(contactDirectory).toContain('data-cal-link={option.link}');
    expect(contactDirectory).toContain('data-cal-namespace={option.namespace}');
    expect(contactDirectory).toContain('data-cal-config');
    expect(contactDirectory).toContain("direct booking fallback");
    expect(contactDirectory).toContain('className="booking-native-fallback"');
    expect(contactDirectory).toContain("in-page booking calendar");
    expect(contactDirectory).toContain("Available 24/7");
    expect(contactDirectory).not.toContain("Prepare Demo Request");
  });

  it("wires every original Use Cases and footer-page destination into both the route registry and footer navigation", () => {
    ["/use-cases", "/use-cases/:slug", "/integrations", "/academy", "/careers", "/brand-guidelines"].forEach(route => expect(appRoutes).toContain(route));
    ["/integrations", "/academy", "/careers", "/brand-guidelines", "/use-cases/small-business", "/use-cases/ecommerce", "/use-cases/agencies", "/use-cases/enterprise", "/use-cases/startups"].forEach(destination => expect(siteShell).toContain(destination));
  });

  it("keeps the How It Works route end-user focused and free of agency-reseller positioning", () => {
    expect(appRoutes).toContain("/how-it-works");
    expect(siteShell).toContain('href: "/how-it-works", label: "How It Works"');
    expect(howItWorksPage).toContain("Orient the workforce");
    expect(howItWorksPage).toContain("Design the role");
    expect(howItWorksPage).toContain("Deploy the rhythm");
    expect(howItWorksPage).toContain("Improve the system");
    const pageCopy = howItWorksPage.toLowerCase();
    expect(pageCopy).not.toContain("white-label");
    expect(pageCopy).not.toContain("resell");
    expect(pageCopy).not.toContain("agency plan");
  });
});

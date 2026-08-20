import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const siteShell = readFileSync(new URL("./SiteShell.tsx", import.meta.url), "utf8");
const marketingPages = readFileSync(new URL("../../pages/MarketingPages.tsx", import.meta.url), "utf8");
const contactDirectory = readFileSync(new URL("../../pages/ContactDirectoryPage.tsx", import.meta.url), "utf8");
const appRoutes = readFileSync(new URL("../../App.tsx", import.meta.url), "utf8");
const howItWorksPage = readFileSync(new URL("../../pages/HowItWorksPage.tsx", import.meta.url), "utf8");
const brandGuidelinesPage = readFileSync(new URL("../../pages/BrandGuidelinesPage.tsx", import.meta.url), "utf8");
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

  it("connects the Contact-page Schedule a Call pathway directly to the in-page demo booking section", () => {
    expect(contactDirectory).toContain('href="#demo-booking"');
    expect(contactDirectory).toContain('aria-label="Schedule a Call: scroll to demo booking options"');
    expect(contactDirectory).toContain('scrollIntoView({ behavior: "smooth", block: "start" })');
    expect(contactDirectory).toContain('window.location.hash !== "#demo-booking"');
    expect(contactDirectory).toContain('scrollIntoView({ behavior: "auto", block: "start" })');
    expect(contactDirectory).toContain("useLayoutEffect");
    expect(contactDirectory).toContain('id="demo-booking" className="booking-section"');
    expect(styles).toContain("#demo-booking { scroll-margin-top: 92px; }");
  });

  it("maintains a visible keyboard focus treatment for links, controls, and form fields", () => {
    expect(styles).toContain(":focus-visible");
    expect(styles).toContain("outline: 3px solid var(--coral)");
  });

  it("keeps premium interface motion lightweight and accessible to reduced-motion preferences", () => {
    expect(styles).toContain("@media (prefers-reduced-motion: no-preference)");
    expect(styles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(styles).toContain("radar-sweep");
    expect(styles).toContain("channel-centered-drift");
    expect(styles).toContain("animation-iteration-count: 1 !important");
  });

  it("preserves the supplied tagline and public contact destinations", () => {
    expect(marketingPages).toContain("Built to <em>Engage.</em><br />Trained to Convert.");
    expect(siteShell).toContain("https://cal.com/agentsdx/platform");
    expect(siteShell).toContain("openBookingFrame");
    expect(siteShell).toContain('role="dialog"');
    expect(siteShell).toContain('aria-modal="true"');
    expect(siteShell).toContain("https://app.agentsdx.com/");
    expect(siteShell).toContain("https://docs.agentsdx.com/");
    expect(siteShell).toContain('href="https://blog.agentsdx.com" target="_blank" rel="noreferrer"');
    expect(siteShell).toContain('href="https://docs.agentsdx.com/" target="_blank" rel="noreferrer"');
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
    expect(contactDirectory).toContain('onClick={() => openBookingFrame({ title: option.title, href: option.href, label: option.accent })}');
    expect(contactDirectory).toContain("direct booking fallback");
    expect(contactDirectory).toContain('className="booking-native-fallback"');
    expect(contactDirectory).toContain("in-page booking calendar");
    expect(contactDirectory).toContain("Available 24/7");
    expect(contactDirectory).not.toContain("Prepare Demo Request");
  });

  it("uses an agents DX wordmark without the separate AD badge", () => {
    const brandMark = readFileSync(new URL("./BrandMark.tsx", import.meta.url), "utf8");
    expect(brandMark).toContain("agents <em>DX</em>");
    expect(brandMark).not.toContain("brand-mark__glyph");
    expect(brandMark).not.toContain(">AD<");
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

  it("provides a comprehensive Brand Guidelines route with visible approved identity standards", () => {
    expect(appRoutes).toContain('path={"/brand-guidelines"} component={BrandGuidelinesPage}');
    ["#FF6D5A", "#384D5B", "#0F172A", "#000000", "#FFFFFF", "#F8FAFC"].forEach(token => expect(brandGuidelinesPage).toContain(token));
    expect(brandGuidelinesPage).toContain("BrandMark inverse");
    expect(brandGuidelinesPage).toContain("Zen Dots");
    expect(brandGuidelinesPage).toContain("Inter");
    expect(brandGuidelinesPage).toContain("Visible focus");
    expect(brandGuidelinesPage).toContain("wordmark-only expression: do not add a separate AD badge");
    expect(styles).toContain(".brand-guide-hero");
    expect(styles).toContain(".brand-color-grid");
  });

  it("keeps the supplied Platform price and the revised Resources and FAQ navigation architecture", () => {
    expect(marketingPages).toContain('monthlyPrice: "USD 149"');
    expect(marketingPages).toContain('annualPrice: "USD 1,788"');
    expect(marketingPages).toContain("Billed monthly");
    expect(marketingPages).toContain('annual ? plan.annualPrice : plan.monthlyPrice');
    expect(marketingPages).toContain("Billed annually (USD 149 / Month)");
    expect(marketingPages).toContain('new URLSearchParams(window.location.search).get("billing") === "annual"');
    expect(siteShell).toContain("Resources <ChevronDown");
    expect(siteShell).toContain('className="site-nav__resources-menu"');
    expect(siteShell).toContain('href="https://blog.agentsdx.com" target="_blank" rel="noreferrer"');
    expect(siteShell).toContain('href="https://docs.agentsdx.com/" target="_blank" rel="noreferrer"');
    expect(siteShell).toContain('<Link href="/faq">FAQ</Link>');
    expect(siteShell).not.toContain('{ href: "/faq", label: "FAQ" }');
    expect(styles).toContain(".site-nav__resources-menu");
    expect(styles).toContain(".mobile-nav__resources");
  });

  it("keeps the header focused on Login and a Contact-page demo route without removing in-page booking from other actions", () => {
    expect(siteShell).toContain('className="site-header__cta" demoBehavior="link">Book a Demo</ButtonLink>');
    expect(siteShell).toContain('className="mobile-nav__cta" demoBehavior="link">Book a Demo</ButtonLink>');
    expect(siteShell).not.toContain('className="site-header__start">Get Started</ButtonLink>');
    expect(siteShell).not.toContain('className="mobile-nav__cta mobile-nav__start">Get Started</ButtonLink>');
    expect(siteShell).toContain('if (isDemoAction && demoBehavior === "calendar")');
    expect(siteShell).toContain('href: "https://cal.com/agentsdx/platform"');
  });

  it("provides professionally structured Privacy Policy and Terms of Service working drafts", () => {
    expect(appRoutes).toContain('path={"/privacy-policy"}');
    expect(appRoutes).toContain('path={"/terms-of-service"}');
    [
      "Working draft — legal review required",
      "Information we may collect",
      "How we may use information",
      "How information may be shared",
      "Your choices and rights",
      "Privacy contact",
      "Acceptance and scope",
      "Subscriptions, fees, and renewals",
      "Acceptable use",
      "Customer data and AI-assisted output",
      "Limitation of liability",
      "Governing law and disputes",
      "cs@AgentsDX.com",
    ].forEach(label => expect(marketingPages).toContain(label));
    expect(styles).toContain(".legal-hero");
    expect(styles).toContain(".legal-page__nav");
    expect(styles).toContain(".legal-page__document");
  });

  it("provides the approved comprehensive Features-page reference without white-label or agency-reseller positioning", () => {
    const featuresPage = marketingPages.slice(marketingPages.indexOf("const workforceRoles"), marketingPages.indexOf("export function PricingPage"));
    [
      "One workforce.<br /><em>Every important moment.</em>",
      "Support that responds",
      "Sales that follows through",
      "Booking that moves forward",
      "Connected channels",
      "Run one workforce across every channel.",
      "WhatsApp",
      "Instagram",
      "Messenger",
      "Telegram",
      "Email",
      "Web chat",
      "SMS",
      "Intelligence layer",
      "Conversation & signal capture",
      "Workflows that convert",
      "Control, oversight &amp; integration",
      "Platform availability",
      "Feature questions",
      "Put the workforce to work",
      "+ Dedicated Manager",
    ].forEach(label => expect(featuresPage).toContain(label));
    expect(featuresPage.toLowerCase()).not.toContain("white-label");
    expect(featuresPage.toLowerCase()).not.toContain("resell");
    expect(featuresPage.toLowerCase()).not.toContain("agency plan");
    [".features-command-hero", ".features-role-grid", ".features-channels-section", ".features-channels-canvas", ".features-intelligence-section", ".features-availability-wrap", ".features-faq-list"].forEach(selector => expect(styles).toContain(selector));
  });
});

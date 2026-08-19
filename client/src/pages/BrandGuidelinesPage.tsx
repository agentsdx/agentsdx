import { AlignLeft, Box, Check, Eye, Grid3X3, Maximize2, MousePointer2, Palette, Ruler, ShieldCheck, Type, X } from "lucide-react";
import { BrandMark } from "@/components/marketing/BrandMark";
import { FinalCta, MarketingLayout, SectionHeading } from "@/components/marketing/SiteShell";

const colorTokens = [
  { name: "Coral", hex: "#FF6D5A", rgb: "255, 109, 90", role: "Primary accent", use: "Calls to action, active states, meaningful highlights", foreground: "Pair with #000000 for legible button text." },
  { name: "Deep Slate", hex: "#384D5B", rgb: "56, 77, 91", role: "Structure", use: "Secondary surfaces, frames, and trusted system detail", foreground: "Use white or light text on solid Deep Slate." },
  { name: "Night", hex: "#0F172A", rgb: "15, 23, 42", role: "Dark foundation", use: "Hero fields, high-emphasis moments, and dark panels", foreground: "Use white or light text for clear hierarchy." },
  { name: "Black", hex: "#000000", rgb: "0, 0, 0", role: "Neutral base", use: "Primary type, contrast anchors, and shadow offsets", foreground: "Use white text only on solid black fields." },
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", role: "Neutral base", use: "Primary content surfaces and open composition", foreground: "Use Night or Black for long-form copy." },
  { name: "Cloud", hex: "#F8FAFC", rgb: "248, 250, 252", role: "Light background", use: "Page foundations and calm supporting sections", foreground: "Use Night or Deep Slate for readable structure." },
];

const typeGuidance = [
  { name: "Display / H1", sample: "Built to Engage.", usage: "Hero statements and decisive page-level messages", style: "Inter 800 · tight tracking · 0.98 line-height" },
  { name: "Heading / H2", sample: "Clearer momentum.", usage: "Section framing and scannable hierarchy", style: "Inter 750–800 · tight tracking · 1.02 line-height" },
  { name: "Body / UI", sample: "Practical intelligence, made useful.", usage: "Explanations, menus, labels, and interface detail", style: "Inter 400–700 · relaxed reading rhythm" },
];

const voiceTraits = [
  ["Intelligent", "Lead with informed clarity, not technical theatre."],
  ["Confident", "Make a useful point directly and support it with detail."],
  ["Modern", "Use contemporary language that remains easy to understand."],
  ["Practical", "Focus on the work, the decision, and the next useful action."],
  ["High-converting", "Create momentum through relevance rather than pressure."],
];

export function BrandGuidelinesPage() {
  return (
    <MarketingLayout>
      <section className="brand-guide-hero">
        <div className="shell brand-guide-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light"><span /> Brand Guidelines</p>
            <h1>A clear expression for a workforce built to <em>move work forward.</em></h1>
            <p>These guidelines define the current agents DX digital expression: an intelligent, confident, and practical system that makes every customer-facing touchpoint feel connected.</p>
          </div>
          <aside className="brand-guide-hero__spec" aria-label="Brand identity summary">
            <p>AGENTS DX / DIGITAL IDENTITY</p>
            <div className="brand-guide-hero__wordmark"><BrandMark inverse /></div>
            <dl>
              <div><dt>Essence</dt><dd>Intelligent. Confident. Modern.</dd></div>
              <div><dt>Core promise</dt><dd>Built to Engage. Trained to Convert.</dd></div>
              <div><dt>Version</dt><dd>Digital foundation / 01</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="brand-guide-intro">
        <div className="shell brand-guide-intro__grid">
          <div><p className="eyebrow"><span /> A system, not decoration</p><h2>Every choice should make the <em>signal clearer.</em></h2></div>
          <p>Use this page as the common reference for digital touchpoints. Keep the system direct and high-contrast, reserve coral for actions and moments of emphasis, and let generous space make the work feel composed.</p>
        </div>
      </section>

      <section className="brand-logo-section">
        <div className="shell">
          <SectionHeading eyebrow="01 / Wordmark" title={<>The agents DX wordmark is the most <em>recognisable signal.</em></>} intro="Use the wordmark as one complete unit. It is a wordmark-only expression: do not add a separate AD badge, icon, enclosure, or other invented mark." />
          <div className="brand-logo-showcase-grid">
            <article className="brand-logo-stage brand-logo-stage--light">
              <div className="brand-logo-stage__label"><span>Light field</span><small>#F8FAFC</small></div>
              <div className="brand-logo-stage__canvas"><BrandMark /></div>
              <p>Use the standard wordmark on light surfaces. Keep surrounding detail quiet so the letters remain the focal point.</p>
            </article>
            <article className="brand-logo-stage brand-logo-stage--dark">
              <div className="brand-logo-stage__label"><span>Dark field</span><small>#0F172A</small></div>
              <div className="brand-logo-stage__canvas"><BrandMark inverse /></div>
              <p>Use the inverse wordmark on dark surfaces. Coral remains dedicated to the DX accent.</p>
            </article>
          </div>
          <div className="brand-logo-specs" aria-label="Wordmark specifications">
            <article><Maximize2 size={20} /><strong>Clear space</strong><p>Maintain at least one DX letter-height around every edge of the wordmark.</p></article>
            <article><Ruler size={20} /><strong>Minimum size</strong><p>Set the wordmark no smaller than 128 px wide in digital experiences.</p></article>
            <article><Eye size={20} /><strong>Visibility</strong><p>Always place the wordmark on a clean, high-contrast field with no visual competition.</p></article>
          </div>
          <div className="brand-logo-rules">
            <article className="brand-logo-rule brand-logo-rule--do"><div><Check size={16} /> Do</div><span className="brand-guide-wordmark">agents <em>DX</em></span><p>Keep the wordmark intact, with its approved Zen Dots construction and coral DX accent.</p></article>
            <article className="brand-logo-rule brand-logo-rule--dont"><div><X size={16} /> Don’t</div><span className="brand-guide-wordmark brand-guide-wordmark--muted">agents <em>DX</em></span><p>Do not recolor it, stretch it, outline it, add effects, or break it into separate elements.</p></article>
          </div>
        </div>
      </section>

      <section className="brand-colors-section">
        <div className="shell">
          <SectionHeading eyebrow="02 / Colour" title={<>A focused palette for <em>clarity and momentum.</em></>} intro="The palette is deliberately compact. Each color has a job: coral moves the eye and supports action, while the dark and neutral tones create confidence, structure, and space." />
          <div className="brand-color-grid">
            {colorTokens.map((token) => (
              <article className="brand-color-card" key={token.name}>
                <div className="brand-color-card__swatch" style={{ backgroundColor: token.hex }} aria-label={`${token.name} color swatch, ${token.hex}`}><span>{token.hex}</span></div>
                <div className="brand-color-card__meta"><p>{token.role}</p><h3>{token.name}</h3><dl><div><dt>HEX</dt><dd>{token.hex}</dd></div><div><dt>RGB</dt><dd>{token.rgb}</dd></div></dl><strong>{token.use}</strong><small>{token.foreground}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-type-section">
        <div className="shell brand-type-section__intro"><div><p className="eyebrow"><span /> 03 / Typography</p><h2>Distinctive at the mark. <em>Direct everywhere else.</em></h2></div><p>Zen Dots is reserved for the agents DX wordmark. Inter carries all interface, headings, and body copy so the system stays sharp, highly legible, and flexible across digital formats.</p></div>
        <div className="shell brand-type-grid">
          <article className="brand-type-card brand-type-card--mark"><p>WORDMARK TYPEFACE</p><span className="brand-type-card__wordmark">agents <em>DX</em></span><strong>Zen Dots</strong><small>Use exclusively for the full agents DX wordmark. Do not use it for headings, buttons, or body content.</small></article>
          <article className="brand-type-card brand-type-card--interface"><p>INTERFACE TYPEFACE</p><span className="brand-type-card__inter">Your AI workforce, built to deliver.</span><strong>Inter</strong><small>Use for every content and interface role. Prefer clear, short headings and generous line-height for supporting copy.</small></article>
        </div>
        <div className="shell type-guidance-list">
          {typeGuidance.map((item) => <article key={item.name}><div><p>{item.name}</p><strong>{item.sample}</strong></div><span>{item.usage}</span><small>{item.style}</small></article>)}
        </div>
      </section>

      <section className="brand-voice-section">
        <div className="shell brand-voice-section__grid"><div><p className="eyebrow eyebrow--light"><span /> 04 / Voice & tone</p><h2>Speak with purpose. <em>Never with noise.</em></h2><p>agents DX helps people understand and improve meaningful work. The voice should make that work feel more legible—not more complicated.</p></div><div className="brand-voice-traits">{voiceTraits.map(([trait, description], index) => <article key={trait}><span>0{index + 1}</span><h3>{trait}</h3><p>{description}</p></article>)}</div></div>
      </section>

      <section className="brand-layout-section">
        <div className="shell"><SectionHeading eyebrow="05 / Layout & components" title={<>Build a readable rhythm, then let the <em>action lead.</em></>} intro="The system relies on a spacious content shell, deliberate section transitions, and a small number of high-contrast component patterns. Avoid crowding, ornamental effects, and competing calls to action." />
          <div className="brand-layout-grid">
            <article className="brand-layout-canvas"><div className="brand-layout-canvas__top"><span>12-COLUMN DIGITAL GRID</span><span>1180 PX MAXIMUM SHELL</span></div><div className="brand-layout-canvas__columns" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div><div className="brand-layout-canvas__overlay"><b>Primary message</b><span>Supporting detail</span><em>Action</em></div></article>
            <div className="brand-layout-principles"><article><Grid3X3 size={21} /><h3>Grid-led</h3><p>Use the 1180 px shell and responsive gutters. Allow content to align cleanly across a shared grid.</p></article><article><Box size={21} /><h3>Spacious</h3><p>Use generous section padding and controlled cards. Space is part of the hierarchy, not empty decoration.</p></article><article><MousePointer2 size={21} /><h3>Decisive</h3><p>Keep one dominant action per section. Coral should point to the next useful move.</p></article></div>
          </div>
          <div className="brand-component-showcase"><div><p>BUTTON PRIORITY</p><h3>Lead with an unmissable next step.</h3><span>Primary actions use coral, a solid black offset shadow, and concise conversion language.</span></div><div className="brand-component-showcase__buttons"><span className="button-link button-link--primary">Get Started</span><span className="button-link button-link--outline brand-component-showcase__outline">Book a Demo</span></div><div className="brand-component-showcase__card"><Palette size={21} /><p>Surface pattern</p><strong>Quiet field.<br />Clear accent.</strong></div></div>
        </div>
      </section>

      <section className="brand-accessibility-section">
        <div className="shell"><SectionHeading eyebrow="06 / Accessibility" title={<>The brand should be <em>clear to everyone.</em></>} intro="High contrast and legibility are integral to the agents DX visual identity. Build accessibility into the first design decision, not as a late-stage correction." />
          <div className="brand-accessibility-grid"><article><ShieldCheck size={23} /><h3>Contrast with intent</h3><p>Use Night, Black, or Deep Slate for long-form text on light surfaces. Use coral as an accent and pair it with black text for action labels.</p></article><article><AlignLeft size={23} /><h3>Readable structure</h3><p>Keep body copy at a comfortable digital size, use visible hierarchy, and avoid relying on color alone to communicate status or meaning.</p></article><article><MousePointer2 size={23} /><h3>Visible focus</h3><p>Interactive elements use a 3 px coral focus outline with an offset so keyboard navigation remains clearly visible on every surface.</p></article></div>
        </div>
      </section>

      <section className="brand-usage-section">
        <div className="shell brand-usage-section__grid"><div><p className="eyebrow eyebrow--light"><span /> 07 / In practice</p><h2>Keep the expression <em>considered.</em></h2><p>The most effective agents DX experiences are purposeful and restrained. Use the system to clarify what matters, then remove anything that does not support that outcome.</p></div><div className="brand-usage-rules"><article className="brand-usage-rule brand-usage-rule--do"><span><Check size={15} /> Do</span><h3>Use coral to create a clear hierarchy.</h3><p>Reserve it for actions, key states, signals, and a limited set of essential emphasis points.</p></article><article className="brand-usage-rule brand-usage-rule--dont"><span><X size={15} /> Don’t</span><h3>Use coral as a general background color.</h3><p>Large coral fields reduce its ability to direct attention and can make a screen feel needlessly loud.</p></article><article className="brand-usage-rule brand-usage-rule--do"><span><Check size={15} /> Do</span><h3>Let the typography carry the message.</h3><p>Use strong hierarchy, short statements, and ordinary language that a customer can understand quickly.</p></article><article className="brand-usage-rule brand-usage-rule--dont"><span><X size={15} /> Don’t</span><h3>Decorate the system into distraction.</h3><p>Avoid gradients, visual effects, extra badges, and decorative illustration when they do not clarify a decision.</p></article></div></div>
      </section>

      <section className="brand-guide-note"><div className="shell"><p><strong>Asset governance:</strong> this reference documents the current digital wordmark treatment. When an authorised master logo asset is issued, replace this treatment consistently rather than creating local variants.</p></div></section>
      <FinalCta title={<>A thoughtful brand system makes every <em>next move clearer.</em></>} />
    </MarketingLayout>
  );
}

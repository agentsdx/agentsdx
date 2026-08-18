import { Menu, X, ArrowUpRight, Linkedin, Youtube } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { BrandMark } from "./BrandMark";
import { configurePlatformCal } from "@/lib/calEmbed";

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Our Story" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "dark" | "outline" | "text"; className?: string }) {
  const classNames = `button-link button-link--${variant} ${className}`.trim();
  const isDemoAction = typeof children === "string" && children.includes("Book a Demo");
  if (isDemoAction) {
    return (
      <a href="https://cal.com/agentsdx/platform" data-cal-link="agentsdx/platform" data-cal-namespace="platform" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' className={classNames}>
        <span>{children}</span><ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link href={href} className={classNames}>
      <span>{children}</span>
      {variant !== "text" && <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <BrandMark />
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={location === item.href ? "site-nav__link site-nav__link--active" : "site-nav__link"}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <ButtonLink href="/pricing" variant="text" className="site-header__start">Get Started</ButtonLink>
          <ButtonLink href="/contact" variant="primary" className="site-header__cta">Book a Demo</ButtonLink>
          <button className="menu-trigger" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav shell">
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className="mobile-nav__link" onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <ButtonLink href="/pricing" variant="outline" className="mobile-nav__cta mobile-nav__start">Get Started</ButtonLink>
          <ButtonLink href="/contact" variant="primary" className="mobile-nav__cta">Book a Demo</ButtonLink>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div className="site-footer__intro">
            <BrandMark inverse />
            <p>Built to Engage. Trained to Convert.</p>
            <div className="social-links" aria-label="agents DX social media">
              <a href="https://www.facebook.com/AgentsDXai" aria-label="agents DX on Facebook">f</a>
              <a href="https://www.instagram.com/AgentsDXai" aria-label="agents DX on Instagram">◎</a>
              <a href="https://www.threads.net/@AgentsDXai" aria-label="agents DX on Threads">@</a>
              <a href="https://x.com/AgentsDXai" aria-label="agents DX on X">X</a>
              <a href="https://www.linkedin.com/company/agentsdxai" aria-label="agents DX on LinkedIn"><Linkedin size={18} /></a>
              <a href="https://www.youtube.com/@AgentsDXai" aria-label="agents DX on YouTube"><Youtube size={19} /></a>
              <a href="https://www.tiktok.com/@AgentsDXai" aria-label="agents DX on TikTok">♪</a>
              <a href="https://www.snapchat.com/add/AgentsDXai" aria-label="agents DX on Snapchat">◉</a>
              <a href="https://www.pinterest.com/AgentsDXai" aria-label="agents DX on Pinterest">P</a>
            </div>
          </div>
          <div className="site-footer__nav">
            <div>
              <p className="footer-label">Explore</p>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">Our Story</Link>
              <a href="https://blog.agentsdx.com">Blog</a>
              <a href="https://help.agentsdx.com">Help Center</a>
            </div>
            <div>
              <p className="footer-label">Connect</p>
              <Link href="/contact">Book a Demo</Link>
              <Link href="/faq">FAQ</Link>
              <a href="https://app.agentsdx.com">Login</a>
              <a href="mailto:cs@AgentsDX.com">cs@AgentsDX.com</a>
            </div>
            <div>
              <p className="footer-label">Legal</p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} agents DX. Built for ambitious teams.</p>
          <p className="footer-status"><span /> Systems designed for momentum</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, aside }: { eyebrow: string; title: ReactNode; intro: string; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div>
          <p className="eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__intro">{intro}</p>
        </div>
        {aside && <aside className="page-hero__aside">{aside}</aside>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, alignment = "left" }: { eyebrow: string; title: ReactNode; intro?: string; alignment?: "left" | "center" }) {
  return (
    <div className={`section-heading section-heading--${alignment}`}>
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export type ProofItem = { quote: string; author: string; company: string; rating: number };

export function SocialProof({ items = [], logoNames = [] }: { items?: ProofItem[]; logoNames?: string[] }) {
  if (items.length === 0) {
    return (
      <section className="proof-section proof-section--pending" aria-label="Customer evidence framework">
        <div className="shell proof-section__pending-grid">
          <div>
            <p className="eyebrow"><span /> Proof, when it matters</p>
            <h2>Evidence should be as clear as the system behind it.</h2>
          </div>
          <div className="proof-section__pending-card">
            <span className="signal-orb">01</span>
            <h3>Evidence deserves a standard.</h3>
            <p>agents DX publishes client outcomes only when the source is authorised, the statement is attributable, and the context is meaningful. That is how useful proof stays credible.</p>
            <div className="proof-principles" aria-label="agents DX evidence standard"><span>AUTHORISED SOURCE</span><span>ATTRIBUTABLE</span><span>MEANINGFUL CONTEXT</span></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="proof-section" aria-label="Customer proof">
      <div className="shell">
        <SectionHeading eyebrow="Trusted outcomes" title={<>Teams turn to <em>clarity.</em></>} />
        <div className="proof-grid">
          {items.map(item => (
            <article className="proof-card" key={`${item.author}-${item.company}`}>
              <div className="proof-card__stars" aria-label={`${item.rating} out of 5 stars`}>{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</div>
              <blockquote>“{item.quote}”</blockquote>
              <p><strong>{item.author}</strong><span>{item.company}</span></p>
            </article>
          ))}
        </div>
        {logoNames.length > 0 && <div className="proof-logo-strip" aria-label="Approved client logos">{logoNames.map(name => <span key={name}>{name}</span>)}</div>}
      </div>
    </section>
  );
}

export function FinalCta({ title = <>Ready to turn every signal into <em>forward motion?</em></>, intro = "Build a more intelligent acquisition engine with a team that treats conversion as a system, not a guess." }: { title?: ReactNode; intro?: string }) {
  return (
    <section className="final-cta">
      <div className="shell final-cta__inner">
        <p className="eyebrow"><span /> Next move</p>
        <h2>{title}</h2>
        <p>{intro}</p>
        <div className="button-row">
          <ButtonLink href="/contact" variant="primary">Get Started</ButtonLink>
          <ButtonLink href="/contact" variant="outline">Book a Demo</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function MarketingLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (document.getElementById("agents-dx-cal-embed")) return;
    const script = document.createElement("script");
    script.id = "agents-dx-cal-embed";
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => configurePlatformCal(window.Cal);
    document.head.appendChild(script);
  }, []);

  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

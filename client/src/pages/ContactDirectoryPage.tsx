import { ArrowRight, CalendarDays, Mail, MessageCircle, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaFacebookMessenger, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { MarketingLayout, PageHero, openBookingFrame } from "@/components/marketing/SiteShell";

const bookingOptions = [
  {
    number: "01",
    title: "Agents DX Platform",
    text: "Launch and manage AI agents at scale—fast. Everything you need to build, deploy, and run AI agents with unlimited users and powerful automation tools. No fluff. Just results.",
    href: "https://cal.com/agentsdx/platform",
    link: "agentsdx/platform",
    namespace: "platform",
    accent: "Platform consultation",
  },
  {
    number: "02",
    title: "Agents DX + Dedicated Manager",
    text: "Scale smarter with expert support. All platform features, plus a dedicated manager to guide strategy, integrations, and optimization—so you get the most out of your agents, faster.",
    href: "https://cal.com/agentsdx/platform-dedicated-manager",
    link: "agentsdx/platform-dedicated-manager",
    namespace: "platform-dedicated-manager",
    accent: "Dedicated-manager consultation",
  },
] as const;

const liveChatChannels = [
  { name: "WhatsApp", detail: "Continue in your preferred business chat", icon: FaWhatsapp, tone: "whatsapp" },
  { name: "Instagram", detail: "Start a conversation in direct messages", icon: FaInstagram, tone: "instagram" },
  { name: "Messenger", detail: "Open a connected support conversation", icon: FaFacebookMessenger, tone: "messenger" },
  { name: "Telegram", detail: "Choose a focused real-time chat thread", icon: FaTelegram, tone: "telegram" },
] as const;

export function ContactDirectoryPage() {
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const liveChatTriggerRef = useRef<HTMLButtonElement>(null);
  const liveChatCloseRef = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    if (window.location.hash !== "#demo-booking") return;
    document.getElementById("demo-booking")?.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  useEffect(() => {
    if (!liveChatOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLiveChatOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => liveChatCloseRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      liveChatTriggerRef.current?.focus();
    };
  }, [liveChatOpen]);

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Contact Us"
        title={<>Choose the conversation that helps your <em>work move forward.</em></>}
        intro="Whether you need a practical answer, responsive support, or a working session around your AI workforce, agents DX gives you a clear path to the right next conversation."
        aside={<><p className="aside-label">Your options</p><h3>Reach us directly or book the conversation that fits your <em>operating context.</em></h3><p>There is no form to navigate. Choose the route that is most useful now.</p></>}
      />

      <section className="contact-directory">
        <div className="shell">
          <div className="contact-directory__intro">
            <p className="eyebrow"><span /> Contact pathways</p>
            <h2>Start where the <em>context is clearest.</em></h2>
          </div>
          <div className="contact-directory__grid">
            <a href="mailto:cs@AgentsDX.com" className="contact-path">
              <span>01</span><Mail size={25} strokeWidth={1.6} /><h3>Email Us</h3><p>Get in touch via email</p><strong>cs@AgentsDX.com</strong><ArrowRight size={17} />
            </a>
            <button ref={liveChatTriggerRef} type="button" className="contact-path contact-path--live" aria-haspopup="dialog" aria-expanded={liveChatOpen} onClick={() => setLiveChatOpen(true)}>
              <span>02</span><MessageCircle size={25} strokeWidth={1.6} /><h3>Live Chat</h3><p>Chat with our support team</p><strong>Available 24/7</strong><i aria-label="Support availability indicator" /><small>Live-chat entry point is available in the agents DX application.</small>
            </button>
            <a href="#demo-booking" className="contact-path" aria-label="Schedule a Call: scroll to demo booking options" onClick={(event) => { event.preventDefault(); document.getElementById("demo-booking")?.scrollIntoView({ behavior: "smooth", block: "start" }); window.history.replaceState(null, "", "#demo-booking"); }}>
              <span>03</span><CalendarDays size={25} strokeWidth={1.6} /><h3>Schedule a Call</h3><p>Book a demo with our experts</p><strong>Choose a booking path below</strong><ArrowRight size={17} />
            </a>
          </div>
          <div className="contact-directory__bridge" aria-hidden="true"><span /><i /><span /></div>
        </div>
      </section>

      <section id="demo-booking" className="booking-section">
        <div className="shell">
          <div className="booking-section__head">
            <p className="eyebrow eyebrow--light"><span /> In-frame booking</p>
            <h2>Find the demo path that fits your <em>next stage.</em></h2>
            <p>Each booking action opens the approved agents DX Cal.com experience directly in the page. If your browser blocks the in-frame experience, the same link remains available as a direct booking fallback.</p>
          </div>
          <div className="booking-option-grid">
            {bookingOptions.map((option, index) => (
              <article key={option.namespace} className={index === 1 ? "booking-option booking-option--featured" : "booking-option"}>
                <div className="booking-option__top"><span>{option.number}</span><p>{option.accent}</p></div>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
                <div className="booking-option__signal"><i /> Live calendar is ready</div>
                <button
                  type="button"
                  onClick={() => openBookingFrame({ title: option.title, href: option.href, label: option.accent })}
                  className={index === 1 ? "button-link button-link--primary" : "button-link button-link--outline"}
                >
                  Book Demo <ArrowRight size={16} />
                </button>
                <details className="booking-native-fallback">
                  <summary>Open calendar in this page</summary>
                  <div>
                    <iframe title={`${option.title} in-page booking calendar`} src={option.href} loading="lazy" allow="camera; microphone; fullscreen" />
                    <p>Prefer a full browser view? <a href={option.href} target="_blank" rel="noreferrer">Open the calendar in a new tab</a>.</p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      {liveChatOpen && <div className="live-chat-dialog__backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setLiveChatOpen(false); }}>
        <section className="live-chat-dialog live-chat-dialog--compact live-chat-dialog--editorial" role="dialog" aria-modal="true" aria-labelledby="live-chat-dialog-title" aria-describedby="live-chat-dialog-description" tabIndex={-1}>
          <div className="live-chat-dialog__top"><p>agents DX / live chat</p><button ref={liveChatCloseRef} type="button" aria-label="Close live chat channel chooser" onClick={() => setLiveChatOpen(false)}><X size={20} /></button></div>
          <h2 id="live-chat-dialog-title">Choose the <em>conversation route.</em></h2>
          <p id="live-chat-dialog-description">Message the agents DX team through a channel that feels familiar to you.</p>
          <div className="live-chat-dialog__channels">
            {liveChatChannels.map(({ name, icon: Icon, tone }) => <div key={name} className={`live-chat-channel live-chat-channel--${tone}`} aria-label={`${name} live chat channel`}>
              <span className="live-chat-channel__icon"><Icon aria-hidden="true" /></span><strong>{name}</strong><span className="live-chat-channel__arrow" aria-hidden="true">↗</span>
            </div>)}
          </div>
        </section>
      </div>}
    </MarketingLayout>
  );
}

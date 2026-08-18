import { motion } from "framer-motion";
import { ArrowRight, Bot, CalendarDays, ChartNoAxesCombined, Check, CircleDot, Compass, Gauge, Layers3, Mail, MessageCircle, MessageSquareText, Orbit, Search, ShieldCheck, Sparkles, Target, Workflow, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useRoute } from "wouter";
import { articles, faqGroups, getArticle } from "@/content/siteContent";
import { ButtonLink, FinalCta, MarketingLayout, PageHero, SectionHeading, SocialProof } from "@/components/marketing/SiteShell";

const featureSignals = [
  { icon: Orbit, label: "Support that engages", text: "Give customers a useful response when the moment matters." },
  { icon: Workflow, label: "Sales that follow through", text: "Move opportunities forward with practical automation." },
  { icon: Target, label: "Booking that converts", text: "Turn readiness signals into a clear next action." },
];

export function HomePage() {
  return (
    <MarketingLayout>
      <section className="home-hero">
        <div className="shell home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--light"><span /> Your AI Workforce</p>
            <h1>Built to <em>Engage.</em><br />Trained to Convert.</h1>
            <p>agents DX is an AI agents and business automation platform that turns Support, Sales, and Booking into active digital workforces—built to move your business forward, fast.</p>
            <div className="button-row button-row--start">
              <ButtonLink href="/contact" variant="primary">Get Started</ButtonLink>
              <ButtonLink href="/contact" variant="outline">Book a Demo</ButtonLink>
            </div>
            <div className="hero-note"><span /><p>Launch and manage AI agents at scale with unlimited users and powerful automation tools.</p></div>
          </div>
          <div className="home-hero__visual" aria-label="Illustrative agents DX signal workspace">
            <div className="visual-topline"><span>agents DX / SIGNAL ROOM</span><span className="visual-live">LIVE</span></div>
            <div className="visual-radar" aria-hidden="true"><i /><b /><em /></div>
            <div className="visual-signal visual-signal--one"><span>01</span><strong>Intent detected</strong><small>New inbound context</small></div>
            <div className="visual-signal visual-signal--two"><span>02</span><strong>Route prepared</strong><small>Response path ready</small></div>
            <div className="visual-signal visual-signal--three"><span>03</span><strong>Human ready</strong><small>High-value handoff</small></div>
            <div className="visual-footer"><span><i /> Acquisition clarity</span><span>03:28:41</span></div>
          </div>
        </div>
      </section>

      <section className="signal-rail">
        <div className="shell signal-rail__grid">
          <p className="signal-rail__lead">One system.<br /><em>Clearer momentum.</em></p>
          {featureSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.article key={signal.label} className="signal-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .08, duration: .38 }}>
                <span className="signal-card__number">0{index + 1}</span><Icon size={22} strokeWidth={1.8} /><h3>{signal.label}</h3><p>{signal.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="story-section">
        <div className="shell story-section__grid">
          <div className="story-section__sticky"><p className="eyebrow"><span /> The operating gap</p><h2>The work between interest and <em>intent</em> should not be invisible.</h2></div>
          <div className="story-section__steps">
            {[
              ["01", "See demand clearly", "Bring signals into a single operating view so the team can recognise context rather than react to noise.", Compass],
              ["02", "Design a considered response", "Give automation a clear job: prepare useful context, preserve the tone, and lead toward one deliberate next action.", MessageSquareText],
              ["03", "Protect expert attention", "Make it easy for specialists to enter conversations already prepared, at the moments where their judgement changes the outcome.", ShieldCheck],
            ].map(([number, title, text, Icon]) => {
              const StepIcon = Icon as typeof Compass;
              return <article className="story-step" key={number as string}><span>{number as string}</span><StepIcon size={24} strokeWidth={1.8} /><h3>{title as string}</h3><p>{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="platform-section">
        <div className="shell platform-section__head"><SectionHeading eyebrow="Designed for decisions" title={<>An operating system with the discipline of a <em>great team.</em></>} intro="agents DX applies a structured approach to demand: understand the context, move the work forward, and preserve a clear record of what matters." /><ButtonLink href="/features" variant="text">Explore capabilities <ArrowRight size={16} /></ButtonLink></div>
        <div className="shell platform-grid">
          <article className="platform-card platform-card--large"><div><span className="card-kicker"><Bot size={15} /> Intelligence layer</span><h3>Context that travels with the conversation.</h3><p>Reduce reinvention with an operating layer designed to turn scattered input into a clear, usable next step.</p></div><div className="context-lines"><span>New inquiry</span><i /><span>Intent signal</span><i /><strong>Prepared action</strong></div></article>
          <article className="platform-card"><span className="card-kicker"><Gauge size={15} /> Pace with purpose</span><h3>Respond at the right moment.</h3><p>Build a system that recognises urgency without treating every interaction as identical.</p><div className="mini-gauge"><i /><i /><i /><i /><b /></div></article>
          <article className="platform-card"><span className="card-kicker"><Layers3 size={15} /> Shared clarity</span><h3>Make handoffs feel natural.</h3><p>Give each contributor the context and confidence to take the next meaningful action.</p><div className="handoff-chips"><span>Context</span><span>Owner</span><span>Next move</span></div></article>
        </div>
      </section>

      <SocialProof />
      <FinalCta />
    </MarketingLayout>
  );
}

const capabilities = [
  { icon: Sparkles, title: "Signal interpretation", text: "Turn raw inbound activity into a clearer view of the context and potential intent behind it." },
  { icon: Workflow, title: "Response orchestration", text: "Create considered pathways that maintain momentum without turning every conversation into a rigid script." },
  { icon: MessageSquareText, title: "Conversation continuity", text: "Keep the important details present as a prospect moves through channels, stages, and team members." },
  { icon: Target, title: "Intent-aware routing", text: "Make the right next action more visible, whether that is a helpful answer, a discovery path, or a human handoff." },
  { icon: ChartNoAxesCombined, title: "Operating visibility", text: "Give teams a readable picture of what is generating momentum and where attention is being lost." },
  { icon: ShieldCheck, title: "Human-led control", text: "Build clear decision points so automation improves judgement rather than obscuring it." },
];

export function FeaturesPage() {
  return (
    <MarketingLayout>
      <PageHero eyebrow="Features / How it works" title={<>Your AI workforce, built to deliver <em>real results.</em></>} intro="agents DX helps you build, deploy, and run AI agents for Support, Sales, and Booking. Everything you need to automate practical work at scale—no fluff, just results." aside={<><p className="aside-label">System premise</p><h3>Automation that works as an <em>active workforce.</em></h3><p>Build agents around the jobs that create a stronger customer and revenue experience.</p></>} />
      <section className="feature-section"><div className="shell"><SectionHeading eyebrow="The capability set" title={<>Give every interaction a more <em>useful path.</em></>} intro="Every feature is framed as a practical layer in a conversion system—not an isolated tool." /><div className="capability-grid">{capabilities.map(item => { const Icon = item.icon; return <article className="capability-card" key={item.title}><Icon size={25} strokeWidth={1.7} /><h3>{item.title}</h3><p>{item.text}</p><span className="capability-card__line" /></article>; })}</div></div></section>
      <section className="workflow-section"><div className="shell"><SectionHeading eyebrow="A measured workflow" title={<>From incoming signal to <em>informed action.</em></>} alignment="center" /><div className="workflow-track">{[["01", "Capture", "Collect the first meaningful signal and preserve its context."], ["02", "Interpret", "Identify the intent, urgency, and next useful question."], ["03", "Orchestrate", "Prepare the right response path or human handoff."], ["04", "Learn", "Review the journey, improve the system, and protect quality."]].map(([number, title, text]) => <article key={number}><span>{number}</span><div className="workflow-track__node"><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="dark-split-section"><div className="shell dark-split-section__grid"><div><p className="eyebrow eyebrow--light"><span /> Human judgement, amplified</p><h2>AI should make good operators <em>more available.</em></h2><p>agents DX is designed around a useful boundary: automate repeatable preparation, then put people in the best possible position to act on what they know.</p><ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink></div><div className="human-loop-diagram"><span className="human-loop-diagram__line human-loop-diagram__line--one" /><span className="human-loop-diagram__line human-loop-diagram__line--two" /><div className="diagram-point diagram-point--a"><Bot size={19} /><small>PREPARE</small></div><div className="diagram-point diagram-point--b"><Search size={19} /><small>CONTEXT</small></div><div className="diagram-point diagram-point--c"><span>DX</span><small>DECIDE</small></div></div></div></section>
      <FinalCta title={<>Ready for an acquisition system that keeps <em>thinking forward?</em></>} />
    </MarketingLayout>
  );
}

const pricingPlans = [
  { name: "agents DX Platform", audience: "Launch and manage AI agents at scale—fast.", features: ["AI workforce for Support, Sales, and Booking", "Unlimited users", "Powerful automation tools", "Build, deploy, and run agents in one platform"], tag: "Core platform" },
  { name: "agents DX + Dedicated Manager", audience: "Scale smarter with expert support and strategy.", features: ["Everything in agents DX Platform", "Dedicated manager for strategy and integrations", "Optimisation guidance", "Faster support for your agent workforce"], tag: "Expert-led scale" },
];

export function PricingPage() {
  const [annual, setAnnual] = useState(true);
  return (
    <MarketingLayout>
      <PageHero eyebrow="Platform options" title={<>Choose the AI workforce that matches your <em>next stage.</em></>} intro="Start with the agents DX Platform, then add a dedicated manager when you want expert guidance across strategy, integrations, and optimisation." aside={<><p className="aside-label">Built for results</p><h3>All the platform power—plus the level of <em>support you need.</em></h3><p>Book a demo to shape the right rollout for your team.</p></>} />
      <section className="pricing-section"><div className="shell"><div className="pricing-topline"><p>Explore platform options</p><div className="billing-toggle" role="group" aria-label="Planning rhythm"><button className={!annual ? "billing-toggle__button billing-toggle__button--active" : "billing-toggle__button"} onClick={() => setAnnual(false)} type="button">Monthly</button><button className={annual ? "billing-toggle__button billing-toggle__button--active" : "billing-toggle__button"} onClick={() => setAnnual(true)} type="button">Annual <span>Planning</span></button></div></div><div className="pricing-grid pricing-grid--two">{pricingPlans.map((plan, index) => <article className={index === 1 ? "pricing-card pricing-card--featured" : "pricing-card"} key={plan.name}>{index === 1 && <span className="pricing-card__tag">{plan.tag}</span>}<p className="pricing-card__index">0{index + 1} / {annual ? "Annual" : "Monthly"}</p><h2>{plan.name}</h2><p className="pricing-card__audience">{plan.audience}</p><div className="pricing-card__scope"><span>{annual ? "Annual strategic rhythm" : "Monthly flexible rhythm"}</span><strong>Tailored scope</strong><p>Aligned during discovery</p></div><ul>{plan.features.map(feature => <li key={feature}><Check size={16} strokeWidth={2.4} />{feature}</li>)}</ul><ButtonLink href="/contact" variant={index === 1 ? "primary" : "dark"}>{index === 1 ? "Get Started" : "Book a Demo"}</ButtonLink></article>)}</div><p className="pricing-disclosure">Commercial details and the best rollout are confirmed during your demo conversation with agents DX.</p></div></section>
      <section className="comparison-section"><div className="shell"><SectionHeading eyebrow="Compare the operating layers" title={<>A platform that can grow with your <em>AI workforce.</em></>} /><div className="comparison-wrap"><table><thead><tr><th>Operating layer</th><th>agents DX Platform</th><th>+ Dedicated Manager</th></tr></thead><tbody>{[["AI agents for Support, Sales, and Booking", true, true], ["Unlimited users", true, true], ["Automation tools", true, true], ["Strategy and integration guidance", false, true], ["Ongoing optimisation support", false, true]].map(([label, ...checks]) => <tr key={label as string}><td>{label as string}</td>{checks.map((check, index) => <td key={index}>{check ? <Check size={19} strokeWidth={2.6} aria-label="Included" /> : <span className="comparison-dash">—</span>}</td>)}</tr>)}</tbody></table></div></div></section>
      <SocialProof />
      <FinalCta title={<>Not sure where to start? Let’s find the highest-value <em>next move.</em></>} />
    </MarketingLayout>
  );
}

export function AboutPage() {
  const values = [["01", "Practical intelligence", "We believe good systems make complex work more legible, useful, and actionable."], ["02", "Confident clarity", "Strong ideas should be direct enough to guide decisions without creating unnecessary noise."], ["03", "Human advantage", "Automation has the most value when it gives people better context, timing, and room to exercise judgement."], ["04", "Momentum with intent", "We prefer focused progress over activity for its own sake, and durable systems over short-lived tactics."]];
  return <MarketingLayout><PageHero eyebrow="Our story" title={<>We build systems for teams that want to move with <em>more intent.</em></>} intro="agents DX was shaped around a straightforward belief: the future of client acquisition is not more fragmented activity. It is a more intelligent operating model for seeing opportunity and acting on it well." aside={<><p className="aside-label">Our mission</p><h3>Make the work between <em>signal and decision</em> more useful.</h3><p>Clearer acquisition systems create better outcomes for teams and the people they serve.</p></>} /><section className="about-narrative"><div className="shell about-narrative__grid"><p className="about-narrative__lead">Most demand systems are built around volume. <em>We are interested in quality of movement.</em></p><div><p>When a team can understand what is happening, protect the context behind it, and choose a useful next action, acquisition stops feeling like a chain of disconnected tools. It becomes an operating advantage.</p><p>agents DX brings together AI automation, disciplined workflow thinking, and the human judgement that turns an interaction into a relationship worth continuing.</p></div></div></section><section className="values-section"><div className="shell"><SectionHeading eyebrow="How we work" title={<>The principles behind <em>agents DX.</em></>} /><div className="values-grid">{values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="team-section"><div className="shell team-section__grid"><div><p className="eyebrow"><span /> The team</p><h2>People detail,<br /><em>coming into focus.</em></h2></div><div className="team-placeholder"><div className="team-placeholder__cluster"><i /><i /><i /></div><h3>Team profiles are being prepared.</h3><p>This section is intentionally reserved for approved agents DX leadership and team information.</p></div></div></section><FinalCta /></MarketingLayout>;
}

export function ContactPage() {
  const bookingOptions = [
    { number: "01", title: "Agents DX Platform", text: "Launch and manage AI agents at scale—fast. Everything you need to build, deploy, and run AI agents with unlimited users and powerful automation tools. No fluff. Just results.", href: "https://cal.com/agentsdx/platform", link: "agentsdx/platform", namespace: "platform", accent: "Platform consultation" },
    { number: "02", title: "Agents DX + Dedicated Manager", text: "Scale smarter with expert support. All platform features, plus a dedicated manager to guide strategy, integrations, and optimization—so you get the most out of your agents, faster.", href: "https://cal.com/agentsdx/platform-dedicated-manager", link: "agentsdx/platform-dedicated-manager", namespace: "platform-dedicated-manager", accent: "Dedicated-manager consultation" },
  ];
  return <MarketingLayout><PageHero eyebrow="Contact Us" title={<>Choose the conversation that helps your <em>work move forward.</em></>} intro="Whether you need a practical answer, responsive support, or a working session around your AI workforce, agents DX gives you a clear path to the right next conversation." aside={<><p className="aside-label">Your options</p><h3>Reach us directly or book the conversation that fits your <em>operating context.</em></h3><p>There is no form to navigate. Choose the route that is most useful now.</p></>} /><section className="contact-directory"><div className="shell"><div className="contact-directory__intro"><p className="eyebrow"><span /> Contact pathways</p><h2>Start where the <em>context is clearest.</em></h2></div><div className="contact-directory__grid"><a href="mailto:cs@AgentsDX.com" className="contact-path"><span>01</span><Mail size={25} strokeWidth={1.6} /><h3>Email Us</h3><p>Get in touch via email</p><strong>cs@AgentsDX.com</strong><ArrowRight size={17} /></a><article className="contact-path contact-path--live"><span>02</span><MessageCircle size={25} strokeWidth={1.6} /><h3>Live Chat</h3><p>Chat with our support team</p><strong>Available 24/7</strong><i aria-label="Support availability indicator" /><small>Live-chat entry point is available in the agents DX application.</small></article><article className="contact-path"><span>03</span><CalendarDays size={25} strokeWidth={1.6} /><h3>Schedule a Call</h3><p>Book a demo with our experts</p><strong>Choose a booking path below</strong><ArrowRight size={17} /></article></div></div></section><section className="booking-section"><div className="shell"><div className="booking-section__head"><p className="eyebrow eyebrow--light"><span /> In-frame booking</p><h2>Find the demo path that fits your <em>next stage.</em></h2><p>Each booking action opens the approved agents DX Cal.com experience directly in the page.</p></div><div className="booking-option-grid">{bookingOptions.map((option, index) => <article key={option.namespace} className={index === 1 ? "booking-option booking-option--featured" : "booking-option"}><div className="booking-option__top"><span>{option.number}</span><p>{option.accent}</p></div><h3>{option.title}</h3><p>{option.text}</p><div className="booking-option__signal"><i /> Live calendar is ready</div><a href={option.href} data-cal-link={option.link} data-cal-namespace={option.namespace} data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' className={index === 1 ? "button-link button-link--primary" : "button-link button-link--outline"}>Book Demo <ArrowRight size={16} /></a></article>)}</div></div></section></MarketingLayout>;
}

export function ResourcesPage() {
  return <MarketingLayout><PageHero eyebrow="Resources" title={<>Useful ideas for systems that create <em>better momentum.</em></>} intro="A growing collection of practical perspectives on conversion design, agency operations, and the responsible use of AI in client acquisition." aside={<><p className="aside-label">Editorial focus</p><h3>Useful before <em>impressive.</em></h3><p>Ideas designed to help teams make a clearer next decision.</p></>} /><section className="resources-section"><div className="shell resources-grid">{articles.map((article, index) => <article className="article-card" key={article.slug}><div className={`article-card__art article-card__art--${index + 1}`}><span>{article.date}</span><i /><b /></div><p className="article-card__meta">{article.category}<span>{article.readTime}</span></p><h2>{article.title}</h2><p>{article.excerpt}</p><Link href={`/resources/${article.slug}`} className="article-card__link">Read resource <ArrowRight size={16} /></Link></article>)}</div></section><FinalCta title={<>Want to see how these ideas become a <em>working system?</em></>} /></MarketingLayout>;
}

export function ArticlePage() {
  const [, params] = useRoute("/resources/:slug");
  const article = getArticle(params?.slug ?? "");
  if (!article) return <MarketingLayout><section className="article-not-found"><div className="shell"><p className="eyebrow"><span /> Resource not found</p><h1>That resource is not in the library.</h1><ButtonLink href="/resources" variant="primary">Explore Resources</ButtonLink></div></section></MarketingLayout>;
  return <MarketingLayout><article className="article-page"><header className="article-page__header shell"><Link href="/resources" className="back-link">← Resources</Link><p className="eyebrow"><span /> {article.category}</p><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-page__byline"><span>{article.date}</span><span>{article.readTime}</span></div></header><div className="article-page__visual"><div className="shell"><div><span>AGENTS DX</span><b>{article.date}</b></div></div></div><div className="article-page__content shell">{article.body.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></section>)}<aside><p className="eyebrow"><span /> Continue the conversation</p><h3>See the operating model in context.</h3><ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink></aside></div></article></MarketingLayout>;
}

export function FaqPage() {
  return <MarketingLayout><PageHero eyebrow="FAQ" title={<>Questions worth asking before you build the <em>next system.</em></>} intro="We believe useful answers should be direct. These questions explain the current agents DX website positioning and where a conversation can make the next step clearer." aside={<><p className="aside-label">Still deciding?</p><h3>Specific context creates a more <em>useful answer.</em></h3><p>Bring the challenge to a demo conversation and we will explore it together.</p></>} /><section className="faq-section"><div className="shell faq-section__grid"><aside><p className="eyebrow"><span /> Categories</p><h2>Clear answers.<br /><em>Thoughtful scope.</em></h2><p>Implementation, commercial, technical, and legal details are confirmed through the appropriate agents DX conversation and review process.</p><ButtonLink href="/contact" variant="dark">Book a Demo</ButtonLink></aside><div className="faq-groups">{faqGroups.map(group => <section key={group.title}><h3>{group.title}</h3>{group.questions.map(item => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</section>)}</div></div></section><FinalCta /></MarketingLayout>;
}

export function LegalPage({ title }: { title: "Privacy Policy" | "Terms of Service" }) {
  return <MarketingLayout><section className="legal-page"><div className="shell"><p className="eyebrow"><span /> Legal</p><h1>{title}</h1><div className="legal-page__notice"><ShieldCheck size={28} /><h2>Legal copy pending authorised review.</h2><p>This route is included to preserve the required information architecture. The substantive {title.toLowerCase()} must be supplied or approved by the authorised agents DX legal owner before publication.</p></div></div></section></MarketingLayout>;
}

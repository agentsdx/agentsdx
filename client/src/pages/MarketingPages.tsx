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

const workforceRoles = [
  { number: "01", icon: MessageCircle, title: "Support that responds", text: "Give customers a useful next step while the context is fresh, without losing the tone your team has built." },
  { number: "02", icon: Target, title: "Sales that follows through", text: "Turn interest into a considered path by qualifying context, preserving momentum, and surfacing the next move." },
  { number: "03", icon: CalendarDays, title: "Booking that moves forward", text: "Prepare the right conversation and help people arrive ready for a decision, rather than another round of admin." },
];

const intelligenceLayers = [
  { number: "01", icon: Search, title: "Read the signal", text: "Bring the important context into view before a response is prepared." },
  { number: "02", icon: Layers3, title: "Use approved knowledge", text: "Keep responses grounded in the information and boundaries your team has set." },
  { number: "03", icon: ShieldCheck, title: "Escalate with context", text: "Bring people in when judgement matters, with the conversation already prepared." },
  { number: "04", icon: Sparkles, title: "Improve the rhythm", text: "Review what is working and refine the workforce without treating each interaction as isolated." },
];

const signalCapabilities = [
  { icon: MessageSquareText, title: "Intent-aware conversations", text: "Recognise what a person is trying to accomplish and keep the response oriented around a useful outcome." },
  { icon: Workflow, title: "Prepared response paths", text: "Shape clear pathways for common moments while leaving room for the nuance of a real conversation." },
  { icon: Layers3, title: "Context that stays present", text: "Carry the essential details forward as a customer moves between a conversation, a workflow, and a team member." },
  { icon: ShieldCheck, title: "Human-ready handoffs", text: "Make the transition from automation to expertise feel considered, timely, and easy to act on." },
];

const connectedChannels = [
  { number: "01", icon: MessageCircle, title: "Website chat", text: "Turn the first on-site question into a useful, context-aware path instead of a dead end or a delayed reply." },
  { number: "02", icon: Mail, title: "Email", text: "Carry the conversation forward with a clearer record of what has already been asked, answered, and agreed." },
  { number: "03", icon: MessageSquareText, title: "Social messaging", text: "Give inbound social conversations the same considered next step and operating standards as every other signal." },
  { number: "04", icon: CalendarDays, title: "Booking handoffs", text: "Move high-intent people into the right conversation with the context that makes the next meeting count." },
];

const workflowCapabilities = [
  { number: "01", icon: Compass, title: "Qualification paths", text: "Frame early questions around fit and readiness so the workforce can move a conversation toward the right next step." },
  { number: "02", icon: Workflow, title: "Follow-up rhythms", text: "Keep momentum visible after the first interaction with a deliberate sequence that never feels like noise." },
  { number: "03", icon: CalendarDays, title: "Appointment readiness", text: "Give the team and the prospect a clearer hand-off into a meaningful meeting or consultation." },
  { number: "04", icon: ChartNoAxesCombined, title: "Operational learning", text: "See the moments that create momentum and use that visibility to improve the next workflow." },
];

const availabilityRows = [
  ["AI workforce for Support, Sales, and Booking", true, true],
  ["Unlimited users", true, true],
  ["Powerful automation tools", true, true],
  ["Build, deploy, and run agents in one platform", true, true],
  ["Dedicated manager for strategy and integrations", false, true],
  ["Optimisation guidance and faster support", false, true],
];

const featureQuestions = [
  ["Where should an AI workforce begin?", "Start with the moment where useful context is repeatedly being missed, delayed, or handed over without enough preparation. The first role should solve a visible operating gap before the workforce expands."],
  ["How do people stay in control?", "Agents DX is built around clear human decision points. Automation prepares, routes, and maintains context; your team remains responsible for the judgement, approvals, and relationships that require it."],
  ["Can the workforce work with our existing process?", "The platform is designed to fit practical operating rhythms. A Dedicated Manager can help shape the strategy and integration approach when a team needs more guided implementation."],
  ["What is the difference between Platform and Dedicated Manager?", "Agents DX Platform gives teams the core workforce and automation tools. The Dedicated Manager option adds strategic and integration support, optimisation guidance, and faster support."],
  ["How do we know what to improve next?", "Operating visibility helps teams see where conversations are moving forward and where attention is being lost, creating a clearer basis for the next refinement."],
];

export function FeaturesPage() {
  return (
    <MarketingLayout>
      <section className="features-command-hero">
        <div className="shell features-command-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light"><span /> Features / Your AI workforce</p>
            <h1>One workforce.<br /><em>Every important moment.</em></h1>
            <p className="features-command-hero__intro">agents DX brings Support, Sales, and Booking into one practical operating layer—so every incoming signal can become a clearer, more useful next action.</p>
            <div className="button-row button-row--start"><ButtonLink href="/contact" variant="primary">Get Started</ButtonLink><ButtonLink href="/contact" variant="outline">Book a Demo</ButtonLink></div>
            <div className="features-command-hero__note"><i /><span>Designed for teams that want more context, not more clutter.</span></div>
          </div>
          <aside className="features-command-board" aria-label="Illustrative agents DX workforce operating board">
            <div className="features-command-board__top"><span>agents DX / WORKFORCE BOARD</span><strong>ACTIVE</strong></div>
            <div className="features-command-board__flow"><div><span>01</span><b>Signal arrives</b><small>Conversation context</small></div><i /><div><span>02</span><b>Path prepared</b><small>Relevant next move</small></div><i /><div><span>03</span><b>Team ready</b><small>Human judgement, when needed</small></div></div>
            <div className="features-command-board__footer"><span><i /> Support · Sales · Booking</span><span>CLARITY / ON</span></div>
          </aside>
        </div>
      </section>

      <section className="features-role-section"><div className="shell"><SectionHeading eyebrow="The workforce at a glance" title={<>Three roles. One shared <em>operating rhythm.</em></>} intro="Each role has a distinct job, but every one works from the same context, standards, and view of what matters next." /><div className="features-role-grid">{workforceRoles.map(role => { const Icon = role.icon; return <article key={role.title}><div className="features-role-card__top"><span>{role.number}</span><Icon size={24} strokeWidth={1.7} /></div><h3>{role.title}</h3><p>{role.text}</p><div className="features-role-card__rule"><span>WORKFORCE ROLE</span><i /></div></article>; })}</div></div></section>

      <section className="features-channels-section"><div className="shell features-channels-section__grid"><div className="features-channels-canvas" aria-label="Illustrative connected customer channels"><div className="features-channels-canvas__top"><span>agents DX / CONNECTED CHANNELS</span><strong>ONE CONTEXT</strong></div><div className="features-channels-canvas__core"><span>DX</span><small>WORKFORCE</small></div><div className="features-channels-canvas__node features-channels-canvas__node--chat"><MessageCircle size={19} /><span>WEBSITE CHAT</span></div><div className="features-channels-canvas__node features-channels-canvas__node--email"><Mail size={19} /><span>EMAIL</span></div><div className="features-channels-canvas__node features-channels-canvas__node--social"><MessageSquareText size={19} /><span>SOCIAL</span></div><div className="features-channels-canvas__node features-channels-canvas__node--booking"><CalendarDays size={19} /><span>BOOKING</span></div><div className="features-channels-canvas__footer"><i /> Context moves with the conversation.</div></div><div><p className="eyebrow"><span /> Connected channels</p><h2>Meet customers where they are. <em>Keep the context where it matters.</em></h2><p>agents DX helps your workforce bring the same useful awareness to the conversations happening across your business. Every channel is a new signal—not a new silo.</p><div className="features-channels-list">{connectedChannels.map(channel => { const Icon = channel.icon; return <article key={channel.title}><span>{channel.number}</span><Icon size={20} strokeWidth={1.8} /><div><h3>{channel.title}</h3><p>{channel.text}</p></div></article>; })}</div></div></div></section>

      <section className="features-intelligence-section"><div className="shell features-intelligence-section__grid"><div><p className="eyebrow eyebrow--light"><span /> Intelligence layer</p><h2>Make every response more <em>informed.</em></h2><p>Good automation does not simply respond faster. It recognizes the context, works within your standards, and knows when an expert should take the lead.</p><div className="features-intelligence-section__caption"><Bot size={18} /><span>An intelligence layer built around practical operating judgement.</span></div></div><div className="features-intelligence-steps">{intelligenceLayers.map(item => { const Icon = item.icon; return <article key={item.title}><span>{item.number}</span><Icon size={21} strokeWidth={1.8} /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>; })}</div></div></section>

      <section className="features-signal-section"><div className="shell"><SectionHeading eyebrow="Conversation & signal capture" title={<>Context should travel farther than the <em>first message.</em></>} intro="The capability set is designed to make meaningful information visible, route it with care, and keep it useful as work moves between the workforce and your team." /><div className="features-signal-grid">{signalCapabilities.map((capability, index) => { const Icon = capability.icon; return <article key={capability.title}><span>0{index + 1}</span><Icon size={25} strokeWidth={1.7} /><h3>{capability.title}</h3><p>{capability.text}</p></article>; })}</div></div></section>

      <section className="features-workflow-section"><div className="shell"><div className="features-workflow-section__head"><SectionHeading eyebrow="Workflows that convert" title={<>The system behind a more <em>considered next move.</em></>} intro="Build repeatable momentum without reducing every interaction to a rigid script." /><div className="features-workflow-section__legend"><span><i /> Context retained</span><span><i /> Human-ready</span></div></div><div className="features-workflow-grid">{workflowCapabilities.map(item => { const Icon = item.icon; return <article key={item.title}><div><span>{item.number}</span><Icon size={22} strokeWidth={1.7} /></div><h3>{item.title}</h3><p>{item.text}</p><small>Explore the operating layer <ArrowRight size={14} /></small></article>; })}</div></div></section>

      <section className="features-control-section"><div className="shell features-control-section__grid"><div className="features-control-diagram" aria-label="Illustrative oversight flow"><div className="features-control-diagram__status"><span>OVERSIGHT / ACTIVE</span><i /></div><div className="features-control-diagram__orbit"><div><Bot size={22} /><small>PREPARE</small></div><div><Search size={22} /><small>CONTEXT</small></div><div><span>DX</span><small>DECIDE</small></div><div><ShieldCheck size={22} /><small>APPROVE</small></div></div><p>Clear control points for every role.</p></div><div><p className="eyebrow eyebrow--light"><span /> Control, oversight &amp; integration</p><h2>Automation should make good operators <em>more available.</em></h2><p>agents DX protects the useful boundary between repeatable preparation and human judgement. Keep shared visibility across the workforce, establish clear escalation points, and bring the right people in with the right context.</p><div className="features-control-list"><span><ShieldCheck size={17} /> Human-led decision points</span><span><Layers3 size={17} /> Shared operating visibility</span><span><Gauge size={17} /> Practical optimisation signals</span></div><ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink></div></div></section>

      <section className="features-availability-section"><div className="shell"><SectionHeading eyebrow="Platform availability" title={<>Choose the level of support your <em>workforce needs.</em></>} intro="The platform gives teams the core operating layer. The Dedicated Manager option adds strategic and integration support for teams that want a more guided rollout." /><div className="features-availability-wrap"><table><thead><tr><th>Capability</th><th>agents DX Platform</th><th>+ Dedicated Manager</th></tr></thead><tbody>{availabilityRows.map(([label, platform, manager]) => <tr key={label as string}><td>{label as string}</td><td>{platform ? <Check size={18} strokeWidth={2.6} aria-label="Included" /> : <span>—</span>}</td><td>{manager ? <Check size={18} strokeWidth={2.6} aria-label="Included" /> : <span>—</span>}</td></tr>)}</tbody></table></div><div className="features-availability-section__actions"><ButtonLink href="/pricing" variant="dark">View Pricing</ButtonLink><ButtonLink href="/contact" variant="outline">Book a Demo</ButtonLink></div></div></section>

      <section className="features-faq-section"><div className="shell features-faq-section__grid"><div><p className="eyebrow"><span /> Feature questions</p><h2>Make the next decision with more <em>clarity.</em></h2><p>These are the practical questions teams ask when they are deciding where an AI workforce should begin.</p></div><div className="features-faq-list">{featureQuestions.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<ArrowRight size={17} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
      <FinalCta title={<>Put the workforce to work—<em>with purpose.</em></>} intro="Start with the next high-value role, then build a clearer operating system around the moments that matter." />
    </MarketingLayout>
  );
}

const pricingPlans = [
  { name: "agents DX Platform", audience: "Launch and manage AI agents at scale—fast.", monthlyPrice: "USD 149", annualPrice: "USD 1,788", features: ["AI workforce for Support, Sales, and Booking", "Unlimited users", "Powerful automation tools", "Build, deploy, and run agents in one platform"], tag: "Core platform" },
  { name: "agents DX + Dedicated Manager", audience: "Scale smarter with expert support and strategy.", features: ["Everything in agents DX Platform", "Dedicated manager for strategy and integrations", "Optimisation guidance", "Faster support for your agent workforce"], tag: "Expert-led scale" },
];

export function PricingPage() {
  const [annual, setAnnual] = useState(() => new URLSearchParams(window.location.search).get("billing") === "annual");
  return (
    <MarketingLayout>
      <PageHero eyebrow="Platform options" title={<>Choose the AI workforce that matches your <em>next stage.</em></>} intro="Start with the agents DX Platform, then add a dedicated manager when you want expert guidance across strategy, integrations, and optimisation." aside={<><p className="aside-label">Built for results</p><h3>All the platform power—plus the level of <em>support you need.</em></h3><p>Book a demo to shape the right rollout for your team.</p></>} />
      <section className="pricing-section"><div className="shell"><div className="pricing-topline"><p>Explore platform options</p><div className="billing-toggle" role="group" aria-label="Planning rhythm"><button className={!annual ? "billing-toggle__button billing-toggle__button--active" : "billing-toggle__button"} onClick={() => setAnnual(false)} type="button">Monthly</button><button className={annual ? "billing-toggle__button billing-toggle__button--active" : "billing-toggle__button"} onClick={() => setAnnual(true)} type="button">Annual <span>Planning</span></button></div></div><div className="pricing-grid pricing-grid--two">{pricingPlans.map((plan, index) => <article className={index === 1 ? "pricing-card pricing-card--featured" : "pricing-card"} key={plan.name}>{index === 1 && <span className="pricing-card__tag">{plan.tag}</span>}<p className="pricing-card__index">0{index + 1} / {plan.monthlyPrice ? annual ? "Annual" : "Monthly" : annual ? "Annual" : "Monthly"}</p><h2>{plan.name}</h2><p className="pricing-card__audience">{plan.audience}</p><div className="pricing-card__scope">{plan.monthlyPrice ? <><span>{annual ? "Annual platform subscription" : "Monthly platform subscription"}</span><strong className="pricing-card__price">{annual ? plan.annualPrice : plan.monthlyPrice} <i>{annual ? "/ Year" : "/ Month"}</i></strong><p>{annual ? "Billed annually (USD 149 / Month)" : "Billed monthly"}</p></> : <><span>{annual ? "Annual strategic rhythm" : "Monthly flexible rhythm"}</span><strong>Tailored scope</strong><p>Aligned during discovery</p></>}</div><ul>{plan.features.map(feature => <li key={feature}><Check size={16} strokeWidth={2.4} />{feature}</li>)}</ul><ButtonLink href="/contact" variant={index === 1 ? "primary" : "dark"}>{index === 1 ? "Get Started" : "Book a Demo"}</ButtonLink></article>)}</div><p className="pricing-disclosure">Commercial details for the Dedicated Manager option and the best rollout are confirmed during your demo conversation with agents DX.</p></div></section>
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

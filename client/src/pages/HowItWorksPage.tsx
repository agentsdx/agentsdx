import { ArrowRight, Bot, BrainCircuit, CheckCircle2, CircleDot, Gauge, MessageSquareText, Orbit, ShieldCheck, Sparkles, Target, UsersRound, Workflow } from "lucide-react";
import { ButtonLink, FinalCta, MarketingLayout, SectionHeading } from "@/components/marketing/SiteShell";

const workflowSteps = [
  { number: "01", title: "Orient the workforce", text: "Bring the customer moments, team goals, and operating boundaries into one clear starting point.", icon: Orbit, note: "Context comes first" },
  { number: "02", title: "Design the role", text: "Define what the agent should own, what it should prepare, and where your team should remain in control.", icon: Workflow, note: "A role with purpose" },
  { number: "03", title: "Deploy the rhythm", text: "Activate useful support, sales, and booking paths that move work forward with a consistent tone.", icon: Bot, note: "Work begins with clarity" },
  { number: "04", title: "Improve the system", text: "Review the moments that matter, refine the next action, and keep quality visible as the work evolves.", icon: Gauge, note: "Learning stays in the loop" },
];

export function HowItWorksPage() {
  return (
    <MarketingLayout>
      <section className="how-hero">
        <div className="shell how-hero__grid">
          <div className="how-hero__copy">
            <p className="eyebrow eyebrow--light"><span /> How agents DX works</p>
            <h1>The work is already moving.<br /><em>Give it a system.</em></h1>
            <p>agents DX helps companies design AI workforces that understand the operating context, take on practical roles, and bring people into the moments where judgement makes the difference.</p>
            <div className="button-row button-row--start"><ButtonLink href="/contact" variant="primary">Get Started</ButtonLink><ButtonLink href="/contact" variant="outline">Book a Demo</ButtonLink></div>
            <div className="how-hero__signal"><span /><p>Designed for the real work across Support, Sales, and Booking.</p></div>
          </div>
          <div className="how-command-canvas" aria-label="Illustrative agents DX workforce command canvas">
            <div className="how-command-canvas__top"><span>agents DX / OPERATING CANVAS</span><span>ACTIVE</span></div>
            <div className="how-command-canvas__axis how-command-canvas__axis--x" /><div className="how-command-canvas__axis how-command-canvas__axis--y" />
            <div className="how-command-canvas__core"><BrainCircuit size={28} /><span>WORKFORCE<br />CONTEXT</span></div>
            <div className="how-command-canvas__node how-command-canvas__node--one"><MessageSquareText size={18} /><div><strong>Signal desk</strong><small>Intent becomes visible</small></div></div>
            <div className="how-command-canvas__node how-command-canvas__node--two"><Bot size={18} /><div><strong>Agent role</strong><small>Action prepares itself</small></div></div>
            <div className="how-command-canvas__node how-command-canvas__node--three"><UsersRound size={18} /><div><strong>Human review</strong><small>Judgement stays close</small></div></div>
            <div className="how-command-canvas__legend"><span><i /> Context held</span><span>03 / 03</span></div>
          </div>
        </div>
      </section>

      <section className="how-principle-strip"><div className="shell"><p>Not a generic automation layer.</p><div><span>Context</span><i /><span>Role</span><i /><span>Rhythm</span><i /><span>Review</span></div></div></section>

      <section className="how-loop-section"><div className="shell"><SectionHeading eyebrow="A practical operating loop" title={<>From first signal to <em>better next action.</em></>} intro="The strongest AI workforce does not simply respond. It understands the job, works within a clear boundary, and improves with the team that owns the outcome." /><div className="how-loop">{workflowSteps.map((step, index) => { const Icon = step.icon; return <article key={step.number} className={`how-loop__step how-loop__step--${index + 1}`}><div className="how-loop__number"><span>{step.number}</span><i /></div><div className="how-loop__icon"><Icon size={24} strokeWidth={1.7} /></div><p>{step.note}</p><h2>{step.title}</h2><p className="how-loop__text">{step.text}</p></article>; })}</div></div></section>

      <section className="how-roles-section"><div className="shell how-roles-section__grid"><div><p className="eyebrow eyebrow--light"><span /> The roles that matter</p><h2>Give each workforce role a <em>clear responsibility.</em></h2><p>Start with the work your company needs to move. agents DX helps structure how that work is understood, prepared, and passed to the right person.</p></div><div className="how-roles-list">{[["Support", "Create useful first responses and preserve the detail behind a customer question.", MessageSquareText], ["Sales", "Guide active interest toward a meaningful next decision without losing the human context.", Target], ["Booking", "Recognise readiness and make the next conversation easier to schedule and prepare.", CheckCircle2]].map(([title, text, Icon], index) => { const RoleIcon = Icon as typeof MessageSquareText; return <article key={title as string}><span>0{index + 1}</span><RoleIcon size={21} strokeWidth={1.7} /><div><h3>{title as string}</h3><p>{text as string}</p></div><ArrowRight size={17} /></article>; })}</div></div></section>

      <section className="how-assurance-section"><div className="shell"><div className="how-assurance-section__intro"><p className="eyebrow"><span /> Built for useful control</p><h2>Automation should make the right work <em>more visible.</em></h2><p>agents DX keeps the operating system readable so teams can stay close to quality, customer experience, and the decisions that deserve expert attention.</p></div><div className="how-assurance-grid">{[["Operating boundary", "Decide where an agent can act, where it should prepare, and where it should hand work forward.", ShieldCheck], ["Conversation continuity", "Keep the relevant context close as a customer moves between questions, channels, and people.", CircleDot], ["Practical improvement", "Use what the work reveals to strengthen the next version of the workforce role.", Sparkles]].map(([title, text, Icon]) => { const AssuranceIcon = Icon as typeof ShieldCheck; return <article key={title as string}><AssuranceIcon size={25} strokeWidth={1.6} /><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></div></section>

      <FinalCta title={<>Ready to give your company’s work a <em>better operating rhythm?</em></>} intro="Start with the moments your team needs to move forward. We will help you shape the workforce around the context that matters." />
    </MarketingLayout>
  );
}

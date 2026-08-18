export type UseCase = {
  slug: "small-business" | "ecommerce" | "agencies" | "enterprise" | "startups";
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  mission: string;
  rhythm: string;
  humanMoment: string;
  capabilities: readonly string[];
  steps: readonly { title: string; text: string }[];
};

export const useCases: readonly UseCase[] = [
  {
    slug: "small-business", label: "Small Business", eyebrow: "Use case / Small Business",
    title: "Build a workforce that keeps the <em>front door</em> open.",
    intro: "For focused teams, agents DX can turn first-touch questions, follow-up, and booking into a consistent operating rhythm without adding a heavier process.",
    mission: "Make every important inquiry feel acknowledged and directed.", rhythm: "Capture → clarify → prepare a useful next action.", humanMoment: "Bring an owner or specialist in when context changes the decision.",
    capabilities: ["Always-available first response", "Practical follow-up paths", "Clear booking and handoff signals"],
    steps: [{ title: "Recognise the reason", text: "Give common questions and requests a useful first path without forcing people to repeat themselves." }, { title: "Move the work forward", text: "Prepare the next action around the customer’s context: an answer, a booking prompt, or a clear handoff." }, { title: "Keep the owner in the right moments", text: "Surface conversations that benefit from real expertise instead of adding another inbox to watch." }],
  },
  {
    slug: "ecommerce", label: "E-commerce", eyebrow: "Use case / E-commerce",
    title: "Make product curiosity feel like a <em>confident next step.</em>",
    intro: "For commerce teams, agents DX can create a clearer path between discovery, product questions, and a decision—while preserving the brand tone customers expect.",
    mission: "Turn active product interest into useful momentum.", rhythm: "Discover → guide → resolve the next decision.", humanMoment: "Escalate nuanced product, order, or relationship issues with the right context attached.",
    capabilities: ["Product-question guidance", "Intent-aware follow-up", "Support and sales handoff clarity"],
    steps: [{ title: "See the question behind the click", text: "Identify whether the customer needs discovery, reassurance, or a more specific answer." }, { title: "Guide without the hard sell", text: "Use a helpful response path that moves the decision forward while protecting brand confidence." }, { title: "Resolve the exception cleanly", text: "Route the conversations that need a human with the relevant context already prepared." }],
  },
  {
    slug: "agencies", label: "Agencies", eyebrow: "Use case / Agencies",
    title: "Give every client system a more <em>repeatable rhythm.</em>",
    intro: "For agency teams, agents DX offers a practical way to design and manage AI workforce patterns across client contexts while keeping the delivery model intentional.",
    mission: "Turn one-off automation delivery into a more considered operating system.", rhythm: "Diagnose → configure → improve the client journey.", humanMoment: "Keep strategic judgement visible where client context, tone, and priorities differ.",
    capabilities: ["Reusable operating patterns", "Client-context workforce design", "Clear review and optimisation moments"],
    steps: [{ title: "Start with the operating reality", text: "Map the moments where a client’s team loses time, context, or opportunity." }, { title: "Shape the workforce role", text: "Define what an agent should own, what it should prepare, and when people should enter." }, { title: "Improve with the client", text: "Create a readable rhythm for reviewing the work and adjusting the next version with intention." }],
  },
  {
    slug: "enterprise", label: "Enterprise", eyebrow: "Use case / Enterprise",
    title: "Create AI workforce design that can <em>travel across complexity.</em>",
    intro: "For larger organisations, agents DX helps frame automation around clear roles, responsible handoffs, and the operational context needed to work across teams.",
    mission: "Make automation more legible across people, processes, and customer moments.", rhythm: "Align → orchestrate → govern the next action.", humanMoment: "Preserve accountable review wherever risk, expertise, or high-value relationships require it.",
    capabilities: ["Role-based workforce design", "Cross-team context continuity", "Governed human handoff moments"],
    steps: [{ title: "Define the operating boundary", text: "Start with a clear scope for what the agent supports, who owns the outcome, and what remains human-led." }, { title: "Connect the right context", text: "Design response and routing paths so teams see the information needed to act with confidence." }, { title: "Keep decisions accountable", text: "Build review and escalation moments directly into the operating rhythm rather than treating them as exceptions." }],
  },
  {
    slug: "startups", label: "Startups", eyebrow: "Use case / Startups",
    title: "Give a small team more room to <em>learn fast.</em>",
    intro: "For founder-led teams, agents DX can help turn incoming signals into a more visible learning loop—so the work keeps moving while the team stays close to what matters.",
    mission: "Protect speed without losing the detail behind the signal.", rhythm: "Listen → learn → route the next experiment.", humanMoment: "Bring founders and experts into the conversations that reshape the product, offer, or customer relationship.",
    capabilities: ["Founder-aware intake", "Faster qualification paths", "Feedback signals that remain visible"],
    steps: [{ title: "Capture the signal early", text: "Give every meaningful question, request, or objection a place in the operating view before it disappears into activity." }, { title: "Prepare the next experiment", text: "Use a structured response path to clarify what the customer needs and what the team should test next." }, { title: "Put founders where they matter", text: "Surface the conversations with the strongest learning value, rather than asking the team to monitor everything." }],
  },
];

export function getUseCase(slug: string) {
  return useCases.find(useCase => useCase.slug === slug);
}

export const footerPages = {
  integrations: { eyebrow: "Platform / Integrations", title: "A workforce is most useful when the <em>work stays connected.</em>", intro: "agents DX is designed around the operational surfaces where customer context, team action, and the next decision need to meet.", prompt: "Start with the work—not a connector list.", areas: ["Customer relationship context", "Commerce and order signals", "Scheduling and booking moments", "Support and service workflows"], cta: "Map your operating system" },
  academy: { eyebrow: "Resources / agents DX Academy", title: "Learn to design an AI workforce with <em>better judgement.</em>", intro: "The agents DX Academy is a practical learning space for teams that want to build useful, human-aware automation with confidence.", prompt: "Start with the decisions that matter.", areas: ["First workforce role", "Human handoff design", "Conversation quality review", "Operating rhythm essentials"], cta: "Explore the learning path" },
  careers: { eyebrow: "Company / Careers", title: "Work on systems that make people’s <em>best work</em> more available.", intro: "agents DX is building for teams who believe automation should create clarity, momentum, and more room for human judgement.", prompt: "The work is taking shape.", areas: ["Product and systems thinking", "Practical AI design", "Customer-operating empathy", "Clear written communication"], cta: "Start a conversation" },
  "brand-guidelines": { eyebrow: "Company / Brand Guidelines", title: "A signal system built to feel <em>clear, confident, and useful.</em>", intro: "The agents DX expression combines practical intelligence with a high-contrast visual language that makes the next action easy to find.", prompt: "Use the signal with intention.", areas: ["Coral #FF6D5A for action", "Deep Slate #384D5B for structure", "Zen Dots for the wordmark", "Inter for every operating surface"], cta: "Request approved assets" },
} as const;

export type FooterPageKey = keyof typeof footerPages;

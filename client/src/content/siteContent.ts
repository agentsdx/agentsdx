export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: { heading: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "build-a-stronger-first-response",
    category: "Conversion Design",
    title: "How to design a stronger first response",
    excerpt: "A practical framework for moving from raw inbound interest to a conversation worth continuing.",
    readTime: "6 min read",
    date: "Resource 01",
    body: [
      { heading: "The first response is a decision point", text: "A new inbound message rarely needs more information. It needs a clear next step. Strong response design begins by identifying the highest-value question, then making it easy for the prospect to answer." },
      { heading: "Write for momentum, not completeness", text: "The goal is not to explain every capability at once. Introduce the outcome, acknowledge the prospect’s context, and lead to one intentional action. The remaining detail becomes useful only after the conversation earns it." },
      { heading: "Build a review loop", text: "Teams improve when they can inspect where conversations slow down, which questions create friction, and when a human should join. Treat each response as a small part of a larger operating system." },
    ],
  },
  {
    slug: "an-agency-guide-to-repeatable-demand",
    category: "Agency Systems",
    title: "An agency guide to repeatable demand systems",
    excerpt: "Turn scattered acquisition work into a visible operating model your team can refine and scale.",
    readTime: "8 min read",
    date: "Resource 02",
    body: [
      { heading: "Start with a shared definition of qualified", text: "Consistency starts before a workflow is automated. Give every team member the same picture of a worthwhile lead, the signals that matter, and the moment that requires a handoff." },
      { heading: "Make the operating model visible", text: "A durable system has named stages, clear owners, and a record of the decision that moved a prospect forward. Visibility makes iteration possible and makes quality easier to protect." },
      { heading: "Optimise in small, deliberate cycles", text: "Avoid redesigning every step at once. Pick a meaningful moment in the journey, form a hypothesis, and improve it with evidence from actual conversations." },
    ],
  },
  {
    slug: "when-ai-automation-needs-a-human",
    category: "AI Operations",
    title: "When AI automation needs a human in the loop",
    excerpt: "Use automation to create speed and consistency while preserving judgement where it has the highest value.",
    readTime: "5 min read",
    date: "Resource 03",
    body: [
      { heading: "Automation should create better decisions", text: "The value of automation is not simply faster output. It is a system that recognises familiar patterns, prepares the right context, and leaves the team free to handle nuance." },
      { heading: "Define intentional handoff moments", text: "A handoff should be triggered by meaning, not uncertainty alone. High-stakes questions, unusual requirements, or a clear readiness signal are useful moments for a specialist to step in." },
      { heading: "Keep the conversation coherent", text: "When people join an automated flow, they need the full context: the prospect’s objective, important details shared, and the next question. This is how automation feels considered rather than fragmented." },
    ],
  },
];

export const faqGroups = [
  {
    title: "Platform",
    questions: [
      { question: "What is agents DX?", answer: "agents DX is an AI agents and business automation platform designed to launch and manage an active AI workforce for Support, Sales, and Booking." },
      { question: "Is agents DX a replacement for our team?", answer: "agents DX is built to support practical work. Its role is to create useful automation and make valuable human attention available at the moments where judgement matters most." },
      { question: "Which channels can be part of the workflow?", answer: "Channel and integration availability should be confirmed during a demo. The product story is intentionally focused on the operating model and desired outcome rather than unapproved compatibility claims." },
    ],
  },
  {
    title: "Getting started",
    questions: [
      { question: "How do we get started?", answer: "Use the Book a Demo page to share your goals, company context, and current challenge. The agents DX team can then discuss the most appropriate next step." },
      { question: "Can agents DX support an agency model?", answer: "Agency and partnership requirements are a central use case for conversation. A discovery discussion can determine the right structure, workflow ownership, and client experience." },
      { question: "How is implementation scoped?", answer: "Implementation scope is determined from the team’s acquisition journey, desired automation boundaries, and the systems already in place. This prevents a generic setup from becoming the default." },
    ],
  },
  {
    title: "Security & trust",
    questions: [
      { question: "Where can we review legal information?", answer: "The Privacy Policy and Terms of Service routes are included in the site footer. Their substantive legal copy should be reviewed and supplied by the authorised agents DX legal owner before publication." },
      { question: "How are client stories and ratings handled?", answer: "agents DX should publish only genuine, approved, attributable customer proof. The site’s social-proof component is designed to accept authorised content without manufacturing ratings, quotes, or client marks." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find(article => article.slug === slug);
}

import type { Project } from "../types";

export const ALL_PROJECTS: Project[] = [
  {
    id: "PRJ-001",
    code: "AIRPAY CAPITAL",
    status: "DEPLOYED",
    type: "FINTECH · MICROSERVICES",
    stack: ["NestJS", "PostgreSQL", "MongoDB", "BullMQ", "Redis", "AWS S3"],
    desc: "Microservices loan processing with Bank, CIBIL, GST, ITR, and Income verification flows across 6+ services.",
    longDesc:
      "Microservices loan processing system handling Bank, Income, CIBIL, GST, and ITR verifications with fully automated approval and rejection flows. BullMQ async pipelines enable high-throughput non-blocking processing across verification, reporting, and Excel export jobs. Centralised Logger Microservice captures all API traffic into MongoDB for auditing and distributed observability across 6+ services.",
  },
  {
    id: "PRJ-002",
    code: "GETPAISA",
    status: "DEPLOYED",
    type: "FINTECH · KYC · BACKEND",
    stack: ["Node.js", "Express", "PostgreSQL", "Redshift", "React", "Redux"],
    desc: "Loan onboarding and KYC backend serving 50,000+ users across Aadhaar, PAN, DigiLocker, CIBIL, and reCAPTCHA.",
    longDesc:
      "Loan onboarding and KYC backend serving 50,000+ users. Integrates Aadhaar, PAN, DigiLocker, Bank, Income, CIBIL, Location APIs, and reCAPTCHA — 5+ third-party verification services in a single unified pipeline. React and Redux ops dashboard with role-based approvals, real-time API tracking, advanced filters, and Excel exports.",
  },
  {
    id: "PRJ-003",
    code: "AI AUTOMATION",
    status: "ACTIVE",
    type: "AI · LLM · PIPELINES",
    stack: ["Node.js", "LLM APIs", "BullMQ", "Mermaid.js", "PostgreSQL"],
    desc: "LLM-powered diagram generator and AI sentiment pipeline for automated customer support triage.",
    longDesc:
      "LLM-powered diagram generator producing Flowcharts, ER, Sequence, State, Gantt, and Pie charts from natural language prompts using Mermaid.js. AI sentiment analysis pipeline for automated customer support prioritisation and ticket classification — routes high-urgency tickets before human review.",
  },
  {
    id: "PRJ-004",
    code: "LOGGER SERVICE",
    status: "DEPLOYED",
    type: "OBSERVABILITY · MICROSERVICE",
    stack: ["NestJS", "BullMQ", "MongoDB", "Node.js"],
    desc: "Centralised logging microservice capturing all API traffic across distributed services into MongoDB.",
    longDesc:
      "Designed and built a production-grade centralised Logger Microservice that captures all API traffic across distributed NestJS services into MongoDB via BullMQ queues. Enables full distributed observability asynchronously — zero performance impact on the request path. All writes are fire-and-forget through the queue layer.",
  },
  {
    id: "PRJ-005",
    code: "OPS DASHBOARD",
    status: "DEPLOYED",
    type: "INTERNAL TOOLING · REACT",
    stack: ["React", "Redux", "PostgreSQL", "Node.js"],
    desc: "Internal ops dashboard with role-based approvals, real-time API tracking, and data exports.",
    longDesc:
      "Built an internal operations dashboard used daily by the Airpay ops team. Features role-based access control, approval workflows, real-time API call tracking, advanced filters, paginated data tables, and bulk Excel exports. Dramatically reduced manual intervention in loan processing and KYC review cycles.",
  },
  {
    id: "PRJ-006",
    code: "EVENT PIPELINE",
    status: "ACTIVE",
    type: "EVENT-DRIVEN · ASYNC",
    stack: ["NestJS", "Kafka", "BullMQ", "Redis", "MongoDB"],
    desc: "Async event-driven processing layer for verifications, reporting, and background jobs.",
    longDesc:
      "Designed and implemented the event-driven and asynchronous processing layer across the Airpay platform. BullMQ with Redis handles verification queues, reporting jobs, Excel generation, and background processing. Kafka handles high-throughput event streaming between services with partition-level ordering guarantees.",
  },
];

export const CLASSIFIED_PROJECT: Project = {
  id: "PRJ-007",
  code: "THIS PORTFOLIO",
  status: "ACTIVE",
  type: "FRONTEND · NEXT.JS · TYPESCRIPT",
  stack: ["Next.js", "TypeScript", "React", "CSS"],
  desc: "Custom HUD/terminal aesthetic portfolio. Zero UI frameworks — every component hand-crafted.",
  longDesc:
    "A production developer portfolio built with Next.js and TypeScript from scratch. Features a satellite-dossier HUD aesthetic with scramble-text reveals, glass morphism panels, custom CSS animations, a live coordinate readout, and terminal compile-in interactions. Every component is hand-crafted with zero UI framework dependencies. Fully responsive — no breakpoint hacks.",
};

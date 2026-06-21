import type { Project } from "../types";

export const ALL_PROJECTS: Project[] = [
  {
    id: "PRJ-001",
    code: "AIRPAY CAPITAL",
    status: "DEPLOYED",
    type: "FINTECH · MICROSERVICES",
    stack: ["NestJS", "PostgreSQL", "MongoDB", "BullMQ", "Redis", "AWS S3"],
    desc: "Microservices loan processing with Bank, CIBIL, GST, ITR, and Income verification flows.",
    longDesc:
      "Production-grade loan processing platform built at Airpay Payments using NestJS microservices. Integrated Bank, Income, CIBIL, GST, and ITR verification APIs with automated loan approval and rejection workflows. Designed asynchronous BullMQ pipelines for verifications, reporting, and Excel exports enabling high-throughput, non-blocking processing. Implemented a centralised Logger Microservice.",
  },
  {
    id: "PRJ-002",
    code: "GETPAISA",
    status: "DEPLOYED",
    type: "FINTECH · KYC · BACKEND",
    stack: ["Node.js", "Express", "PostgreSQL", "Redshift", "React", "Redux"],
    desc: "Loan onboarding & KYC backend for 50,000+ users integrating Aadhaar, PAN, DigiLocker, CIBIL.",
    longDesc:
      "Built the complete loan onboarding and KYC backend for Getpaisa serving 50,000+ users. Integrated Aadhaar, PAN, DigiLocker, Bank statement, Income, CIBIL, Location APIs, and reCAPTCHA. Developed a React + Redux admin dashboard with role-based approvals, real-time API tracking, advanced filters, and Excel exports.",
  },
  {
    id: "PRJ-003",
    code: "AI AUTOMATION",
    status: "ACTIVE",
    type: "AI · LLM · PIPELINES",
    stack: ["Node.js", "LLM APIs", "BullMQ", "Mermaid.js", "PostgreSQL"],
    desc: "LLM-powered diagram generator producing Flowcharts, ER, Sequence, State, Gantt diagrams.",
    longDesc:
      "Built AI-powered automation pipelines for engineering and analytics workflows. Developed an LLM-powered diagram generator that produces Flowcharts, ER diagrams, Sequence diagrams, State machines, Gantt charts, and Pie charts from natural-language prompts using Mermaid.",
  },
  {
    id: "PRJ-004",
    code: "LOGGER SERVICE",
    status: "DEPLOYED",
    type: "OBSERVABILITY · MICROSERVICE",
    stack: ["NestJS", "BullMQ", "MongoDB", "Node.js"],
    desc: "Centralised logging microservice capturing all API traffic across distributed services.",
    longDesc:
      "Designed and built a production-grade centralised Logger Microservice that captures all API traffic across distributed NestJS services into MongoDB via BullMQ queues. Enables full distributed observability asynchronously.",
  },
  {
    id: "PRJ-005",
    code: "OPS DASHBOARD",
    status: "DEPLOYED",
    type: "INTERNAL TOOLING · REACT",
    stack: ["React", "Redux", "PostgreSQL", "Node.js"],
    desc: "Internal ops dashboard with role-based approvals, real-time API tracking, and data exports.",
    longDesc:
      "Built an internal operations dashboard used daily by the Airpay ops team. Features role-based access control, approval workflows, real-time API call tracking, advanced filters, paginated data tables, and bulk Excel exports.",
  },
  {
    id: "PRJ-006",
    code: "EVENT PIPELINE",
    status: "ACTIVE",
    type: "EVENT-DRIVEN · ASYNC",
    stack: ["NestJS", "Kafka", "BullMQ", "Redis", "MongoDB"],
    desc: "Async event-driven processing layer for verifications, reporting, and background jobs.",
    longDesc:
      "Designed and implemented the event-driven and asynchronous processing layer across the Airpay platform. Uses BullMQ with Redis for verification queues, reporting jobs, Excel generation, and background processing. Kafka handles high-throughput event streaming between services.",
  },
  {
    id: "PRJ-007",
    code: "EVENT PIPELINE",
    status: "ACTIVE",
    type: "EVENT-DRIVEN · ASYNC",
    stack: ["NestJS", "Kafka", "BullMQ", "Redis", "MongoDB"],
    desc: "Async event-driven processing layer for verifications, reporting, and background jobs.",
    longDesc:
      "Designed and implemented the event-driven and asynchronous processing layer across the Airpay platform. Uses BullMQ with Redis for verification queues, reporting jobs, Excel generation, and background processing. Kafka handles high-throughput event streaming between services.",
  },
];

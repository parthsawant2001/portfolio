import type { SkillCategory } from "../types";
import { C, A, G } from "../theme";

import JS from '../../public/icons_final/javascript.svg'
import DOCKER from '../../public/icons_final/docker.svg'
import EXPRESS from '../../public/icons_final/express.svg'
import FIGMA from '../../public/icons_final/figma.svg'
import GIT from '../../public/icons_final/git.svg'
import GITHUB from '../../public/icons_final/github.svg'
import GO from '../../public/icons_final/go.svg'
import GRAPHQL from '../../public/icons_final/graphql.svg'
import KAFKA from '../../public/icons_final/kafka.svg'
import MONGODB from '../../public/icons_final/mongodb.svg'
import NESTJS from '../../public/icons_final/nestjs.svg'
import NEXTJS from '../../public/icons_final/nextjs.svg'
import NODEJS from '../../public/icons_final/nodejs.svg'
import POSTGRES from '../../public/icons_final/postgresql.svg'
import POSTMAN from '../../public/icons_final/postman.svg'
import REACT from '../../public/icons_final/react.svg'
import REDIS from '../../public/icons_final/redis.svg'
import RUST from '../../public/icons_final/rust.svg'
import SOCKETIO from '../../public/icons_final/socketio.svg'
import TYPESCRIPT from '../../public/icons_final/typescript.svg'
import TAILWIND from '../../public/icons_final/tailwind.svg'
import REDSHIFT from '../../public/icons_final/redshift.svg'
import AWS from '../../public/icons_final/aws-s3.svg'
import CAP from '../../public/icons_final/cap-theorem.svg'
import DISTRIBUTED from '../../public/icons_final/distributed-systems.svg'
import EVENTDRIVEN from '../../public/icons_final/event-driven.svg'
import LOADBALANCING from '../../public/icons_final/load-balancing.svg'
import MICROSERVICES from '../../public/icons_final/microservices.svg'
import REST from '../../public/icons_final/rest-api.svg'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "FRONTEND",
    label: "Frontend",
    color: C,
    count: "06",
    techs: [
      // { logo: JS, n: "JavaScript", s: "ES6+, async/await, DOM" },
      // { logo: TYPESCRIPT, n: "TypeScript", s: "Generics, strict mode" },
      { logo: REACT, n: "React", s: "Hooks, Redux, SPA" },
      { logo: NEXTJS, n: "Next.js", s: "SSR, SSG, App Router" },
      { logo: TAILWIND, n: "Tailwind CSS", s: "Utility-first, responsive" },
      { logo: FIGMA, n: "Figma", s: "UI design, prototyping" },
    ],
  },
  {
    id: "BACKEND",
    label: "Backend",
    color: "#a78bfa",
    count: "06",
    techs: [
      { logo: NODEJS, n: "Node.js", s: "Event loop, streams" },
      { logo: EXPRESS, n: "Express", s: "Middleware, REST routing" },
      { logo: NESTJS, n: "NestJS", s: "Microservices, DI, decorators" },
      { logo: SOCKETIO, n: "Socket.IO", s: "Real-time bidirectional" },
      { logo: REST, n: "REST APIs", s: "Design, versioning, auth" },
      // { logo: GRAPHQL, n: "GraphQL", s: "Schema, resolvers" },
    ],
  },
  {
    id: "DATABASE",
    label: "Database",
    color: A,
    count: "04",
    techs: [
      { logo: POSTGRES, n: "PostgreSQL", s: "Relational, complex queries" },
      { logo: MONGODB, n: "MongoDB", s: "NoSQL, aggregation pipelines" },
      { logo: REDIS, n: "Redis", s: "Cache, pub/sub, sessions" },
      { logo: REDSHIFT, n: "Redshift", s: "Data warehouse, analytics" },
    ],
  },
  {
    id: "QUEUE",
    label: "Queue & Streaming",
    color: G,
    count: "04",
    techs: [
      { logo:'', n: "BullMQ", s: "Job queues, retries, workers" },
      { logo: KAFKA, n: "Kafka", s: "Event streaming, partitioning" },
      { logo:'', n: "Message Queues", s: "Async processing patterns" },
      { logo: EVENTDRIVEN, n: "Event-Driven", s: "Architecture, CQRS, Saga" },
    ],
  },
  {
    id: "DEVOPS",
    label: "DevOps",
    color: "#fbbf24",
    count: "05",
    techs: [
      { logo: DOCKER, n: "Docker", s: "Containers, Compose" },
      { logo: AWS, n: "AWS S3", s: "File storage, pipelines" },
      { logo: GIT, n: "Git", s: "Branching, workflows" },
      { logo: GITHUB, n: "GitHub", s: "PRs, Actions, collaboration" },
      { logo: POSTMAN, n: "Postman", s: "API testing, collections" },
    ],
  },
  {
    id: "SYSDES",
    label: "System Design",
    color: "#f472b6",
    count: "03",
    techs: [
      { logo: MICROSERVICES, n: "Microservices", s: "Decomposition, contracts" },
      { logo: EVENTDRIVEN, n: "Event-Driven Arch", s: "Pub/sub, eventual consistency" },
      { logo: DISTRIBUTED, n: "Distributed Systems", s: "Fault tolerance, consensus" },
      // { n: "CAP Theorem", s: "Consistency vs availability" },
      // { logo: LOADBALANCING, n: "Load Balancing", s: "Horizontal scaling strategies" },
    ],
  },
  {
    id: "LANG",
    label: "Languages",
    color: "#818cf8",
    count: "04",
    techs: [
      { logo: JS, n: "JavaScript", s: "Primary — 5+ years" },
      { logo: TYPESCRIPT, n: "TypeScript", s: "Primary — 3+ years" },
      { logo: GO, n: "Go", s: "Learning · concurrency model", learning: true },
      { logo: RUST, n: "Rust", s: "Learning · memory safety", learning: true },
    ],
  },
  // {
  //   id: "TOOLS",
  //   label: "Tools",
  //   color: "#34d399",
  //   count: "06",
  //   coming: true,
  //   techs: [
  //     { n: "VS Code", s: "Primary IDE" },
  //     { n: "Notion", s: "Notes, project tracking" },
  //     { n: "Obsidian", s: "Knowledge management" },
  //     { n: "Figma", s: "UI/UX design" },
  //     { n: "Postman", s: "API testing" },
  //     { n: "Terminal", s: "Zsh, tmux, custom config" },
  //   ],
  // },
];

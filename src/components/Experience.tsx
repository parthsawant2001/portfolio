import { useRef, useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { useScramble } from "../hooks/useScramble";
import { Card, Divider, SL } from "./ui";
import { C, A, G } from "../theme";

function ExpBullet({ text }: { text: string }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", gap: 9, padding: "10px 14px",
        background: h ? `${C}08` : `${A}05`,
        border: `1px solid ${h ? C + "33" : A + "18"}`,
        borderRadius: 4, borderLeft: `2px solid ${h ? C : A + "55"}`,
        cursor: "default", transition: "all .2s",
      }}
    >
      <span style={{ color: h ? C : A, fontSize: 12, flexShrink: 0, marginTop: 2, transition: "color .2s" }}>›</span>
      <span className="t-body" style={{ color: `${C}66`, fontSize: 11, fontWeight: 300, lineHeight: 1.8 }}>{text}</span>
    </div>
  );
}

const JOB = {
  id: "EXP-01",
  client: "Client: Airpay Payments Pvt. Ltd.",
  role: "Software Developer",
  period: "Feb 2024 – Present",
  location: "Mumbai, India",
  items: [
    "Built and maintained backend and microservices using Node.js, NestJS, PostgreSQL, MongoDB, and Redshift supporting lending, KYC, credit verification, and approval workflows.",
    "Designed event-driven and async systems using BullMQ for verification, reporting, logging, and background processing pipelines.",
    "Developed internal operations dashboards with React, Redux, and PostgreSQL enabling role-based approvals, real-time tracking, and data exports.",
    "Built a centralised logging system using BullMQ + MongoDB to capture all API traffic across microservices for observability and auditing.",
    "Integrated and secured third-party verification services and document handling pipelines including AWS-based file uploads.",
    "Delivered AI-driven automation for sentiment analysis, ticket classification, and LLM-powered diagram generation.",
  ],
};

const EDUCATION = [
  ["EDU-01", "Vishwakarma University, Pune",    "B.Tech Computer Engineering",      "2021 – 2024", "CGPA 8.0 / 10"],
  ["EDU-02", "Vidyalankar Polytechnic, Mumbai", "Diploma in Computer Engineering",  "2018 – 2021", "89.49%"],
] as const;

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);
  const expCoDisplay = useScramble("CAPTICO CONSULTANCY", v, 90);
  const eduTitleDisp = useScramble("EDUCATION",           v, 90);

  return (
    <section id="experience" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SL n="05" label="EXPERIENCE" />
      <div ref={ref} style={{ opacity: v ? 1 : 0, transition: "all .8s", display: "flex", flexDirection: "column", gap: "1.2rem" }}>

        {/* Work card */}
        <Card accent={C} style={{ padding: "2rem 2.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <div>
              <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 6 }}>{JOB.id}</div>
              <div className="t-h2" style={{ color: C, marginBottom: 4, textShadow: `0 0 8px ${C}33` }}>{expCoDisplay}</div>
              <div className="t-label" style={{ color: A, fontSize: 9, marginBottom: 4 }}>{JOB.client}</div>
              <div className="t-body" style={{ color: `${C}66`, fontSize: 12, fontWeight: 300 }}>{JOB.role}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ border: `1px solid ${C}22`, borderRadius: 4, padding: "4px 12px", display: "inline-block", marginBottom: 6 }}>
                <span className="t-meta" style={{ color: `${C}66`, fontSize: 10 }}>{JOB.period}</span>
              </div>
              <div className="t-meta" style={{ color: `${C}33`, fontSize: 9, display: "block" }}>{JOB.location}</div>
            </div>
          </div>
          <Divider />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {JOB.items.map((it, k) => <ExpBullet key={k} text={it} />)}
          </div>
        </Card>

        {/* Education card */}
        <Card accent={C} style={{ padding: "2rem 2.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <div>
              <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 6 }}>EDU-01 · EDU-02</div>
              <div className="t-h2" style={{ color: C, marginBottom: 4, textShadow: `0 0 8px ${C}33` }}>{eduTitleDisp}</div>
              <div className="t-label" style={{ color: A, fontSize: 9, marginBottom: 4 }}>Academic Background</div>
              <div className="t-body" style={{ color: `${C}66`, fontSize: 12, fontWeight: 300 }}>
                Vishwakarma University · Vidyalankar Polytechnic
              </div>
            </div>
          </div>
          <Divider />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {EDUCATION.map(([eid, inst, deg, yr, grade]) => (
              <div key={eid} style={{ border: `1px solid ${C}18`, borderRadius: 5, padding: "14px 16px", background: `${C}04` }}>
                <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 5 }}>{eid}</div>
                <div className="t-h3" style={{ color: C, marginBottom: 3, fontSize: ".8rem" }}>{inst}</div>
                <div className="t-label" style={{ color: A, fontSize: 9, marginBottom: 8 }}>{deg}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="t-meta" style={{ color: `${C}33`, fontSize: 9 }}>{yr}</span>
                  <span style={{
                    background: `${G}18`, border: `1px solid ${G}44`, borderRadius: 3,
                    padding: "2px 8px", fontSize: 9, color: G, fontFamily: "inherit", letterSpacing: ".1em",
                  }}>{grade}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

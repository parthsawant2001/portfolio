import { useRef } from "react";
import { useVisible } from "../hooks/useVisible";
import { useDelayedScramble } from "../hooks/useScramble";
import { Dot, Divider, Field, SL } from "./ui";
import { C, A, G, GLASS } from "../theme";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);

  const dobDisplay      = useDelayedScramble("1 JAN 2002",          v, 55,    0);
  const specDisplay     = useDelayedScramble("HUMAN",                v, 60,  120);
  const locDisplay      = useDelayedScramble("MUMBAI, IN",           v, 55,  260);
  const statusDisplay   = useDelayedScramble("AVAILABLE",            v, 50,  400);
  const clearDisplay    = useDelayedScramble("LVL-5 / DEV",          v, 52,  540);
  const nameDisplay     = useDelayedScramble("PARTH SAWANT",         v, 45,  180);
  const employerDisplay = useDelayedScramble("Captico Consultancy",  v, 48,  460);
  const roleDisplay     = useDelayedScramble("Software Developer",   v, 50,  600);
  const clientDisplay   = useDelayedScramble("Airpay Payments",      v, 46,  740);
  const sinceDisplay    = useDelayedScramble("Feb 2024",             v, 58,  880);
  const eduDisplay      = useDelayedScramble("B.Tech CE, CGPA 8.0", v, 44, 1020);
  const stackDisplay    = useDelayedScramble("Node · NestJS · React",v, 40, 1160);

  return (
    <section id="about" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SL n="02" label="ABOUT" />
      <div
        ref={ref}
        style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(20px)", transition: "all .8s" }}
      >
        <div style={{
          border: `1px solid ${C}33`, borderRadius: 6, overflow: "hidden",
          background: GLASS,
          backdropFilter: "blur(28px) saturate(1.7)",
          WebkitBackdropFilter: "blur(28px) saturate(1.7)",
          boxShadow: `0 4px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(0,245,255,.07)`,
        }}>
          {/* Header */}
          <div style={{
            background: `${C}09`, borderBottom: `1px solid ${C}22`,
            padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="t-label" style={{ color: `${C}66`, fontSize: 9, letterSpacing: ".25em" }}>AGENT PROFILE /</span>
              <span className="t-code" style={{ color: C, fontSize: 11, fontWeight: 600, letterSpacing: ".2em" }}>CF-001</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Dot size={5} /><span className="t-label" style={{ color: G, fontSize: 8 }}>ACTIVE</span>
            </div>
          </div>

          {/* Archive ID strip */}
          <div style={{
            background: `${C}05`, borderBottom: `1px solid ${C}18`,
            padding: "6px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div>
              <span className="t-label" style={{ color: `${C}33`, fontSize: 8, marginRight: 8 }}>1.1 /</span>
              <span className="t-code" style={{ color: `${C}55`, fontSize: 10 }}>PARTH SAWANT</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="t-label" style={{ color: `${C}33`, fontSize: 8 }}>ARCHIVE# /</span>
              <span className="t-code" style={{ color: C, fontSize: 11, fontWeight: 600, letterSpacing: ".12em" }}>CF-ECC-D-PS001</span>
            </div>
          </div>

          {/* Body */}
          <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 0 }}>
            {/* Left */}
            <div style={{ borderRight: `1px solid ${C}18`, padding: "16px" }}>
              {/* Photo placeholder */}
              <div style={{
                position: "relative", marginBottom: 16,
                border: `1px solid ${C}33`, borderRadius: 4, overflow: "hidden",
                background: "#020c1e", height: 190,
              }}>
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke={`${C}20`} strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke={`${C}20`} strokeWidth="1" />
                  <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke={`${C}15`} strokeWidth="1" />
                </svg>
                <div style={{
                  position: "absolute", inset: 0, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", zIndex: 1,
                }}>
                  <span className="t-label" style={{ color: `${C}33`, fontSize: 8, textAlign: "center", padding: "0 12px" }}>
                    IMAGE NOT AVAILABLE
                  </span>
                  <span className="t-meta" style={{ color: `${C}22`, fontSize: 8, marginTop: 4 }}>Add photo URL</span>
                </div>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,245,255,0.025) 3px,rgba(0,245,255,0.025) 4px)`,
                  pointerEvents: "none", zIndex: 2,
                }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Field n="2" label="DOB"       value={dobDisplay} />
                <Field n="3" label="IN.SPEC"   value={specDisplay} />
                <Field n="4" label="LOCATION"  value={locDisplay} />
                <Field n="5" label="STATUS"    value={statusDisplay} color={G} />
                <Field n="6" label="CLEARANCE" value={clearDisplay} />
              </div>
            </div>

            {/* Right */}
            <div style={{ padding: "16px 20px" }}>
              <div style={{ marginBottom: 14 }}>
                <div className="t-label" style={{ color: `${C}33`, fontSize: 8, marginBottom: 4 }}>7 EPM STATUS /</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                  <span className="t-h2" style={{ color: C, textShadow: `0 0 8px ${C}44` }}>{nameDisplay}</span>
                  <span className="t-label" style={{ color: A, fontSize: 9 }}>SOFTWARE DEVELOPER</span>
                </div>
                <div className="t-label" style={{ color: `${C}44`, fontSize: 9, marginTop: 3 }}>
                  8 TITLE / BACKEND ENGINEER · MICROSERVICES · EVENT-DRIVEN SYSTEMS
                </div>
              </div>
              <Divider />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px", marginBottom: 14 }}>
                <Field n="A" label="EMPLOYER"  value={employerDisplay} />
                <Field n="B" label="CLIENT"    value={clientDisplay} />
                <Field n="C" label="ROLE"      value={roleDisplay} />
                <Field n="D" label="SINCE"     value={sinceDisplay} />
                <Field n="E" label="STACK"     value={stackDisplay} />
                <Field n="F" label="EDUCATION" value={eduDisplay} />
              </div>
              <Divider />
              <div style={{
                background: `${C}05`, borderLeft: `2px solid ${C}22`,
                padding: "10px 14px", borderRadius: "0 4px 4px 0", marginBottom: 10,
              }}>
                <div className="t-label" style={{ color: `${C}44`, fontSize: 9, marginBottom: 6 }}>BIOGRAPHY /</div>
                <p className="t-body" style={{ color: `${C}88`, fontWeight: 300, fontSize: 12 }}>
                  Software developer based in Mumbai with hands-on experience building production backend
                  systems at Captico Consultancy for client Airpay Payments Pvt. Ltd. Specialises in
                  microservices architecture, event-driven systems, and KYC/lending verification pipelines at scale.
                </p>
              </div>
              <div style={{
                background: `${A}06`, borderLeft: `2px solid ${A}22`,
                padding: "10px 14px", borderRadius: "0 4px 4px 0",
              }}>
                <p className="t-body" style={{ color: `${C}66`, fontWeight: 300, fontSize: 12 }}>
                  Work spans NestJS microservices, BullMQ job queues, distributed logging, and React ops
                  dashboards. Also built AI pipelines for sentiment analysis and LLM-driven diagram generation.
                  Exploring Go, Rust, and distributed systems design.
                </p>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div style={{
            borderTop: `1px solid ${C}18`, padding: "6px 20px", background: `${C}04`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span className="t-meta" style={{ color: `${C}33`, fontSize: 8 }}>GAEA REGISTERED DEVELOPER ARCHIVES [1.0]</span>
            <span className="t-label" style={{ color: `${C}44`, fontSize: 8 }}>× PROFILE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

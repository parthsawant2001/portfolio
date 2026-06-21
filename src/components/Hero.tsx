import { useState, useEffect } from "react";
import { Btn, Clock, Dot, TW, SocialLink, DecoCorner, DecoBars } from "./ui";
import { C, A, G, NAVY } from "../theme";

const GITHUB_PATH =
  "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .268.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z";

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

// const ROLES = ["SOFTWARE DEVELOPER", "BACKEND ENGINEER", "SYSTEMS ARCHITECT", "API ENGINEER"];

interface HeroProps { onContact: () => void; }

export function Hero({ onContact }: HeroProps) {
  const [ri, setRi] = useState(0);

  // useEffect(() => {
  //   const t = setInterval(() => setRi((i) => (i + 1) % ROLES.length), 3800);
  //   return () => clearInterval(t);
  // }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const statusBar: [string, string][] = [
    ["Feb 2024 – Present", C],
    ["Captico / Airpay", A],
    ["50k+ Users Served", G],
    ["Microservices · Event-Driven", C],
  ];

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      padding: "80px 2rem 80px", textAlign: "center",
    }}>
      {/* Top info bar */}
      <div style={{
        position: "absolute", top: 52, left: 0, right: 0, height: 26,
        borderBottom: `1px solid ${C}08`, background: "rgba(2,8,20,.3)",
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem",
      }}>
        <span className="t-meta" style={{ color: `${C}33`, fontSize: 9 }}>Mumbai, India · UTC+5:30</span>
        <span className="t-meta" style={{ color: A, fontSize: 9 }}><Clock /> IST</span>
      </div>

      {/* Decorative corners */}
      <div style={{ position: "absolute", top: 100, left: 32, opacity: 0.25, display: "flex", flexDirection: "column", gap: 8 }}>
        <DecoCorner size={24} color={C} />
        <DecoBars color={C} opacity={0.7} />
      </div>
      <div style={{ position: "absolute", top: 100, right: 32, opacity: 0.25, display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
        <DecoCorner size={24} color={C} flip={true} />
        <DecoBars color={A} opacity={0.7} />
      </div>

      {/* Status badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 22,
        border: `1px solid ${G}33`, borderRadius: 4, padding: "4px 14px", background: `${G}08`,
      }}>
        <Dot size={5} />
        <span className="t-label" style={{ color: G, fontSize: 9 }}>AVAILABLE FOR NEW OPPORTUNITIES</span>
      </div>

      {/* Name with ghost */}
      <div style={{ position: "relative", marginBottom: 10 }}>
        <div style={{
          position: "absolute", top: 5, left: 5, right: -5, color: A, opacity: 0.05,
          fontFamily: "'JetBrains Mono',monospace", fontWeight: 700,
          fontSize: "clamp(2.8rem,8vw,5.2rem)", letterSpacing: ".04em",
          userSelect: "none", pointerEvents: "none",
        }}>
          PARTH SAWANT
        </div>
        <h1 className="t-hero" style={{ color: C, textShadow: `0 0 40px ${C}33,0 0 80px ${C}15`, animation: "glitch 10s infinite" }}>
          PARTH SAWANT
        </h1>
      </div>

      {/* Typewriter role */}
      {/* <div style={{ height: 32, marginBottom: 28, display: "flex", justifyContent: "center" }}>
        <TW
          key={ri}
          text={`// ${ROLES[ri]}`}
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "clamp(.9rem,2.5vw,1.15rem)",
            color: `${C}77`, fontWeight: 300, letterSpacing: ".16em",
          }}
        />
      </div> */}

      {/* Bio */}
      <p className="t-body" style={{ color: `${C}66`, maxWidth: 560, marginBottom: 36, fontWeight: 300 }}>
        Building production-grade backend systems and microservices at{" "}
        <span style={{ color: C }}>Captico / Airpay Payments</span>. From event-driven pipelines
        to real-time KYC workflows — I architect and ship systems that handle scale.
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36, justifyContent: "center" }}>
        <Btn variant="primary" size="md" onClick={scrollToProjects}>
          <svg width="9" height="9" viewBox="0 0 9 9"><polygon points="0,0 9,4.5 0,9" fill={NAVY} /></svg>
          VIEW PROJECTS
        </Btn>
        <Btn variant="secondary" size="md" onClick={onContact}>CONTACT ME</Btn>
      </div>

      {/* Social links */}
      <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <span className="t-meta" style={{ color: `${C}33`, fontSize: 9 }}>FIND ME</span>
        <SocialLink name="GitHub" col={C} path={GITHUB_PATH} url='https://github.com/parthsawant2001' />
        <SocialLink name="LinkedIn" col={C} path={LINKEDIN_PATH} url='https://www.linkedin.com/in/parth-sawant-186b9b1b7/' />
      </div>

      {/* Bottom status bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 36,
        borderTop: `1px solid ${C}08`, background: "rgba(2,8,20,.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "2.5rem", padding: "0 2rem",
      }}>
        {statusBar.map(([v, col]) => (
          <span key={v} className="t-code" style={{ color: col, fontSize: 11, fontWeight: 500, textShadow: `0 0 6px ${col}44` }}>
            {v}
          </span>
        ))}
      </div>
    </section>
  );
}

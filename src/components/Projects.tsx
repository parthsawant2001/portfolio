import { useRef, useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { useScramble } from "../hooks/useScramble";
import { Dot, Divider, GlassModal, SL } from "./ui";
import { C, A, G, NAVY, GLASS } from "../theme";
import { ALL_PROJECTS, CLASSIFIED_PROJECT } from "../data/projects";
import type { Project } from "../types";
import { SectionFlash } from "./SectionFlash";

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const titleDisplay = useScramble(p.code, true, 60);
  const statusColor = p.status === "DEPLOYED" ? G : p.status === "ACTIVE" ? C : A;

  return (
    <GlassModal onClose={onClose} maxWidth={600}>
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
          <div>
            <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 6 }}>{p.id} · {p.type}</div>
            <div className="t-h2" style={{ color: C }}>{titleDisplay}</div>
            <div className="t-label" style={{ color: A, fontSize: 9, marginTop: 4 }}>{p.type}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Dot size={5} color={statusColor} />
              <span className="t-label" style={{ color: statusColor, fontSize: 9 }}>{p.status}</span>
            </div>
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: `${C}44`, cursor: "pointer", fontFamily: "inherit", fontSize: 18, lineHeight: 1, transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = A)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${C}44`)}
            >✕</button>
          </div>
        </div>
        <Divider />
        <p className="t-body" style={{ color: `${C}88`, marginBottom: 20, fontWeight: 300, lineHeight: 2 }}>{p.longDesc}</p>
        <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 10 }}>TECH STACK</div>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
          {p.stack.map((s) => (
            <div key={s} style={{ padding: "3px 10px", border: `1px solid ${C}33`, borderRadius: 4, background: `${C}08` }}>
              <span className="t-label" style={{ color: `${C}88`, fontSize: 9 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </GlassModal>
  );
}

// ─── Regular project card ─────────────────────────────────────────────────────

function ProjectCard({ p, i, vis }: { p: Project; i: number; vis: boolean }) {
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useVisible(ref, 0.1);
  const [tick, setTick] = useState(0);
  const codeDisplay = useScramble(p.code, inView || tick > 0, 42, tick);
  const sc = p.status === "DEPLOYED" ? G : p.status === "ACTIVE" ? C : A;

  return (
    <>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={() => setOpen(true)}
        style={{
          position: "relative", background: GLASS,
          backdropFilter: "blur(28px) saturate(1.7)", WebkitBackdropFilter: "blur(28px) saturate(1.7)",
          border: `1px solid ${hov ? C + "55" : C + "18"}`, borderRadius: 6, overflow: "hidden",
          display: "flex", flexDirection: "column",
          opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)",
          transition: `opacity .5s ${i * 0.07}s,transform .5s ${i * 0.07}s,border-color .22s,box-shadow .22s`,
          boxShadow: hov
            ? `0 0 28px ${C}14,0 4px 40px rgba(0,0,0,.4)`
            : `0 4px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(0,245,255,.07)`,
          cursor: "pointer",
        }}
      >
        {hov && (
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1, zIndex: 3,
            background: `linear-gradient(90deg,transparent,${C},transparent)`, animation: "pulse 2s infinite",
          }} />
        )}
        <div style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <div style={{
            position: "absolute", inset: 0, background: C, borderRadius: "6px 6px 0 0",
            transform: hov ? "translateX(0)" : "translateX(-100%)",
            transition: "transform .38s cubic-bezier(.4,0,.2,1)", zIndex: 0,
          }} />
          <div style={{
            position: "relative", zIndex: 1, display: "flex", alignItems: "center",
            justifyContent: "space-between", padding: "10px 16px",
            borderBottom: `1px solid ${hov ? "transparent" : C + "15"}`,
          }}>
            <span className="t-label" style={{ color: hov ? NAVY : A, fontSize: 10, fontWeight: 700, transition: "color .2s" }}>{p.id}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{
                width: 4, height: 4, borderRadius: "50%", background: hov ? NAVY : sc,
                transition: "background .2s", animation: "pulse 2s infinite", display: "inline-block",
                boxShadow: hov ? "none" : `0 0 5px ${sc}`,
              }} />
              <span className="t-label" style={{ color: hov ? NAVY : sc, fontSize: 9, transition: "color .2s" }}>{p.status}</span>
            </div>
          </div>
        </div>
        <div style={{ padding: "20px 20px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div ref={ref}>
            <div className="t-h3" style={{
              color: C, fontSize: ".9rem", marginBottom: 5,
              textShadow: hov ? `0 0 10px ${C}55` : "none", transition: "text-shadow .2s",
            }}>{codeDisplay}</div>
            <div className="t-label" style={{ color: `${C}44`, fontSize: 9 }}>{p.type}</div>
          </div>
          <p className="t-body" style={{ color: `${C}55`, fontSize: 12, lineHeight: 1.85, fontWeight: 300 }}>{p.desc}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {p.stack.map((s) => (
              <span key={s} className="t-code" style={{
                fontSize: 9, border: `1px solid ${C}22`, borderRadius: 3,
                color: `${C}66`, padding: "2px 8px", background: `${C}06`,
              }}>{s}</span>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto", paddingTop: 4 }}>
            <span className="t-label" style={{ color: hov ? C : `${C}33`, fontSize: 9, transition: "color .22s", letterSpacing: ".15em" }}>
              {hov ? "CLICK TO EXPAND →" : "VIEW DETAILS"}
            </span>
          </div>
        </div>
      </div>
      {open && <ProjectModal p={p} onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── Classified card ──────────────────────────────────────────────────────────

function ClassifiedCard({ vis }: { vis: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const [open, setOpen] = useState(false);

  if (revealed) {
    return (
      <>
        <ProjectCard p={CLASSIFIED_PROJECT} i={6} vis={vis} />
        {open && <ProjectModal p={CLASSIFIED_PROJECT} onClose={() => setOpen(false)} />}
      </>
    );
  }

  return (
    <div style={{
      position: "relative", borderRadius: 6, overflow: "hidden",
      border: `1px solid ${A}33`,
      display: "flex", flexDirection: "column",
      opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)",
      transition: `opacity .5s ${6 * 0.07}s,transform .5s ${6 * 0.07}s`,
      background: `${A}05`,
      backdropFilter: "blur(28px) saturate(1.7)", WebkitBackdropFilter: "blur(28px) saturate(1.7)",
      boxShadow: `0 4px 32px rgba(0,0,0,.4), 0 0 0 1px ${A}0a`,
      minHeight: 240,
    }}>
      {/* Danger accent line */}
      <div style={{ height: 1, background: `linear-gradient(90deg,${A}88,${A}22,transparent)` }} />

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 16px", borderBottom: `1px solid ${A}18`,
        background: `${A}08`,
      }}>
        <span className="t-label" style={{ color: `${A}88`, fontSize: 10, fontWeight: 700 }}>PRJ-007</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{
            width: 4, height: 4, borderRadius: "50%", background: A,
            animation: "pulse 2s infinite", display: "inline-block", boxShadow: `0 0 5px ${A}`,
          }} />
          <span className="t-label" style={{ color: A, fontSize: 9 }}>RESTRICTED</span>
        </div>
      </div>

      {/* Redacted body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 20px", gap: 16 }}>
        {/* Redaction bars */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 6, filter: "blur(2px)", userSelect: "none", pointerEvents: "none" }}>
          {[80, 60, 90, 50].map((w, i) => (
            <div key={i} style={{
              height: 8, borderRadius: 2, background: `${A}22`,
              width: `${w}%`,
            }} />
          ))}
        </div>

        {/* Classified label */}
        <div style={{ textAlign: "center" }}>
          <div className="t-code" style={{
            color: A, fontSize: 13, fontWeight: 700, letterSpacing: ".2em",
            textShadow: `0 0 12px ${A}66`, marginBottom: 6,
          }}>
            [CLASSIFIED]
          </div>
          <div className="t-label" style={{ color: `${A}66`, fontSize: 9, letterSpacing: ".18em", marginBottom: 20 }}>
            CLEARANCE REQUIRED
          </div>
          <button
            onClick={() => setRevealed(true)}
            style={{
              background: "none", border: `1px solid ${A}55`, borderRadius: 4,
              color: A, fontFamily: "'JetBrains Mono',monospace",
              fontSize: 9, fontWeight: 600, letterSpacing: ".15em",
              padding: "7px 18px", cursor: "pointer", transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${A}14`;
              e.currentTarget.style.boxShadow = `0 0 14px ${A}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {">"} DECLASSIFY
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);

  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <SectionFlash text="> ACCESSING /projects... [OK]" />
      <SL n="04" label="PROJECTS" />
      <div
        ref={ref}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(330px,100%),1fr))", gap: "1.5rem" }}
      >
        {ALL_PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} vis={v} />)}
        <ClassifiedCard vis={v} />
      </div>
    </section>
  );
}

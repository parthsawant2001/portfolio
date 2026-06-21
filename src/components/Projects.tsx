import { useRef, useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { useScramble } from "../hooks/useScramble";
import { Btn, Dot, Divider, GlassModal, SL } from "./ui";
import { C, A, G, NAVY, GLASS } from "../theme";
import { ALL_PROJECTS } from "../data/projects";
import type { Project } from "../types";

const PAGE_SIZE = 6;

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
        {/* <Btn variant="ghost" size="sm">VIEW ON GITHUB →</Btn> */}
      </div>
    </GlassModal>
  );
}

function ProjectCard({ p, i, vis }: { p: Project; i: number; vis: boolean }) {
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useVisible(ref, 0.1);
  const [scrambleTick, setScrambleTick] = useState(0);
  const codeDisplay = useScramble(p.code, inView || scrambleTick > 0, 42, scrambleTick);
  const sc = p.status === "DEPLOYED" ? G : p.status === "ACTIVE" ? C : A;

  const handleEnter = () => { setHov(true) };
  const handleLeave = () => setHov(false);

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
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
        {/* Card header with fill sweep */}
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

        {/* Card body */}
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

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);
  const [shown, setShown] = useState(PAGE_SIZE);
  const visible = ALL_PROJECTS.slice(0, shown);
  const hasMore = shown < ALL_PROJECTS.length;

  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SL n="04" label="PROJECTS" />
      <div
        ref={ref}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))", gap: "1.5rem", marginBottom: "2rem" }}
      >
        {visible.map((p, i) => <ProjectCard key={p.id} p={p} i={i} vis={v} />)}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Btn variant="ghost" size="md" disabled={!hasMore} onClick={() => setShown((s) => s + PAGE_SIZE)}>
          {hasMore ? `SEE MORE PROJECTS (${ALL_PROJECTS.length - shown} remaining)` : "ALL PROJECTS SHOWN"}
        </Btn>
      </div>
    </section>
  );
}


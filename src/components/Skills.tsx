import { useRef, useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { SL } from "./ui";
import { C, GLASS } from "../theme";
import { SKILL_CATEGORIES } from "../data/skills";
import type { Tech, SkillCategory } from "../types";
import Image from "next/image";
import { SectionFlash } from "./SectionFlash";

const ALL_TECHS: { tech: Tech; cat: SkillCategory }[] = SKILL_CATEGORIES.flatMap((cat) =>
  cat.techs.map((tech) => ({ tech, cat }))
);
const TOTAL = ALL_TECHS.length;


function TechCard({ t, color, dim }: { t: Tech; color: string; dim: boolean }) {
  const [h, setH] = useState(false);
  const isLearning = !!t.learning;
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 10, padding: "11px 13px",
        border: `1px solid ${dim ? C + "09" : h ? color + "55" : isLearning ? color + "18" : color + "22"}`,
        borderRadius: 6,
        background: dim ? "rgba(4,14,38,.18)" : h ? `${color}0e` : GLASS,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        transition: "opacity .35s, filter .35s, border-color .2s, background .2s",
        opacity: dim ? 0.18 : isLearning ? 0.65 : 1,
        filter: dim ? "grayscale(1)" : "none",
        cursor: "default", position: "relative",
        ...(isLearning && !dim ? { borderStyle: "dashed" } : {}),
      }}
    >
      {isLearning && !dim && (
        <div style={{
          position: "absolute", top: 6, right: 8,
          fontSize: 7, color: `${color}77`,
          fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".1em",
        }}>
          LEARNING
        </div>
      )}
      <div style={{
        width: 36, height: 36, borderRadius: 7, flexShrink: 0,
        border: `1px solid ${dim ? "transparent" : color + "2a"}`,
        background: dim ? "transparent" : `${color}08`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {t.logo ? (
          <Image preload={true} alt="logo" width={34} height={34} src={t.logo} />
        ) : (
          <svg width="34" height="34" viewBox="0 0 34 34">
            <line x1="2" y1="2" x2="32" y2="32" stroke={`${color}30`} strokeWidth="1.2" />
            <line x1="32" y1="2" x2="2" y2="32" stroke={`${color}30`} strokeWidth="1.2" />
          </svg>
        )}
      </div>
      <div style={{ minWidth: 0, paddingRight: isLearning ? 48 : 0 }}>
        <div className="t-code" style={{
          color: dim ? `${C}18` : h ? color : `${color}cc`,
          fontSize: 11, fontWeight: 500, transition: "color .2s", lineHeight: 1.3,
        }}>{t.n}</div>
        <div className="t-meta" style={{
          color: dim ? `${C}12` : `${C}44`,
          fontSize: 9, marginTop: 2, lineHeight: 1.4, fontWeight: 300, transition: "color .35s",
        }}>{t.s}</div>
      </div>
    </div>
  );
}

function Chip({ cat, active, onToggle }: { cat: SkillCategory; active: boolean; onToggle: () => void }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "5px 11px 5px 8px",
        border: `1px solid ${active ? cat.color + "88" : h ? cat.color + "30" : C + "14"}`,
        borderRadius: 100,
        background: active ? `${cat.color}14` : h ? `${cat.color}07` : "transparent",
        cursor: "pointer", fontFamily: "inherit",
        transition: "all .2s", flexShrink: 0,
        boxShadow: active ? `0 0 14px ${cat.color}22` : "none",
      }}
    >
      <span style={{
        width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
        background: cat.color,
        opacity: active ? 1 : 0.35,
        boxShadow: active ? `0 0 6px ${cat.color}` : "none",
        transition: "all .2s",
        ...(active ? { animation: "pulse 2s infinite" } as React.CSSProperties : {}),
      }} />
      <span className="t-label" style={{
        fontSize: 9, letterSpacing: ".12em",
        color: active ? cat.color : h ? `${C}66` : `${C}44`,
        transition: "color .2s",
      }}>{cat.label}</span>
      <span style={{
        fontSize: 8, fontFamily: "inherit", fontWeight: 700,
        color: active ? `${cat.color}88` : `${C}1e`,
        transition: "color .2s",
      }}>{cat.techs.length}</span>
    </button>
  );
}


export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);
  const [filter, setFilter] = useState<string | null>(null);

  const toggle = (id: string) => setFilter((f) => (f === id ? null : id));
  const activeCat = filter ? SKILL_CATEGORIES.find((c) => c.id === filter) : null;
  const shown = activeCat ? activeCat.techs.length : TOTAL;

  return (
    <section id="skills" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <SectionFlash text="> LOADING CAPABILITY_MAP... [OK]" />
      <SL n="03" label="SKILLS" />

      <div ref={ref} style={{ opacity: v ? 1 : 0, transition: "all .8s" }}>

        {/* Filter chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", alignItems: "center", marginBottom: "1.6rem" }}>
          {SKILL_CATEGORIES.map((cat) => (
            <Chip key={cat.id} cat={cat} active={filter === cat.id} onToggle={() => toggle(cat.id)} />
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <div style={{ height: 12, width: 1, background: `${C}18` }} />
            <span className="t-meta" style={{ color: `${C}28`, fontSize: 8, whiteSpace: "nowrap" }}>
              {activeCat
                ? <><span style={{ color: activeCat.color }}>{activeCat.label.toUpperCase()}</span>{` · ${shown}`}</>
                : `ALL · ${TOTAL}`
              } MODULES
            </span>
          </div>
        </div>

        {/* Mosaic */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(170px, 100%), 1fr))",
          gap: 8,
        }}>
          {ALL_TECHS.map(({ tech, cat }) => (
            <TechCard
              key={`${cat.id}-${tech.n}`}
              t={tech}
              color={cat.color}
              dim={filter !== null && filter !== cat.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

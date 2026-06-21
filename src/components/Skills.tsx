import { useRef, useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { SL } from "./ui";
import { C, GLASS } from "../theme";
import { SKILL_CATEGORIES } from "../data/skills";
import type { SkillCategory, Tech } from "../types";
import Image from "next/image";

function TechCard({ t, color }: { t: Tech; color: string }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px",
        border: `1px solid ${h ? color + "55" : color + "1a"}`, borderRadius: 6,
        background: h ? `${color}0e` : GLASS,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        transition: "all .2s", cursor: "default",
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 8, flexShrink: 0,
        border: `1px solid ${color}30`, background: `${color}08`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* <div style={{ backgroundColor: "#000000" }}> */}
        {/* </div> */}
        {t.logo ? <Image preload={true} alt='logo' width="38" height="38" src={t.logo} />
        :(<svg width="38" height="38" viewBox="0 0 38 38">
          <line x1="2" y1="2" x2="36" y2="36" stroke={`${color}30`} strokeWidth="1.2" />
          <line x1="36" y1="2" x2="2" y2="36" stroke={`${color}30`} strokeWidth="1.2" />
        </svg>)}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="t-code" style={{ color: h ? color : `${color}cc`, fontSize: 11, fontWeight: 500, transition: "color .2s", lineHeight: 1.3 }}>{t.n}</div>
        <div className="t-meta" style={{ color: `${C}44`, fontSize: 9, marginTop: 2, lineHeight: 1.4, fontWeight: 300 }}>{t.s}</div>
      </div>
    </div>
  );
}

function CatRow({
  c, isActive, isLast, onSelect,
}: { c: SkillCategory; isActive: boolean; isLast: boolean; onSelect: () => void }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: "100%", textAlign: "left", padding: "10px 14px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: isActive ? `${c.color}14` : h ? `${c.color}07` : "transparent",
        borderLeft: `3px solid ${isActive ? c.color : "transparent"}`,
        borderRight: "none", borderTop: "none",
        borderBottom: `1px solid ${isLast ? "transparent" : C + "0a"}`,
        cursor: "pointer", transition: "all .18s", fontFamily: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          width: 5, height: 5, borderRadius: "50%", background: c.color, flexShrink: 0,
          boxShadow: isActive ? `0 0 7px ${c.color}` : "none",
          opacity: isActive ? 1 : 0.4, transition: "all .18s",
        }} />
        <div>
          <div className="t-code" style={{
            color: isActive ? c.color : `${C}55`, fontSize: 10,
            fontWeight: isActive ? 600 : 400, transition: "color .18s", lineHeight: 1.3,
          }}>{c.label}</div>
          {c.coming && (
            <div style={{ fontSize: 7, color: "#fbbf2488", fontFamily: "inherit", marginTop: 1, letterSpacing: ".08em" }}>
              IN PROGRESS
            </div>
          )}
        </div>
      </div>
      <span style={{
        fontSize: 9, color: isActive ? c.color : `${C}22`,
        fontFamily: "inherit", fontWeight: isActive ? 600 : 300, transition: "color .18s",
      }}>{c.count}</span>
    </button>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);
  const [activeCat, setActiveCat] = useState("BACKEND");
  const cat = SKILL_CATEGORIES.find((c) => c.id === activeCat)!;

  return (
    <section id="skills" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SL n="03" label="SKILLS" />
      <div ref={ref} style={{ opacity: v ? 1 : 0, transition: "all .8s" }}>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "1.2rem", alignItems: "start" }}>
          {/* Category table */}
          <div style={{
            border: `1px solid ${C}18`, borderRadius: 6, overflow: "hidden",
            background: GLASS, backdropFilter: "blur(28px) saturate(1.7)", WebkitBackdropFilter: "blur(28px) saturate(1.7)",
          }}>
            <div style={{
              padding: "9px 14px", borderBottom: `1px solid ${C}18`, background: `${C}08`,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span className="t-label" style={{ color: `${C}44`, fontSize: 8, letterSpacing: ".2em" }}>CATEGORY</span>
              <span className="t-label" style={{ color: `${C}33`, fontSize: 8, letterSpacing: ".15em" }}># TECH</span>
            </div>
            {SKILL_CATEGORIES.map((c, i) => (
              <CatRow
                key={c.id} c={c}
                isActive={activeCat === c.id}
                isLast={i === SKILL_CATEGORIES.length - 1}
                onSelect={() => setActiveCat(c.id)}
              />
            ))}
          </div>

          {/* Tech grid */}
          <div style={{
            border: `1px solid ${C}12`, borderRadius: 6, padding: "1.4rem",
            background: GLASS, backdropFilter: "blur(28px) saturate(1.7)", WebkitBackdropFilter: "blur(28px) saturate(1.7)",
          }}>
            {/* <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, padding: "0 2px" }}>
              <div style={{ width: 3, height: 28, background: cat.color, borderRadius: 2, boxShadow: `0 0 8px ${cat.color}` }} />
              <div>
                <div className="t-code" style={{ color: cat.color, fontSize: 13, fontWeight: 600 }}>{cat.label}</div>
                <div className="t-label" style={{ color: `${C}33`, fontSize: 8 }}>
                  {cat.coming ? "LEARNING IN PROGRESS" : cat.count + " TECHNOLOGIES"}
                </div>
              </div>
            </div> */}

            {cat.coming ? (
              <div style={{
                borderRadius: 6, overflow: "hidden", position: "relative",
                border: "1px dashed #fbbf2444", background: "rgba(251,191,36,.04)",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(45deg,rgba(251,191,36,.07) 0px,rgba(251,191,36,.07) 12px,transparent 12px,transparent 24px)",
                  animation: "stripe 1.5s linear infinite",
                }} />
                <div style={{ position: "relative", zIndex: 1, padding: "2.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>🚧</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fbbf24", letterSpacing: ".15em", marginBottom: 6, fontFamily: "inherit" }}>
                    UNDER CONSTRUCTION
                  </div>
                  <div className="t-body" style={{ color: `${C}44`, fontSize: 12, marginBottom: 20 }}>
                    This section is actively being set up
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                    {cat.techs.map((t) => (
                      <div key={t.n} style={{ padding: "4px 12px", border: "1px solid #fbbf2433", borderRadius: 4, background: "#fbbf2408" }}>
                        <span className="t-label" style={{ color: "#fbbf2477", fontSize: 9 }}>{t.n}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(175px,1fr))", gap: 8 }}>
                {cat.techs.map((t) => <TechCard key={t.n} l={t.logo} t={t} color={cat.color} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

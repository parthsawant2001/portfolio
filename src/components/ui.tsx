import { useState, useEffect, CSSProperties, ReactNode } from "react";
import type { BtnVariant, BtnSize } from "../types";
import { C, A, G, NAVY, GLASS } from "../theme";

/* ── CLOCK ── */
export function Clock() {
  const [t, setT] = useState<Date | null>(null);
  useEffect(() => {
    setT(new Date()); const i = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  return <>{t ? t.toTimeString().slice(0, 8) : "--:--:--"}</>;
}

/* ── TYPEWRITER ── */
interface TWProps { text: string; speed?: number; style?: CSSProperties; }
export function TW({ text, speed = 48, style = {} }: TWProps) {
  const [d, setD] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setD(""); setDone(false); let i = 0;
    const t = setInterval(() => {
      setD(text.slice(0, ++i));
      if (i >= text.length) { clearInterval(t); setDone(true); }
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return (
    <span style={style}>
      {d}
      {!done && <span style={{ animation: "blink .7s step-end infinite", color: A }}>█</span>}
    </span>
  );
}

/* ── DOT ── */
interface DotProps { color?: string; size?: number; }
export function Dot({ color = G, size = 5 }: DotProps) {
  return (
    <span style={{
      display: "inline-block", width: size, height: size, borderRadius: "50%",
      background: color, boxShadow: `0 0 6px ${color}`, animation: "pulse 2s infinite", flexShrink: 0,
    }} />
  );
}

/* ── DIVIDER ── */
interface DividerProps { color?: string; }
export function Divider({ color = C }: DividerProps) {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg,${color}44,${color}11,transparent)`,
      margin: "1.25rem 0",
    }} />
  );
}

/* ── FIELD ── */
interface FieldProps { n: string; label: string; value: string; color?: string; }
export function Field({ n, label, value, color = C }: FieldProps) {
  return (
    <div>
      <div style={{ fontSize: 8, color: `${color}44`, letterSpacing: ".15em", marginBottom: 1 }}>
        {n} {label} /
      </div>
      <div className="t-code" style={{ color: `${color}cc`, fontSize: 12, fontWeight: 500 }}>
        {value}
      </div>
    </div>
  );
}

/* ── BUTTON ── */
interface BtnProps {
  children: ReactNode;
  variant?: BtnVariant;
  size?: BtnSize;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  style?: CSSProperties;
}
export function Btn({
  children, variant = "primary", size = "md",
  onClick, href, disabled = false, style = {},
}: BtnProps) {
  const [h, setH] = useState(false);
  const pad: Record<BtnSize, string> = { sm: "5px 14px", md: "10px 24px", lg: "13px 30px" };
  const fs: Record<BtnSize, string> = { sm: ".625rem", md: ".6875rem", lg: ".75rem" };
  const vs: Record<BtnVariant, { bg: string; color: string; border: string; shadow: string }> = {
    primary: {
      bg: disabled ? `${C}44` : h ? `${C}dd` : C,
      color: disabled ? "#334" : NAVY,
      border: disabled ? `${C}44` : C,
      shadow: h && !disabled ? `0 0 18px ${C}55` : `0 0 6px ${C}22`,
    },
    secondary: {
      bg: h && !disabled ? `${C}14` : "transparent",
      color: disabled ? `${C}33` : C,
      border: disabled ? `${C}22` : h ? C : `${C}55`,
      shadow: "none",
    },
    ghost: {
      bg: h && !disabled ? "rgba(255,255,255,.06)" : "transparent",
      color: disabled ? "#334" : h ? "#cbd5e1" : "#64748b",
      border: disabled ? "#1e2d40" : h ? "#475569" : "#1e2d40",
      shadow: "none",
    },
  };
  const v = vs[variant];
  const sh: CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 8,
    fontSize: fs[size], letterSpacing: ".15em", padding: pad[size],
    fontWeight: 600, cursor: disabled ? "default" : "pointer",
    textDecoration: "none", transition: "all .2s", fontFamily: "inherit",
    background: v.bg, color: v.color,
    border: `1px solid ${v.border}`, borderRadius: 4,
    boxShadow: v.shadow, opacity: disabled ? 0.5 : 1, ...style,
  };
  const handlers = {
    style: sh,
    onMouseEnter: () => !disabled && setH(true),
    onMouseLeave: () => setH(false),
  };
  if (href && !disabled) return <a href={href} {...handlers}>{children}</a>;
  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled} {...handlers}>
      {children}
    </button>
  );
}

/* ── CARD ── */
interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  accent?: string;
  hoverGlow?: boolean;
  onClick?: () => void;
}
export function Card({ children, style = {}, accent = C, hoverGlow = false, onClick }: CardProps) {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: GLASS,
        backdropFilter: "blur(28px) saturate(1.7)",
        WebkitBackdropFilter: "blur(28px) saturate(1.7)",
        borderRadius: 6,
        border: `1px solid ${h && hoverGlow ? accent + "55" : accent + "22"}`,
        boxShadow: h && hoverGlow
          ? `0 0 30px ${accent}18,inset 0 0 28px ${accent}07,0 6px 40px rgba(0,0,0,.45)`
          : `0 4px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(0,245,255,.07)`,
        transition: "border-color .25s,box-shadow .25s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── GLASS MODAL ── */
interface GlassModalProps { children: ReactNode; onClose: () => void; maxWidth?: number; }
export function GlassModal({ children, onClose, maxWidth = 560 }: GlassModalProps) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 900, background: "rgba(2,8,24,.5)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        width: "100%", maxWidth, position: "relative",
        background: "rgba(4,14,38,.65)",
        backdropFilter: "blur(5px) saturate(2) brightness(1.08)",
        WebkitBackdropFilter: "blur(5px) saturate(2) brightness(1.08)",
        border: `1px solid ${C}55`, borderRadius: 10,
        boxShadow: `0 12px 60px rgba(0,0,0,.75),0 0 0 1px rgba(0,245,255,.1),inset 0 1px 0 rgba(0,245,255,.18)`,
        animation: "fadeUp .2s ease",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          borderRadius: "10px 10px 0 0",
          background: `linear-gradient(90deg,transparent,${C}88,transparent)`,
        }} />
        {children}
      </div>
    </div>
  );
}

/* ── SECTION LABEL ── */
interface SLProps { n: string; label: string; }
export function SL({ n, label }: SLProps) {
  const [h, setH] = useState(false);
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2.8rem" }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <div style={{
        border: `1px solid ${A}66`, borderRadius: 3, padding: "10px 10px",
        background: h ? A : `${A}12`, transition: "background .25s",
        cursor: "default", lineHeight: 1, display: "flex", alignItems: "center",
      }}>
        <span className="t-label" style={{ color: h ? NAVY : A, fontSize: 10, transition: "color .25s" }}>{n}</span>
      </div>
      <span style={{ fontSize: 11, fontWeight: 600, color: A, letterSpacing: ".22em", textTransform: "uppercase" }}>
        {`> ${label}`}
      </span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${A}44,transparent)` }} />
      <span style={{
        width: 4, height: 4, borderRadius: "50%", background: A,
        boxShadow: `0 0 6px ${A}`, animation: "pulse 2s infinite", display: "inline-block",
      }} />
    </div>
  );
}

/* ── SOCIAL LINK ── */
interface SocialLinkProps { name: string; path: string; col: string; url: string; }
export function SocialLink({ name, path, col, url }: SocialLinkProps) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      style={{
        display: "flex", alignItems: "center", gap: 7, padding: "6px 12px",
        border: `1px solid ${hov ? col : col + "22"}`, borderRadius: 4,
        background: hov ? `${col}10` : "transparent",
        textDecoration: "none", transition: "all .2s", cursor: "pointer",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <svg
        width="14" height="14" viewBox="0 0 24 24"
        style={{ fill: hov ? col : `${col}77`, filter: hov ? `drop-shadow(0 0 4px ${col})` : "none", transition: "all .2s" }}
      >
        <path d={path} />
      </svg>
      <span className="t-meta" style={{ color: hov ? col : `${col}66`, fontSize: 10, transition: "color .2s" }}>
        {name}
      </span>
    </a>
  );
}

/* ── DECO DOTS ── */
interface DecoDotsProps { color?: string; opacity?: number; }
export function DecoDots({ color = C, opacity = 0.4 }: DecoDotsProps) {
  return (
    <svg width="44" height="14" viewBox="0 0 44 14" style={{ opacity }}>
      {[0, 7, 14, 21, 28, 35, 42].map((x, i) => (
        <circle
          key={i} cx={x + 1} cy={7}
          r={i % 3 === 0 ? 2.2 : i % 3 === 1 ? 1.4 : 0.9}
          fill={color}
          opacity={i % 3 === 0 ? 0.8 : i % 3 === 1 ? 0.5 : 0.3}
        />
      ))}
    </svg>
  );
}

// Stub decoratives kept for any remaining references
export function DecoCorner(_props: Record<string, unknown>) { return null; }
export function DecoBars(_props: Record<string, unknown>) { return null; }
export function DecoWave(_props: Record<string, unknown>) { return null; }
export function DecoGrid(_props: Record<string, unknown>) { return null; }

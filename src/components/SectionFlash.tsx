import { useRef, useState, useEffect } from "react";
import { G } from "../theme";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface SectionFlashProps { text: string; }

export function SectionFlash({ text }: SectionFlashProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [fired, setFired] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          setFired(true);
          setOn(true);
          setTimeout(() => setOn(false), 900);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [fired, reduced]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute", top: 0, left: 0, right: 0,
        pointerEvents: "none", zIndex: 5,
        opacity: on ? 1 : 0,
        transition: on ? "opacity .06s" : "opacity .45s .4s",
      }}
    >
      <div style={{
        padding: "5px 18px",
        background: "rgba(0,0,0,.55)",
        display: "inline-flex", alignItems: "center", gap: 8,
        borderBottom: `1px solid ${G}22`,
      }}>
        <span style={{
          width: 4, height: 4, borderRadius: "50%",
          background: G, boxShadow: `0 0 5px ${G}`,
          display: "inline-block", flexShrink: 0,
        }} />
        <span style={{
          fontSize: 9, color: G, fontFamily: "'JetBrains Mono',monospace",
          letterSpacing: ".1em", fontWeight: 400,
        }}>
          {text}
        </span>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { C, G } from "../theme";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function HudCorner() {
  const reduced = useReducedMotion();
  const [lat, setLat] = useState(19.076);
  const [lon, setLon] = useState(72.8777);
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date().toTimeString().slice(0, 8));
    const clock = setInterval(() => setTime(new Date().toTimeString().slice(0, 8)), 1000);

    if (reduced) return () => clearInterval(clock);

    const drift = setInterval(() => {
      setLat((l) => parseFloat((l + (Math.random() - 0.5) * 0.0002).toFixed(4)));
      setLon((l) => parseFloat((l + (Math.random() - 0.5) * 0.0002).toFixed(4)));
    }, 3400);

    return () => { clearInterval(clock); clearInterval(drift); };
  }, [reduced]);

  if (time === null) return null;

  return (
    <div
      className="mobile-hide"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 400,
        fontFamily: "'JetBrains Mono', monospace",
        background: "rgba(2,8,24,.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: `1px solid ${C}12`,
        borderRadius: 4,
        padding: "10px 14px",
        display: "flex", flexDirection: "column", gap: 5,
        opacity: 0.65,
        pointerEvents: "none",
        minWidth: 214,
      }}
    >
      <div style={{ height: 1, background: `linear-gradient(90deg,${C}44,transparent)`, marginBottom: 3 }} />

      <Row label="SYS STATUS" value="NOMINAL" />

      <Row label="UPLINK" value={
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          <span style={{
            width: 5, height: 5, borderRadius: "50%", background: G,
            boxShadow: `0 0 5px ${G}`, display: "inline-block",
            animation: "pulse 2s infinite",
          }} />
          STABLE
        </span>
      } valueColor={G} />

      <div style={{ height: 1, background: `${C}09`, margin: "1px 0" }} />

      <Row label="LAT" value={`${lat >= 0 ? "+" : ""}${lat.toFixed(4)}° N`} />
      <Row label="LON" value={`${lon >= 0 ? "+" : ""}${lon.toFixed(4)}° E`} />

      <div style={{ height: 1, background: `${C}09`, margin: "1px 0" }} />

      <Row label="LOCAL" value={time} />
      <Row label="TZ" value="UTC+05:30 · IST" />
    </div>
  );
}

function Row({ label, value, valueColor = `${C}55` }: {
  label: string;
  value: React.ReactNode;
  valueColor?: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
      <span style={{ color: `${C}2a`, fontSize: 8, letterSpacing: ".1em" }}>{label}</span>
      <span style={{ color: valueColor, fontSize: 8, fontWeight: 500, letterSpacing: ".06em" }}>{value}</span>
    </div>
  );
}

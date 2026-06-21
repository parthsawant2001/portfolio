import { useEffect, useRef } from "react";
import { C } from "../theme";

export function Background() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const syRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;

    const resize = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => { syRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = () => {
      const w = cv.width, h = cv.height, sy = syRef.current;
      ctx.clearRect(0, 0, w, h);
      const oy = -(sy % 40);
      ctx.strokeStyle = "rgba(0,245,255,0.08)";
      ctx.lineWidth = 0.2;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = oy; y < h; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      const g = ctx.createRadialGradient(w / 2, 0, 0, w / 2, 0, Math.max(w, h) * 0.7);
      g.addColorStop(0, "rgba(0,245,255,0.04)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <canvas ref={cvRef} style={{ position: "absolute", inset: 0, display: "block" }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg,transparent,${C}44,transparent)`,
        animation: "scanDown 10s linear infinite",
      }} />
    </div>
  );
}

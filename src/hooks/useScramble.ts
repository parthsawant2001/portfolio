import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>?/";

export function useScramble(
  text: string,
  triggered: boolean,
  intervalMs = 60,
  seed = 0
): string {
  // SSR-safe: start with the real text so server and client initial render match.
  // Math.random() on the server produces different values than the client,
  // causing hydration mismatches. We only scramble after mount (inside useEffect).
  const [display, setDisplay] = useState<string>(text);
  const [mounted, setMounted] = useState(false);
  const revealedRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mark as mounted — after this point it's safe to use Math.random()
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !triggered) return;
    revealedRef.current = 0;
    if (timerRef.current) clearTimeout(timerRef.current);

    const tick = () => {
      const pos = revealedRef.current;
      if (pos >= text.length) {
        setDisplay(text);
        return;
      }
      setDisplay(
        text.slice(0, pos) +
          text
            .slice(pos)
            .split("")
            .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
            .join("")
      );
      revealedRef.current = pos + 1;
      timerRef.current = setTimeout(tick, intervalMs);
    };

    timerRef.current = setTimeout(tick, 80);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mounted, triggered, text, intervalMs, seed]);

  return display;
}

export function useDelayedScramble(
  text: string,
  triggered: boolean,
  interval: number,
  delayMs: number
): string {
  const [go, setGo] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setGo(true), delayMs);
    return () => clearTimeout(t);
  }, [triggered, delayMs]);

  return useScramble(text, go, interval);
}

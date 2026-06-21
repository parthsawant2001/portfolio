import { useState, useEffect, RefObject } from "react";

export function useVisible(ref: RefObject<Element | null>, thr = 0.1): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: thr }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []); // intentionally empty — fires once on mount

  return visible;
}

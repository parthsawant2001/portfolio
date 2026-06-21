import { useState, useEffect } from "react";
import { Btn } from "./ui";
import { C } from "../theme";

interface NavProps { onContact: () => void; }

export function Nav({ onContact }: NavProps) {
  const [sc, setSc] = useState(0);

  useEffect(() => {
    const h = () => setSc(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const links: [string, string][] = [
    ["ABOUT", "about"],
    ["SKILLS", "skills"],
    ["PROJECTS", "projects"],
    ["EXPERIENCE", "experience"],
    ["ARCHIVE", "archive"],
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500, height: 52,
      background: sc > 60 ? "rgba(2,8,24,.97)" : "rgba(2,8,24,.4)",
      borderBottom: `1px solid ${sc > 60 ? C + "18" : C + "08"}`,
      backdropFilter: "blur(20px)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2rem", transition: "all .3s",
    }}>
      <button
        onClick={() => go("home")}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
      >
        <div style={{ fontSize: 12, fontWeight: 600, color: C, letterSpacing: ".12em", animation: "glitch 9s infinite", fontFamily: "inherit" }}>
          PARTH SAWANT
        </div>
        <div className="t-meta" style={{ color: `${C}44`, fontSize: 9 }}>SOFTWARE DEVELOPER</div>
      </button>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        {links.map(([l, id]) => (
          <button
            key={id}
            onClick={() => go(id)}
            style={{
              background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
              fontSize: 10, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase",
              color: `${C}55`, transition: "color .2s", padding: "4px 0",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${C}55`)}
          >
            {l}
          </button>
        ))}
        <Btn variant="secondary" size="sm" onClick={onContact}>CONTACT</Btn>
      </div>
    </nav>
  );
}

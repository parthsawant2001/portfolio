import { useState, useEffect } from "react";
import { Btn } from "./ui";
import { C } from "../theme";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface NavProps { onContact: () => void; }

export function Nav({ onContact }: NavProps) {
  const [sc, setSc] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useBreakpoint();

  useEffect(() => {
    const h = () => setSc(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const links: [string, string][] = [
    ["ABOUT", "about"],
    ["SKILLS", "skills"],
    ["PROJECTS", "projects"],
    ["EXPERIENCE", "experience"],
    ["ARCHIVE", "archive"],
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500, height: 52,
        background: sc > 60 || menuOpen ? "rgba(2,8,24,.97)" : "rgba(2,8,24,.4)",
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
          <div className="t-meta" style={{ color: `${C}44`, fontSize: 9 }}>BACKEND ENGINEER</div>
        </button>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="4" y1="4" x2="16" y2="16" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="2" y1="5" x2="18" y2="5" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="2" y1="10" x2="18" y2="10" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="2" y1="15" x2="18" y2="15" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        ) : (
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
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: 52, left: 0, right: 0, zIndex: 499,
          background: "rgba(2,8,24,.97)",
          borderBottom: `1px solid ${C}18`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "0.25rem 2rem 1rem",
          display: "flex", flexDirection: "column",
        }}>
          {links.map(([l, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
                fontSize: 11, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase",
                color: `${C}77`, padding: "12px 0", textAlign: "left",
                borderBottom: `1px solid ${C}08`,
              }}
            >
              {l}
            </button>
          ))}
          <div style={{ paddingTop: "0.75rem" }}>
            <Btn variant="secondary" size="sm" onClick={() => { onContact(); setMenuOpen(false); }}>
              CONTACT
            </Btn>
          </div>
        </div>
      )}
    </>
  );
}

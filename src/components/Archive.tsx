import { useRef } from "react";
import { useVisible } from "../hooks/useVisible";
import { Btn, Card, SL } from "./ui";
import { C, A } from "../theme";

export function Archive() {
  const ref = useRef<HTMLDivElement>(null);
  const v = useVisible(ref);

  return (
    <section id="archive" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SL n="06" label="ARCHIVE · CERTIFICATES & DOCS" />
      <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(20px)", transition: "all .8s" }}>
        <Card accent={C} style={{ padding: "1.8rem 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 6 }}>ARC-001</div>
              <div className="t-h2" style={{ color: C, marginBottom: 4, textShadow: `0 0 8px ${C}33` }}>Notion & Google Drive</div>
              <div className="t-label" style={{ color: A, fontSize: 9, marginBottom: 14 }}>
                Certificates · Hackathon · System Design · Study Notes
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {([["📄 NOTION", "#"], ["📁 DRIVE", "#"]] as const).map(([label, href]) => (
                  <Btn key={label} variant="secondary" size="sm" href={href}>{label}</Btn>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

import { C } from "../theme";

export function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${C}08`, padding: "1.5rem 2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
    }}>
      <span className="t-meta" style={{ color: `${C}25`, fontSize: 9 }}>
        PARTH SAWANT · BACKEND ENGINEER · MUMBAI · {new Date().getFullYear()}
      </span>
      <span className="t-meta" style={{ color: `${C}20`, fontSize: 9 }}>
        PARTHPSAWANT20@GMAIL.COM
      </span>
    </footer>
  );
}

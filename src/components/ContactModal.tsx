import { useState } from "react";
import { Btn, Divider, GlassModal } from "./ui";
import { C, A, G } from "../theme";
import type { FormState } from "../types";

interface ContactModalProps { onClose: () => void; }

export function ContactModal({ onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", msg: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const submit = () => {
    if (!form.name || !form.email || !form.msg) return;
    setState("sending");
    setTimeout(() => setState("done"), 1600);
  };

  const fields: [string, keyof FormState, string][] = [
    ["Your name",    "name",  "text"],
    ["Your email",   "email", "email"],
    ["Your message", "msg",   "textarea"],
  ];

  return (
    <GlassModal onClose={onClose} maxWidth={460}>
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 6 }}>MSG-001</div>
            <div className="t-h2" style={{ color: C, marginBottom: 4, textShadow: `0 0 8px ${C}33` }}>SEND A MESSAGE</div>
            <div className="t-label" style={{ color: A, fontSize: 9 }}>Direct Channel · Encrypted</div>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: `${C}44`, cursor: "pointer", fontFamily: "inherit", fontSize: 18, lineHeight: 1, transition: "color .2s", marginTop: 4 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = A)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${C}44`)}
          >✕</button>
        </div>
        <Divider />

        {state !== "done" ? (
          <>
            {fields.map(([ph, k, t]) => (
              <div key={k} style={{ marginBottom: 12 }}>
                {t === "textarea" ? (
                  <textarea
                    value={form[k]}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    placeholder={ph}
                    rows={4}
                    style={{
                      width: "100%", background: "rgba(0,15,35,.5)", border: `1px solid ${C}22`,
                      borderRadius: 4, color: C, fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 12, fontWeight: 300, padding: 10, resize: "none", outline: "none", boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = C)}
                    onBlur={(e) => (e.target.style.borderColor = `${C}22`)}
                  />
                ) : (
                  <input
                    type={t}
                    value={form[k]}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    placeholder={ph}
                    style={{
                      width: "100%", background: "rgba(0,15,35,.5)", border: `1px solid ${C}22`,
                      borderRadius: 4, color: C, fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 12, fontWeight: 300, padding: 10, outline: "none", boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = C)}
                    onBlur={(e) => (e.target.style.borderColor = `${C}22`)}
                  />
                )}
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <Btn variant="primary" size="md" onClick={submit} style={{ flex: 1, justifyContent: "center" }}>
                {state === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </Btn>
              <Btn variant="ghost" size="md" onClick={onClose}>CANCEL</Btn>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
            <div style={{
              width: 52, height: 52, border: `2px solid ${G}`, borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 18px", boxShadow: `0 0 20px ${G}44`,
            }}>
              <span style={{ color: G, fontSize: 24 }}>✓</span>
            </div>
            <div className="t-label" style={{ color: `${C}33`, fontSize: 9, marginBottom: 6 }}>MSG-001</div>
            <div className="t-h2" style={{ color: G, marginBottom: 4, textShadow: `0 0 8px ${G}33` }}>MESSAGE SENT</div>
            <div className="t-label" style={{ color: A, fontSize: 9, marginBottom: 16 }}>Transmission Complete</div>
            <p className="t-body" style={{ color: `${C}55`, fontSize: 11, fontWeight: 300 }}>
              I'll get back to you within 24–48 hours.
            </p>
          </div>
        )}
      </div>
    </GlassModal>
  );
}

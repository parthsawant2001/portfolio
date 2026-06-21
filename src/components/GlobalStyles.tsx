import { useEffect } from "react";
import { C, NAVY } from "../theme";

export function GlobalStyles() {
  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      html{scroll-behavior:smooth}
      body{background:${NAVY};overflow-x:hidden;font-family:'JetBrains Mono',monospace;cursor:default}
      ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:${C}44}
      input,textarea,button{font-family:'JetBrains Mono',monospace}
      @keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}
      @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      @keyframes scanDown{0%{top:-2px}100%{top:100%}}
      @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
      @keyframes glitch{0%,88%,100%{transform:none;opacity:1}90%{transform:translate(-2px,0) skewX(-3deg);opacity:.9}94%{transform:translate(2px,0)}}
      @keyframes stripe{0%{background-position:0 0}100%{background-position:40px 0}}
      .t-hero{font-size:clamp(2.8rem,8vw,5.2rem);font-weight:700;letter-spacing:.04em;line-height:1}
      .t-h2{font-size:1.1rem;font-weight:600;letter-spacing:.1em}
      .t-h3{font-size:.9rem;font-weight:600;letter-spacing:.12em}
      .t-body{font-size:.8125rem;font-weight:300;line-height:2;letter-spacing:.02em}
      .t-label{font-size:.625rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase}
      .t-code{font-size:.6875rem;font-weight:400;letter-spacing:.06em}
      .t-meta{font-size:.625rem;font-weight:300;letter-spacing:.1em}
      @media(max-width:640px){.mobile-hide{display:none!important}}
      .no-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.no-scrollbar::-webkit-scrollbar{display:none}
      @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
    `;
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);
  return null;
}

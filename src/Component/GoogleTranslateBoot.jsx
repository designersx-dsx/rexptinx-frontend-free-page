// Component/GoogleTranslateBoot.jsx
import { useEffect } from "react";

/** wait until google select exists */
function waitForSelect(maxMs = 8000) {
  return new Promise((res, rej) => {
    const start = Date.now();
    const poll = () => {
      const el =
        document.querySelector("#google_translate_element select") ||
        document.querySelector(".goog-te-combo");
      if (el) return res(el);
      if (Date.now() - start > maxMs) return rej(new Error("gt select timeout"));
      setTimeout(poll, 120);
    };
    poll();
  });
}

export async function applyLanguage(code) {
  try {
    const select = await waitForSelect();
    if (select.value !== code) select.value = code;
    select.dispatchEvent(new Event("change"));
    return true;
  } catch {
    return false;
  }
}

export default function GoogleTranslateBoot({
  pageLanguage = "en",
  languages = ["en", "fr"],
}) {
  useEffect(() => {
    // HARD hide everything Google injects that can move layout
    const style = document.createElement("style");
    style.id = "gt-hard-hide";
    style.textContent = `
      .goog-te-banner-frame, .goog-te-balloon-frame { display:none !important; }
      #goog-gt-tt { display:none !important; }
      body { top:0 !important; }

      /* hide gadget UI completely */
      .goog-te-gadget, .goog-te-gadget-simple, .goog-te-combo,
      .goog-logo-link { display:none !important; }

      /* remove yellow highlight on words */
      .goog-text-highlight { background: transparent !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);

    // keep body.top=0 even if Google tries to modify it again
    const bodyObs = new MutationObserver(() => {
      const top = getComputedStyle(document.body).getPropertyValue("top");
      if (top && top !== "0px") document.body.style.top = "0px";
    });
    bodyObs.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    // init callback
    window.googleTranslateElementInit = function () {
      const included = languages.join(",");
      new window.google.translate.TranslateElement(
        {
          pageLanguage,
          includedLanguages: included,
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // apply saved language once select is ready
      const saved = localStorage.getItem("site_lang");
      if (saved && saved !== pageLanguage) applyLanguage(saved);
    };

    // load script ONCE (use https explicit)
    const id = "google-translate-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit?.();
    }

    // public reapply hook
    const reapply = () => {
      const saved = localStorage.getItem("site_lang");
      if (saved) applyLanguage(saved);
    };
    window.addEventListener("gtranslate:reapply", reapply);

    return () => {
      window.removeEventListener("gtranslate:reapply", reapply);
      bodyObs.disconnect();
      style.remove();
    };
  }, [pageLanguage, languages]);

  // must exist but invisible/off-screen (no layout impact)
  return (
    <div
      id="google_translate_element"
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", left: "-99999px" }}
    />
  );
}

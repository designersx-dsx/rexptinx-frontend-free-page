import { useEffect } from "react";

const GoogleTranslateBoot = () => {
  useEffect(() => {
    const hideBannerOnly = () => {
      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) banner.style.display = "none";
      document.documentElement.style.top = "0";
      document.body.style.top = "0";
      document.body.style.position = "static";
      document.body.style.marginTop = "0";
    };

    // --- init ---
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,fr", autoDisplay: false },
        "google_translate_element"
      );
      setTimeout(hideBannerOnly, 0);
      setTimeout(hideBannerOnly, 300);
    };

    // load script once (use https to avoid mixed-content)
    if (!document.getElementById("gt-script")) {
      const s = document.createElement("script");
      s.id = "gt-script";
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }

    // --- robust language changer (lock + two-step + cookie) ---
    window.changeGoogleTranslateLanguage = (target) => {
      // lock so changes don't overlap
      if (window.__gtBusy) {
        setTimeout(() => window.changeGoogleTranslateLanguage(target), 250);
        return;
      }
      window.__gtBusy = true;

      const wait = (ms) => new Promise((r) => setTimeout(r, ms));

      const getSel = async (retries = 40) => {
        while (retries-- > 0) {
          const sel = document.querySelector(".goog-te-combo");
          if (sel) return sel;
          await wait(150);
        }
        return null;
      };

      const setCookie = (val) => {
        try {
          const loc = typeof window !== "undefined" ? window.location : null;
          const cookieVal = `/en/${val}`;

          // always set a path-scoped cookie
          document.cookie = `googtrans=${cookieVal}; path=/;`;

          // if hostname is available, also set a domain-scoped cookie
          if (loc && loc.hostname) {
            const host = loc.hostname.replace(/^www\./, "");
            document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host}`;
          }
        } catch {
          // ignore cookie errors (e.g., in strict environments)
        }
      };

      const fireChange = (sel, val) => {
        sel.value = val;
        sel.dispatchEvent(new Event("change", { bubbles: true }));
        setCookie(val);
      };

      (async () => {
        const sel = await getSel();
        if (!sel) {
          window.__gtBusy = false;
          return;
        }

        const desired = target;
        const temp = desired === "fr" ? "en" : "fr";

        fireChange(sel, temp);
        hideBannerOnly();
        await wait(450);
        fireChange(sel, desired);
        hideBannerOnly();
        await wait(900);

        window.__gtLang = desired;
        window.dispatchEvent(
          new CustomEvent("gt:changed", { detail: desired })
        );

        setTimeout(() => {
          const sel2 = document.querySelector(".goog-te-combo");
          if (sel2) {
            sel2.value = desired;
            sel2.dispatchEvent(new Event("change", { bubbles: true }));
          }
          hideBannerOnly();
        }, 150);

        window.__gtBusy = false;
      })();
    };

    window.addEventListener("load", hideBannerOnly);
    return () => window.removeEventListener("load", hideBannerOnly);
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
};

export default GoogleTranslateBoot;

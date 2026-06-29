"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export function LanguageToggle() {
  useEffect(() => {
    // Only load script if not already loaded
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <div className="fixed top-20 right-4 z-[100] bg-cream/90 backdrop-blur rounded-lg shadow-lg border border-gold/20 overflow-hidden">
      <div id="google_translate_element" className="[&>div]:m-0 [&_select]:px-2 [&_select]:py-1 [&_select]:text-sm [&_select]:bg-transparent [&_select]:border-none [&_select]:outline-none [&_select]:text-maroon-dark font-poppins" />
      <style>{`
        .goog-te-gadget-icon { display: none; }
        .goog-te-gadget-simple { background-color: transparent !important; border: none !important; padding: 4px 8px !important; font-size: 14px !important; }
        .goog-te-gadget-simple span { color: #5c1a1b !important; font-family: inherit !important; }
        body { top: 0 !important; }
        .skiptranslate iframe { display: none !important; }
      `}</style>
    </div>
  );
}

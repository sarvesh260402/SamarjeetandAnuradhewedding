"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.couple": "Couple",
    "nav.events": "Events",
    "nav.family": "Family",
    "nav.venue": "Venue",
    "nav.wishes": "Wishes",
    "hero.subtitle": "We're Getting Married",
    "hero.date": "December 5, 2026",
    "countdown.title": "Our Journey Begins In",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "couple.title": "The Happy Couple",
    "couple.subtitle": "Two souls, one heart, together forever",
    "couple.groom": "The Groom",
    "couple.bride": "The Bride",
    "events.title": "Wedding Events",
    "events.subtitle": "Celebrate with us through every sacred ceremony",
    "events.pre": "Pre-Wedding",
    "events.wedding": "Wedding Day",
    "events.post": "Post-Wedding",
    "family.title": "Our Family",
    "family.subtitle": "With Blessings From",
    "venue.title": "Wedding Venue",
    "venue.subtitle": "Join Us At",
    "venue.directions": "Get Directions",
    "wishes.title": "Guest Book",
    "wishes.subtitle": "Leave a wish for the happy couple",
    "wishes.submit": "Send Wish",
    "wishes.name": "Your Name",
    "wishes.message": "Your Wish",
    "invite.title": "Wedding Invitation",
    "invite.together": "Together with their families",
    "invite.request": "Request the pleasure of your company",
    "invite.tap": "Tap to open invitation",
    "welcome.title": "Namaste!",
    "welcome.subtitle": "Welcome to the wedding celebration of",
    "welcome.blessings": "May blessings shower upon you",
  },
  hi: {
    "nav.home": "होम",
    "nav.couple": "जोड़ा",
    "nav.events": "कार्यक्रम",
    "nav.family": "परिवार",
    "nav.venue": "स्थान",
    "nav.wishes": "शुभकामनाएं",
    "hero.subtitle": "हम शादी कर रहे हैं",
    "hero.date": "5 दिसंबर, 2026",
    "countdown.title": "हमारी यात्रा शुरू होगी",
    "countdown.days": "दिन",
    "countdown.hours": "घंटे",
    "countdown.minutes": "मिनट",
    "countdown.seconds": "सेकंड",
    "couple.title": "खुशहाल जोड़ा",
    "couple.subtitle": "दो आत्माएं, एक दिल, हमेशा के लिए साथ",
    "couple.groom": "दूल्हा",
    "couple.bride": "दुल्हन",
    "events.title": "शादी के कार्यक्रम",
    "events.subtitle": "हर पवित्र समारोह में हमारे साथ जश्न मनाएं",
    "events.pre": "शादी से पहले",
    "events.wedding": "शादी का दिन",
    "events.post": "शादी के बाद",
    "family.title": "हमारा परिवार",
    "family.subtitle": "इनके आशीर्वाद के साथ",
    "venue.title": "विवाह स्थल",
    "venue.subtitle": "हमारे साथ जुड़ें",
    "venue.directions": "रास्ता देखें",
    "wishes.title": "अतिथि पुस्तिका",
    "wishes.subtitle": "नवविवाहित जोड़े के लिए शुभकामना छोड़ें",
    "wishes.submit": "शुभकामना भेजें",
    "wishes.name": "आपका नाम",
    "wishes.message": "आपकी शुभकामना",
    "invite.title": "विवाह निमंत्रण",
    "invite.together": "अपने परिवारों के साथ",
    "invite.request": "आपकी उपस्थिति की प्रार्थना करते हैं",
    "invite.tap": "निमंत्रण खोलने के लिए टैप करें",
    "welcome.title": "नमस्ते!",
    "welcome.subtitle": "विवाह समारोह में आपका स्वागत है",
    "welcome.blessings": "आप पर आशीर्वाद की वर्षा हो",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { useScrollAnimations, useGSAPReveal } from "@/hooks/useLenis";
import { LoadingScreen } from "@/components/invitation/LoadingScreen";
import { InvitationCard } from "@/components/invitation/InvitationCard";
import { OpenInvitationAnimation, WelcomePopup } from "@/components/invitation/OpenInvitationAnimation";
import { PetalRain } from "@/components/overlays/PetalRain";
import { FloatingHearts } from "@/components/overlays/FloatingHearts";
import { Sparkles } from "@/components/overlays/Sparkles";
import { CursorFlowerTrail } from "@/components/overlays/CursorFlowerTrail";
import { ScrollProgressBar } from "@/components/overlays/ScrollProgressBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Countdown } from "@/components/sections/Countdown";
import { BrideGroom } from "@/components/sections/BrideGroom";
import { EventsTimeline } from "@/components/sections/EventsTimeline";
import { Family } from "@/components/sections/Family";
import { Venue } from "@/components/sections/Venue";
import { Wishes } from "@/components/sections/Wishes";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

type Phase = "loading" | "invitation" | "opening" | "site";

export function WeddingSite() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [showWelcome, setShowWelcome] = useState(false);

  useScrollAnimations(phase === "site");
  useGSAPReveal(".gsap-reveal", phase === "site");

  const handleOpenComplete = useCallback(() => {
    setPhase("site");
    setShowWelcome(true);
  }, []);

  return (
    <>
      <ScrollProgressBar />

      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <LoadingScreen key="loading" onComplete={() => setPhase("invitation")} />
        )}
        {phase === "invitation" && (
          <InvitationCard key="invitation" onOpen={() => setPhase("opening")} />
        )}
        {phase === "opening" && (
          <OpenInvitationAnimation key="opening" onComplete={handleOpenComplete} />
        )}
      </AnimatePresence>

      {phase === "site" && (
        <>
          <PetalRain />
          <FloatingHearts />
          <Sparkles />
          <CursorFlowerTrail />

          <Navbar />

          <main>
            <Hero />
            <Countdown />
            <BrideGroom />
            <EventsTimeline />
            <Family />
            <Venue />
            <Wishes />
          </main>

          <Footer />
          <AudioPlayer playOnMount={true} />
          <LanguageToggle />

          <AnimatePresence>
            {showWelcome && (
              <WelcomePopup key="welcome" onClose={() => setShowWelcome(false)} />
            )}
          </AnimatePresence>
        </>
      )}

      <style jsx global>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
    </>
  );
}

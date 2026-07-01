"use client";

import { useEffect, useRef } from "react";

export function AudioPlayer({ playOnMount = false }: { playOnMount?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("/audio2.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.currentTime = 0;
    audioRef.current = audio;

    const tryPlay = () => {
      audio.play().catch((e) => console.log("Autoplay blocked:", e));
    };

    if (playOnMount) {
      tryPlay();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        if (playOnMount) {
          tryPlay();
        }
      }
    };

    const handleFirstInteraction = () => {
      if (audio.paused) {
        tryPlay();
      }
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.src = "";
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [playOnMount]);

  // Return nothing as the UI play/pause button has been removed
  return null;
}

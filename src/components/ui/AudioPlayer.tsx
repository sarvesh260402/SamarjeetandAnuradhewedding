"use client";

import { useEffect, useRef } from "react";

export function AudioPlayer({ playOnMount = false }: { playOnMount?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("/wedding_audio.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const playAudio = async () => {
      try {
        audio.currentTime = 0; // Start from start
        await audio.play();
      } catch (err) {
        console.warn("Autoplay prevented by browser", err);
      }
    };

    if (playOnMount) {
      playAudio();
    }

    // Handle visibility change (pause when user leaves tab)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        // Resume playing when they come back
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.pause();
      audio.src = "";
    };
  }, [playOnMount]);

  // Return null because user requested to remove the pause/start button
  return null;
}

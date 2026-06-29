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

    if (playOnMount) {
      audio.currentTime = 0;
      audio.play().catch((e) => console.log("Autoplay blocked:", e));
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        if (playOnMount) {
          audio.play().catch((e) => console.log("Autoplay blocked on resume:", e));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.src = "";
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [playOnMount]);

  // Return nothing as the UI play/pause button has been removed
  return null;
}

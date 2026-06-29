"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AudioPlayer({ playOnMount = false }: { playOnMount?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("https://upload.wikimedia.org/wikipedia/commons/4/4b/Canon_in_D_Major_-_Johann_Pachelbel.ogg");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    if (playOnMount) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay blocked by browser
        setIsPlaying(false);
      });
    }

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [playOnMount]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-gradient-to-br from-gold to-gold-dark text-cream rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 pl-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
      
      {/* Decorative pulse when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-50" />
      )}
    </motion.button>
  );
}

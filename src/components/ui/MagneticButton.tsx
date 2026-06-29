"use client";

import { useMagneticButton } from "@/hooks/useMagneticButton";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = "", onClick, ...props }: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticButton(0.35);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position:absolute;border-radius:50%;pointer-events:none;
      width:${size}px;height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
      background:rgba(255,255,255,0.4);
      transform:scale(0);animation:ripple 0.6s ease-out forwards;
    `;
    btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    onClick?.(e);
  };

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={`transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

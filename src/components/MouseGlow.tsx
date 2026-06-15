"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed -z-10 hidden h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px] md:block"
      style={{ background: "radial-gradient(circle, #E53935 0%, transparent 70%)" }}
    />
  );
}

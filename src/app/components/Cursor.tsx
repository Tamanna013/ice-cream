"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trails = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const trail = document.createElement("div");
      trail.className = "fixed w-3 h-3 rounded-full opacity-80 pointer-events-none";
      trail.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`;
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      trails.current.push(trail);

      gsap.to(trail, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          trail.remove();
          trails.current = trails.current.filter(t => t !== trail);
        },
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}

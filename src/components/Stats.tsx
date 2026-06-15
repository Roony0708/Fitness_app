"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Happy Members" },
  { value: 50, suffix: "+", label: "Modern Equipment" },
  { value: 1, suffix: " Zone", label: "Dedicated Cardio" },
  { value: 5, suffix: "★", label: "Professional Environment" },
];

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!counterRef.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 85%",
      },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.floor(obj.val)}`;
        }
      },
    });
  }, [value]);

  return (
    <div className="group text-center">
      <div className="mb-2 text-4xl font-heading text-white md:text-5xl">
        <span ref={counterRef}>0</span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <p className="text-sm tracking-wider text-gray-text uppercase">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = sectionRef.current?.querySelectorAll(".stat-item");
    if (items) {
      gsap.from(items, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass rounded-2xl border border-white/5 px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

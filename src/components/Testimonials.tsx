"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Member since 2024",
    text: "REDSTONE FITNESS completely transformed my approach to fitness. The equipment is top-notch and the environment is incredibly motivating. Best decision I ever made!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Member since 2023",
    text: "The cardio zone is amazing! I've been coming here for 8 months and the results speak for themselves. The trainers are always supportive and knowledgeable.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Member since 2024",
    text: "Affordable membership with premium facilities. The locker facility and hygienic environment make it perfect for daily workouts. Highly recommended!",
    rating: 5,
  },
  {
    name: "Neha Singh",
    role: "Member since 2023",
    text: "After trying multiple gyms in Lucknow, I finally found REDSTONE FITNESS. The functional training area is excellent and the staff is incredibly friendly.",
    rating: 5,
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card min-w-[320px] flex-shrink-0 rounded-xl p-8 md:min-w-[380px]"
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-6 text-gray-text leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary uppercase">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-gray-text">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const header = sectionRef.current?.querySelector(".testimonial-header");
    if (header) {
      gsap.from(header, {
        y: 40,
        opacity: 0,
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
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="testimonial-header mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs tracking-widest uppercase text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-heading text-white md:text-5xl">
            What Our{" "}
            <span className="text-gradient">Members Say</span>
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none">
          {testimonials.map((t, i) => (
            <div key={t.name} className="snap-start">
              <TestimonialCard t={t} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-6 rounded-full bg-white/20 transition-colors hover:bg-primary/50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

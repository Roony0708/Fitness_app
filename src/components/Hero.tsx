"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

      <div className="absolute top-1/4 left-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px] animate-blob" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs tracking-[0.2em] uppercase text-gray-text backdrop-blur-sm"
        >
          Premium Fitness Studio
        </motion.div>

        <h1
          ref={textRef}
          className="text-5xl font-heading leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Transform Your Body.
          <br />
          <span className="text-gradient">Transform Your Life.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text md:text-xl"
        >
          Join REDSTONE FITNESS and achieve your fitness goals with premium
          equipment, cardio training, and expert guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#membership"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative rounded-full bg-primary px-10 py-4 text-base font-bold text-white transition-all hover:bg-accent"
          >
            <span className="relative z-10">Join Today</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 blur-xl transition-opacity group-hover:opacity-60" />
          </motion.a>
          <a
            href="#pricing"
            className="rounded-full border border-white/20 px-10 py-4 text-base font-semibold text-white transition-all hover:border-primary hover:bg-white/5"
          >
            View Membership Plans
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-gray-text">Scroll</span>
          <svg className="h-5 w-5 text-gray-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

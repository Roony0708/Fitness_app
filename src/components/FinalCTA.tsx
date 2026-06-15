"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bg = sectionRef.current?.querySelector(".cta-bg");
    if (bg) {
      gsap.to(bg, {
        scale: 1.1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-40"
    >
      <div
        className="cta-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark" />

      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Limited Time Offer
          </p>
          <h2 className="text-4xl font-heading leading-tight text-white md:text-6xl lg:text-7xl">
            Start Your Fitness
            <br />
            <span className="text-gradient">Journey Today</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-gray-text">
            Limited Offer: Gym Membership only{" "}
            <span className="font-bold text-white">₹600/month</span>
          </p>
          <motion.a
            href="tel:+917880513247"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-12 py-5 text-lg font-bold text-white transition-all hover:bg-accent"
          >
            <span className="relative z-10">Join REDSTONE FITNESS</span>
            <svg className="relative z-10 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 blur-2xl transition-opacity group-hover:opacity-60" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

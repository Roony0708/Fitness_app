"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Transformation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      textRef.current,
      { y: 80, opacity: 0, rotateX: 15 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        quoteRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        authorRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-40"
    >
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div ref={textRef}>
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Mind Over Matter
          </p>
          <h2 className="text-4xl font-heading leading-tight text-white md:text-6xl">
            It&apos;s Not About Being The Best.
            <br />
            <span className="text-gradient">It&apos;s About Being Better Than You Were Yesterday.</span>
          </h2>
        </div>

        <div className="mt-12 border-t border-white/10 pt-12">
          <svg className="mx-auto mb-6 h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p
            ref={quoteRef}
            className="text-xl italic leading-relaxed text-gray-text md:text-2xl"
          >
            &ldquo;Your body can stand almost anything. It&apos;s your mind that you
            have to convince.&rdquo;
          </p>
          <div ref={authorRef} className="mt-6">
            <div className="mx-auto h-px w-12 bg-primary" />
            <p className="mt-4 text-sm font-semibold tracking-wider text-white">
              — REDSTONE FITNESS MOTTO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

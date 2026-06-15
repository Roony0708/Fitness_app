"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".loc-card");
    if (cards) {
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs tracking-widest uppercase text-primary">
            Visit Us
          </span>
          <h2 className="mt-4 text-4xl font-heading text-white md:text-5xl">
            Find{" "}
            <span className="text-gradient">REDSTONE FITNESS</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="loc-card glass rounded-2xl border border-white/5 p-8 md:p-10">
            <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">REDSTONE FITNESS</h3>
            <div className="mt-4 space-y-3 text-gray-text">
              <p className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Near City Convent School, Rahimabad,
                  <br />
                  Sarojini Nagar, Lucknow - 226008
                </span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong className="text-white">Fardeen:</strong> +91 7880513247
                </span>
              </p>
            </div>
            <motion.a
              href="tel:+917880513247"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-accent hover:shadow-red"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +91 7880513247
            </motion.a>
          </div>

          <div className="loc-card glass overflow-hidden rounded-2xl border border-white/5">
            <div className="flex h-full min-h-[300px] items-center justify-center bg-secondary">
              <div className="text-center p-8">
                <svg className="mx-auto mb-4 h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="mb-4 text-lg font-bold text-white">Interactive Map</p>
                <p className="text-sm text-gray-text">
                  Located near City Convent School,
                  <br />
                  Rahimabad, Sarojini Nagar
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Near+City+Convent+School+Rahimabad+Sarojini+Nagar+Lucknow+226008"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

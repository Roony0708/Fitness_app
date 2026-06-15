"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "Gym Membership",
    originalPrice: "₹800",
    price: "₹600",
    badge: "Limited Time Offer",
    period: "/month",
    features: [
      "Strength Training Area",
      "Weight Training",
      "Functional Training",
      "Locker Facility",
    ],
    cta: "Get Offer",
    popular: false,
  },
  {
    title: "Gym + Cardio",
    price: "₹1,200",
    period: "/month",
    features: [
      "Everything in Gym Plan",
      "Cardio Zone Access",
      "Treadmills",
      "Cross Trainers",
      "Exercise Bikes",
    ],
    cta: "Join Premium",
    popular: true,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".pricing-card");
    if (cards) {
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
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
      id="membership"
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
            Membership Plans
          </span>
          <h2 className="mt-4 text-4xl font-heading text-white md:text-5xl">
            Choose Your{" "}
            <span className="text-gradient">Perfect Plan</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`pricing-card relative rounded-2xl border p-8 md:p-10 ${
                plan.popular
                  ? "border-primary/30 bg-gradient-to-b from-primary/10 to-secondary"
                  : "border-white/5 bg-secondary/80"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-primary px-6 py-1.5 text-xs font-bold tracking-wider uppercase text-white shadow-red">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.badge && (
                <div className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold text-accent">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">{plan.title}</h3>

              <div className="mt-6 flex items-baseline gap-2">
                {plan.originalPrice && (
                  <span className="text-lg text-gray-text line-through">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-5xl font-heading text-white">
                  {plan.price}
                </span>
                <span className="text-gray-text">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-text">
                    <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-10 block w-full rounded-full py-4 text-center text-base font-bold transition-all ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-accent hover:shadow-red"
                    : "border border-white/20 text-white hover:border-primary hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

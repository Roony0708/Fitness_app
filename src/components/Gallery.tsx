"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&h=800&fit=crop",
    alt: "Gym equipment",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&h=400&fit=crop",
    alt: "Weight training",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&h=400&fit=crop",
    alt: "Cardio zone",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&h=600&fit=crop",
    alt: "Dumbbells",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&h=800&fit=crop",
    alt: "Training session",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=600&h=400&fit=crop",
    alt: "Gym interior",
    span: "",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useGSAP(() => {
    const items = sectionRef.current?.querySelectorAll(".gallery-item");
    if (items) {
      gsap.from(items, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
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
      id="gallery"
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
            Gallery
          </span>
          <h2 className="mt-4 text-4xl font-heading text-white md:text-5xl">
            Inside{" "}
            <span className="text-gradient">REDSTONE</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {galleryImages.map((img) => (
            <motion.div
              key={img.src}
              className={`gallery-item group relative cursor-pointer overflow-hidden rounded-xl ${img.span}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setSelected(img.src)}
            >
              <div
                className="h-full min-h-[250px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/95 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="h-[80vh] w-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${selected})` }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-dark/60 text-white backdrop-blur-sm transition-colors hover:bg-primary"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

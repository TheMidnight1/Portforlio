"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from(".about-heading", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
        },
      });

      // Animate paragraphs
      gsap.utils.toArray(".about-paragraph").forEach((p, i) => {
        gsap.from(p, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.2, // stagger effect
          scrollTrigger: {
            trigger: p,
            start: "top 90%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <main ref={containerRef} className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">About</p>
      <h1 className="about-heading mt-3 text-4xl font-bold">About Me</h1>

      <div className="mt-8 space-y-6 text-slate-300 leading-8">
        <p className="about-paragraph">
          I am Saugat Balami, an MSc Information Technology & Data Analysis
          student with a strong interest in data analytics, machine learning,
          decision support systems, and web development.
        </p>

        <p className="about-paragraph">
          My work focuses on transforming raw and messy data into useful
          insights, predictive systems, and practical digital products. I enjoy
          combining technical analysis with business understanding to solve
          real-world problems.
        </p>

        <p className="about-paragraph">
          Alongside data work, I also build modern web applications using
          Next.js and related tools, allowing me to present insights through
          interactive and user-friendly systems rather than dead reports nobody
          reads.
        </p>
      </div>
    </main>
  );
}
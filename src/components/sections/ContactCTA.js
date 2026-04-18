"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Scope animations to this component
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const heading = container.querySelector("h2");
      const paragraph = container.querySelector("p");
      const button = container.querySelector("a");

      // Heading animation
      gsap.from(heading, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      });

      // Paragraph animation
      gsap.from(paragraph, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      });

      // Button animation
      gsap.from(button, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      });
    }, containerRef);

    // Refresh ScrollTrigger positions (fixes layout issues on client navigation)
    ScrollTrigger.refresh();

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s work together</h2>
      <p className="text-slate-400 mb-6">
        Open to opportunities in data analytics, data science, and web development.
      </p>

      <a
        href="mailto:saugat.balami@gmail.com"
        className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-500 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
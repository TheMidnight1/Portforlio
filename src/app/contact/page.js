"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from(".contact-heading", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 85%",
        },
      });

      // Animate the paragraph
      gsap.from(".contact-paragraph", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".contact-paragraph",
          start: "top 85%",
        },
      });

      // Animate the contact card
      gsap.from(".contact-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Contact</p>
      <h1 className="contact-heading mt-3 text-4xl font-bold">Get in Touch</h1>

      <p className="contact-paragraph mt-6 max-w-2xl text-slate-300 leading-8">
        I am open to opportunities in data analytics, data science, and web
        development. For collaboration, freelance work, or professional roles,
        feel free to contact me.
      </p>

      <div className="contact-card mt-10 space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <p>
          <span className="font-semibold text-white">Email:</span>{" "}
          saugat.balami@gmail.com
        </p>
        <p>
          <span className="font-semibold text-white">GitHub:</span>{" "}
          <a
            href="https://github.com/TheMidnight1"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            https://github.com/TheMidnight1
          </a>
        </p>
        <p>
          <span className="font-semibold text-white">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/saugat-balami/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            https://www.linkedin.com/in/saugat-balami/
          </a>
        </p>
      </div>
    </main>
  );
}
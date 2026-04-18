"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Data & Analytics",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Excel", "Power BI"],
  },
  {
    title: "Web Development",
    items: ["Next.js", "React", "JavaScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Tools & Methods",
    items: ["Git", "GitHub", "Data Cleaning", "Data Visualisation", "Machine Learning", "API Integration"],
  },
];

export default function Skills() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const skillCards = containerRef.current.querySelectorAll(".skill-card");

      // Animate each card
      gsap.from(skillCards, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate badges inside each card
      skillCards.forEach((card) => {
        const badges = card.querySelectorAll("span");
        gsap.from(badges, {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, containerRef); // Scope to this container

    // Refresh ScrollTrigger to ensure correct positions
    ScrollTrigger.refresh();

    return () => ctx.revert(); // Cleanup on unmount/navigation
  }, []);

  return (
    <section ref={containerRef} className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Skills</p>
      <h2 className="mt-3 text-3xl font-bold">Technical Toolkit</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="skill-card rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { useRef, useLayoutEffect } from "react";
import { projects, clientWebsites } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each project section
      gsap.utils.toArray(".project-section").forEach((section) => {
        const curtains = section.querySelectorAll(".curtain-layer");
        const content = section.querySelector(".project-content");

        // Curtain layers animation
        gsap.to(curtains, {
          yPercent: -100,
          stagger: 0.2,
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });

        // Fade in text/content
        gsap.from(content, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });

      // Animate client website cards
      // Animate client website cards individually
      gsap.utils.toArray(".client-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Projects
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Selected Work
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-400">
          A selection of machine learning, analytics, and web development
          projects.
        </p>
      </div>

      {/* Projects */}
      <div className="mt-16 space-y-20">
        {projects.map((project) => {
          const mediaSrc = project.image || "/images/projects/default.png";

          return (
            <section
              key={project.title}
              className="project-section grid items-center gap-10 lg:grid-cols-2"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/10 project-media">
                <div className="aspect-[16/10] w-full relative">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover rounded-[1.75rem]"
                    />
                  ) : (
                    <img
                      src={mediaSrc}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-[1.75rem]"
                    />
                  )}

                  {/* Curtain layers */}
                  {!project.video && (
                    <>
                      <div className="absolute inset-0 bg-slate-900/90 curtain-layer rounded-[1.75rem]" />
                      <div className="absolute inset-0 bg-slate-900/70 curtain-layer rounded-[1.75rem]" />
                      <div className="absolute inset-0 bg-slate-900/50 curtain-layer rounded-[1.75rem]" />
                    </>
                  )}
                </div>
              </div>

              <div className="project-content">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  {project.category} • {project.year}
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {project.description}
                </p>
              </div>
            </section>
          );
        })}
      </div>

      {/* Client websites */}
      <section className="mt-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Client Websites
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Commercial websites I have built
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {clientWebsites.map((site) => (
            <article
              key={site.url}
              className="client-card rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-xl font-semibold text-white">{site.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {site.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Text
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Animate Image
      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });

      // Curtain layers
      const curtains = imageRef.current.querySelectorAll(".curtain-layer");
      gsap.to(curtains, {
        yPercent: -100,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }, textRef); // scope to component

    // Refresh ScrollTrigger positions
    ScrollTrigger.refresh();

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 py-16 md:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <div ref={textRef} className="relative z-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Data Analyst • Aspiring Data Scientist • Web Developer
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="block">Saugat Balami</span>
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-cyan-400 sm:text-3xl">
            Building useful systems with data and code
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I develop data-driven dashboards, machine learning solutions, and modern web
            applications that turn messy information into clear, practical decisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-cyan-400/40 bg-slate-900/40 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>London, UK</span>
            <span>MSc IT & Data Analysis</span>
            <span>Open to opportunities</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className="relative mt-14 flex min-h-[500px] items-end justify-center md:mt-0 md:min-h-[700px]"
        >
          <div className="relative z-10 h-[500px] w-full overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/30 md:h-[700px]">
            <Image
              src="/images/profilePic.jpeg"
              alt="Portrait of Saugat Balami"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/90 curtain-layer top-0" />
            <div className="absolute inset-0 bg-slate-900/70 curtain-layer top-0" />
            <div className="absolute inset-0 bg-slate-900/50 curtain-layer top-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
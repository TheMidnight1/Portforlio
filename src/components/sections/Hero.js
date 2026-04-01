import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 py-16 md:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Data Analyst • Aspiring Data Scientist • Web Developer
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <span className="block">Saugat Balami</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-cyan-400 sm:text-3xl">
            Building useful systems with data and code
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I develop data-driven dashboards, machine learning solutions, and
            modern web applications that turn messy information into clear,
            practical decisions.
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
        <div className="relative mt-14 flex min-h-[500px] items-end justify-center md:mt-0 md:min-h-[700px]">
          <div className="absolute inset-0 z-0 rounded-[2rem] bg-gradient-to-tr from-cyan-500/10 via-transparent to-cyan-400/10 blur-3xl" />

          <div className="relative z-10 h-[500px] w-full overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/30 md:h-[700px]">
            <Image
              src="/images/profilePic.jpeg"
              alt="Portrait of Saugat Balami"
              fill
              priority
              className="object-cover object-center"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/20 to-slate-950/70" />

            {/* blue cinematic tint */}
            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-screen" />

            {/* bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* background mood */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_left,_rgba(14,165,233,0.08),_transparent_25%)]" />
    </section>
  );
}
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10 p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            {project.category}
          </span>

          <span className="text-sm text-slate-500">{project.year}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Key impact
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            {project.impact}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Tech stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-5 text-sm font-semibold">
          <Link
            href={project.github}
            target="_blank"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            GitHub
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="text-slate-300 transition hover:text-white"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
}
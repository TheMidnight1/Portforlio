import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Work that proves I can build, analyse, and deliver
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            A selected mix of machine learning, analytics, and web development
            projects focused on solving practical problems with clear technical
            execution.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/30 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-slate-900 hover:text-cyan-200"
        >
          View all projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-7 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
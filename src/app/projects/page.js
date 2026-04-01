import { projects, clientWebsites } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Projects
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Selected Work
        </h1>

        <p className="mt-5 text-base leading-8 text-slate-400">
          A selection of machine learning, analytics, and web development
          projects focused on solving practical problems with clear technical
          execution and real output.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {projects.map((project) => {
          const mediaSrc = project.image || "/images/projects/default.png";

          return (
            <section
              key={project.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/10">
                <div className="aspect-[16/10] w-full">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={mediaSrc}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                {!project.video && !project.image && (
                  <div className="absolute bottom-4 right-4 rounded-lg bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300">
                    Preview coming soon
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  {project.category} • {project.year}
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
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

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 transition hover:text-cyan-300"
                  >
                    GitHub
                  </a>

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 transition hover:text-white"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Client Websites
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Commercial websites I have built
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            A selection of client-facing websites developed across different
            business domains. These projects reflect practical web development
            experience beyond coursework and portfolio demos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {clientWebsites.map((site) => (
            <article
              key={site.url}
              className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-xl font-semibold text-white">{site.name}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {site.description}
              </p>

              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Visit website
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
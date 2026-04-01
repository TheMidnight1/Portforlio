export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">About</p>
      <h1 className="mt-3 text-4xl font-bold">About Me</h1>

      <div className="mt-8 space-y-6 text-slate-300 leading-8">
        <p>
          I am Saugat Balami, an MSc Information Technology & Data Analysis
          student with a strong interest in data analytics, machine learning,
          decision support systems, and web development.
        </p>

        <p>
          My work focuses on transforming raw and messy data into useful
          insights, predictive systems, and practical digital products. I enjoy
          combining technical analysis with business understanding to solve
          real-world problems.
        </p>

        <p>
          Alongside data work, I also build modern web applications using
          Next.js and related tools, allowing me to present insights through
          interactive and user-friendly systems rather than dead reports nobody
          reads.
        </p>
      </div>
    </main>
  );
}
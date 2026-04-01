export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-bold">Get in Touch</h1>

      <p className="mt-6 max-w-2xl text-slate-300 leading-8">
        I am open to opportunities in data analytics, data science, and web
        development. For collaboration, freelance work, or professional roles,
        feel free to contact me.
      </p>

      <div className="mt-10 space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <p>
          <span className="font-semibold text-white">Email:</span>{" "}
          saugat.balami@gmail.com
        </p>
        <p>
          <span className="font-semibold text-white">GitHub:</span>{" "}

        <a href="https://github.com/TheMidnight1">https://github.com/TheMidnight1</a>
        </p>
        <p>
          <span className="font-semibold text-white">LinkedIn:</span>{" "}
         <a href="https://www.linkedin.com/in/saugat-balami/">https://www.linkedin.com/in/saugat-balami/</a>
        </p>
      </div>
    </main>
  );
}
import { portfolio } from "@/data/portfolio";

const navItems = [
  ["About", "about"],
  ["My story", "story"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Learn", "learning"],
  ["Resume", "resume"],
  ["Contact", "contact"],
] as const;

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 leading-7 text-slate-300">{intro}</p>}
    </div>
  );
}

export default function Home() {
  const { name, tagline, summary, github, linkedin, email, phone, resumeUrl, story, workingStyle, skills, experience, projects, additionalProjects, learning, certifications } = portfolio;

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen border-b border-slate-800">
        <div className="grid-glow absolute inset-0 opacity-70" />
        <div className="absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-5 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white">EF<span className="text-cyan">.</span>OPS</a>
            <div className="hidden items-center gap-4 text-xs text-slate-300 xl:flex">
              {navItems.map(([label, id]) => <a key={id} className="transition hover:text-cyan" href={`#${id}`}>{label}</a>)}
            </div>
            <a href="#contact" className="rounded-full border border-cyan/40 px-4 py-2 text-sm font-medium text-cyan transition hover:bg-cyan hover:text-ink">Let&apos;s talk</a>
          </nav>

          <div id="top" className="flex min-h-[calc(100vh-88px)] max-w-5xl flex-col justify-center py-20">
            <p className="mb-5 font-mono text-sm text-cyan"><span className="mr-2 text-slate-500">01</span>ERFAN SEDIGHEHSANI · SENIOR DEVOPS / SRE</p>
            <h1 className="max-w-5xl text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Reliable platforms for teams that need to move fast<span className="text-cyan">.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-300 sm:text-2xl">{tagline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-cyan px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">Explore selected work <span aria-hidden="true">→</span></a>
              <a href={resumeUrl} className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan hover:text-cyan">Download résumé <span aria-hidden="true">↓</span></a>
            </div>
            <div className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-4">
              {portfolio.focus.map((item, index) => {
                const [value, ...label] = item.split(" ");
                return (
                  <div key={item} className="bg-ink px-5 py-5">
                    <p className="font-mono text-xs text-cyan">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-4 text-xl font-bold tracking-tight text-white">{value}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-300">{label.join(" ")}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="02 / About me" title="Infrastructure should make teams faster, not busier." />
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.8fr] lg:items-start">
          <p className="text-xl leading-9 text-slate-300">{summary}</p>
          <aside className="rounded-2xl border border-slate-800 bg-panel/60 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Based in</p>
            <p className="mt-2 text-lg font-semibold text-white">{portfolio.location}</p>
            <div className="my-5 h-px bg-slate-800" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">How I work</p>
            <div className="mt-4 space-y-5">
              {workingStyle.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>


      <section id="story" className="section-anchor border-y border-slate-800 bg-[#0b1627]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="03 / My story" title="A systems view, built one layer at a time." intro="My route to DevOps was not a shortcut. Each stage made me better at building platforms that work in the real world." />
          <div className="grid gap-5 lg:grid-cols-2">
            {story.map((chapter, index) => (
              <article key={chapter.phase} className="relative rounded-2xl border border-slate-800 bg-ink p-7">
                <span className="absolute right-6 top-6 font-mono text-sm text-slate-700">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan">{chapter.phase}</p>
                <h3 className="mt-4 max-w-sm text-2xl font-bold tracking-tight text-white">{chapter.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-300">{chapter.description}</p>
                <p className="mt-6 border-t border-slate-800 pt-4 text-sm leading-6 text-cyan">{chapter.takeaway}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-anchor border-y border-slate-800 bg-[#0b1627]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="04 / Toolkit" title="Deep platform experience, organized for clarity." intro="Core capabilities are visible at a glance. Expand any domain for the full service inventory." />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => {
              const additionalItems = group.items.filter((item) => !group.featured.includes(item));

              return (
                <article key={group.category} className="rounded-2xl border border-slate-800 bg-ink p-6 transition hover:-translate-y-1 hover:border-cyan/50">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                    <span className="shrink-0 font-mono text-xs text-slate-500">{group.items.length} tools</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">Core hands-on coverage</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.featured.map((item) => <span key={item} className="rounded-full border border-cyan/25 bg-cyan/5 px-3 py-1.5 text-sm text-slate-200">{item}</span>)}
                  </div>
                  {additionalItems.length > 0 && (
                    <details className="group mt-6 border-t border-slate-800 pt-4">
                      <summary className="cursor-pointer list-none text-sm font-semibold text-cyan [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">View remaining {additionalItems.length} tools +</span>
                        <span className="hidden group-open:inline">Hide detailed inventory −</span>
                      </summary>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {additionalItems.map((item) => <span key={item} className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-400">{item}</span>)}
                      </div>
                    </details>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="05 / Experience" title="Deep systems experience, from operations to platform engineering." />
        <div className="space-y-5">
          {experience.map((item) => (
            <article key={item.title} className="grid gap-5 rounded-2xl border border-slate-800 p-6 md:grid-cols-[11rem_1fr] md:p-8">
              <p className="font-mono text-sm text-cyan">{item.period}</p>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-anchor border-y border-slate-800 bg-[#0b1627]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="06 / Selected work" title="Platforms designed for real operational demands." intro="A selection of hands-on infrastructure work across Kubernetes, observability, data platforms, and automation." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...projects, ...additionalProjects].map((project, index) => (
              <article key={project.title} className="group flex min-h-72 flex-col rounded-2xl border border-slate-800 bg-ink p-6 transition hover:border-cyan/60 hover:shadow-glow">
                <p className="font-mono text-sm text-cyan">0{index + 1}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{project.tag}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <p className="mt-auto border-t border-slate-800 pt-4 text-sm font-medium text-cyan">{project.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="07 / Credentials" title="Credentials and continuous learning." intro="A verified cloud certification, supported by hands-on professional training in delivery, Kubernetes, and security fundamentals." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => {
            const credential = typeof certification === "string"
              ? { name: certification, issuer: "Professional development", type: "Credential" }
              : certification;

            return (
              <article key={credential.name} className={`flex min-h-60 flex-col rounded-2xl border bg-panel/60 p-6 transition hover:-translate-y-1 hover:border-cyan/60 ${
                credential.type === "Industry certification" ? "border-cyan/50 shadow-glow" : "border-slate-800"
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-cyan">{credential.type}</p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-700 font-mono text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold leading-7 text-white">{credential.name}</h3>
                <div className="mt-auto border-t border-slate-800 pt-4 text-sm leading-6 text-slate-400">
                  <p>{credential.issuer}</p>
                  {credential.issued && <p>{credential.issued}</p>}
                  {credential.credentialId && <p className="font-mono text-xs text-slate-500">ID: {credential.credentialId}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="learning" className="section-anchor border-t border-slate-800 bg-[#0b1627]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="08 / Learn" title="Practical notes for engineers building reliable systems." intro="A growing collection of field notes, architecture explainers, and safe DevOps patterns." />
          <div className="grid gap-4 md:grid-cols-3">{learning.map((topic) => <article key={topic} className="rounded-2xl border border-slate-800 bg-ink p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">Coming soon</p><p className="mt-4 font-semibold text-white">{topic}</p></article>)}</div>
        </div>
      </section>

      <section id="resume" className="section-anchor border-t border-slate-800 bg-[#0b1627]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="09 / Resume" title="A focused record of platform engineering experience." intro="The portfolio summarizes the work. Add a current PDF resume for recruiters who need a concise, downloadable version." />
          <div className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-ink p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">Resume PDF</p>
              <p className="mt-1 text-sm text-slate-400">{resumeUrl ? "Current resume ready to download." : "Add public/resume.pdf, then set resumeUrl in portfolio.ts."}</p>
            </div>
            {resumeUrl ? (
              <a href={resumeUrl} className="rounded-full bg-cyan px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-white">Download resume ↓</a>
            ) : (
              <span className="rounded-full border border-slate-700 px-5 py-3 text-center text-sm font-semibold text-slate-400">Resume link pending</span>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor border-t border-slate-800 bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan">10 / Contact</p>
          <div className="mt-5 flex flex-col justify-between gap-9 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Let&apos;s build something reliable.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">I&apos;m open to discussing senior DevOps, platform engineering, and cloud infrastructure opportunities.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {email && <a href={`mailto:${email}`} className="rounded-full bg-cyan px-5 py-3 text-sm font-bold text-ink">Email me</a>}
              {phone && <a href={`tel:${phone}`} className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan">Call me</a>}
              <a href={github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan">GitHub ↗</a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {name}. Built with Next.js and Tailwind CSS.</p>
          <a href="#top" className="transition hover:text-cyan">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

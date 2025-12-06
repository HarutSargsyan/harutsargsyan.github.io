import ProjectBox from "../components/ProjectBox";
import { projects } from "../assets/data.tsx";

export default function Projects() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          A few builds I&apos;m proud of
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          From fintech dashboards to polished developer tooling, these projects
          highlight how I approach product thinking, engineering depth, and
          thoughtful user experience.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectBox key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

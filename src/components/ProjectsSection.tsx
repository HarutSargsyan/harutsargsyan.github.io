import { FiArrowUpRight } from "react-icons/fi";
import type { ProjectItem } from "../portfolio";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <section className="space-y-6">
    <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
    {projects.length === 0 ? (
      <p className="text-sm text-[color:var(--color-muted)]">Add project items.</p>
    ) : (
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={`${project.name}-${index}`}
            className="rise-in flex h-full flex-col justify-between gap-4 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                {project.link ? (
                  <a
                    href={project.link}
                    className="text-base font-semibold text-[color:var(--color-ink)] hover:underline"
                  >
                    {project.name}
                  </a>
                ) : (
                  <p className="text-base font-semibold">{project.name}</p>
                )}
                {project.link ? <FiArrowUpRight className="h-4 w-4 text-[color:var(--color-muted)]" /> : null}
              </div>
              {project.description ? (
                <p className="text-sm text-[color:var(--color-muted)]">{project.description}</p>
              ) : null}
              {project.tags && project.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.name}-${tag}`}
                      className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            {project.code ? (
              <a
                href={project.code}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
              >
                Code
                <FiArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    )}
  </section>
);

export default ProjectsSection;

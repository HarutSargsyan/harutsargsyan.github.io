import { FiArrowUpRight } from "react-icons/fi";
import type { ResearchItem } from "../portfolio";

type ResearchSectionProps = {
  research: ResearchItem[];
};

const ResearchSection = ({ research }: ResearchSectionProps) => (
  <section className="space-y-6">
    <h2 className="text-xl font-semibold tracking-tight">Research Experience</h2>
    <ul className="space-y-5 list-none">
      {research.map((item, index) => (
        <li
          key={item.title}
          className="rise-in space-y-2 border-b border-[color:var(--color-line)] pb-5"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <div className="space-y-1">
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-[color:var(--color-ink)] hover:underline"
            >
              {item.title}
            </a>
            <p className="text-sm text-[color:var(--color-muted)]">
              {[item.context, item.date].filter(Boolean).join(" · ")}
            </p>
            <p className="text-sm italic text-[color:var(--color-muted)]">
              {item.authors.join(", ")}
            </p>
          </div>
          <p className="text-sm text-[color:var(--color-muted)]">{item.description}</p>
          <a
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.linkLabel}: ${item.title}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
          >
            {item.linkLabel}
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default ResearchSection;

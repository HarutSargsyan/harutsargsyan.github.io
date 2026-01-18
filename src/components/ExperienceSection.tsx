import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import type { ExperienceItem } from "../portfolio";

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
  openExperiences: Set<number>;
  onToggleExperience: (index: number) => void;
};

const ExperienceSection = ({
  experiences,
  openExperiences,
  onToggleExperience,
}: ExperienceSectionProps) => {
  const getInitials = (value: string) =>
    value
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join("");

  const formatRange = (start?: string, end?: string) => {
    if (!start && !end) return "";
    if (start && end) return `${start} — ${end}`;
    return start || end || "";
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
      {experiences.length === 0 ? (
        <p className="text-sm text-[color:var(--color-muted)]">
          Add experience items.
        </p>
      ) : (
        <ul className="space-y-4 list-none">
          {experiences.map((item, index) => {
            const isOpen = openExperiences.has(index);
            return (
              <li
                key={`${item.company}-${item.role}-${index}`}
                className="rise-in grid gap-4 border-b border-[color:var(--color-line)] pb-4 md:grid-cols-[auto_1fr_auto] md:items-center"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-paper)] text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                  ) : (
                    getInitials(item.company)
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        {item.url ? (
                          <a
                            href={item.url}
                            className="text-base font-medium text-[color:var(--color-ink)] hover:underline"
                          >
                            {item.role}
                          </a>
                        ) : (
                          <p className="text-base font-medium">{item.role}</p>
                        )}
                        {item.url ? (
                          <FiArrowUpRight className="h-4 w-4 text-[color:var(--color-muted)]" />
                        ) : null}
                      </div>
                      <p className="text-sm text-[color:var(--color-muted)]">
                        {item.company}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 md:justify-end">
                      <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-muted)] md:text-right">
                        {formatRange(item.start, item.end)}
                      </p>
                      <button
                        type="button"
                        onClick={() => onToggleExperience(index)}
                        aria-expanded={isOpen}
                        aria-label="Toggle experience details"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-muted)] transition hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]"
                      >
                        <FiChevronDown
                          className={`h-4 w-4 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-600 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.details && item.details.length > 0 ? (
                      <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-muted)]">
                        {item.details.map((detail) => (
                          <>
                            <li key={`${item.company}-${detail}`}>{detail}</li>
                            <br />
                          </>
                        ))}
                      </ul>
                    ) : item.summary ? (
                      <p className="mt-2 max-w-2xl text-sm text-[color:var(--color-muted)]">
                        {item.summary}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ExperienceSection;

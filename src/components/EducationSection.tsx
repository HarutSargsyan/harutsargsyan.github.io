import { FiArrowUpRight } from "react-icons/fi";
import type { EducationItem } from "../portfolio";

type EducationSectionProps = {
  education: EducationItem[];
};

const EducationSection = ({ education }: EducationSectionProps) => {
  const getInitials = (value: string) =>
    value
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join("");

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold tracking-tight">Education</h2>
      {education.length === 0 ? (
        <p className="text-sm text-[color:var(--color-muted)]">
          Add education items.
        </p>
      ) : (
        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={`${item.school}-${item.degree}`}
              className="rise-in flex flex-wrap items-start gap-4 border-b border-[color:var(--color-line)] pb-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-paper)] text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.school}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                ) : (
                  getInitials(item.school)
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {item.url ? (
                    <a
                      href={item.url}
                      className="text-base font-medium text-[color:var(--color-ink)] hover:underline"
                    >
                      {item.school}
                    </a>
                  ) : (
                    <p className="text-base font-medium">{item.school}</p>
                  )}
                  {item.url ? (
                    <FiArrowUpRight className="h-4 w-4 text-[color:var(--color-muted)]" />
                  ) : null}
                </div>
                {item.degree ? (
                  <p className="text-sm text-[color:var(--color-muted)]">
                    {item.degree}
                  </p>
                ) : null}
                {item.details ? (
                  <p className="max-w-2xl text-sm text-[color:var(--color-muted)]">
                    {item.details}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EducationSection;

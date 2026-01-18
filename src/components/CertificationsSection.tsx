import type { CertificationItem } from "../portfolio";

type CertificationsSectionProps = {
  certifications: CertificationItem[];
};

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => (
  <section className="space-y-6">
    <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
    {certifications.length === 0 ? (
      <p className="text-sm text-[color:var(--color-muted)]">Add certification items.</p>
    ) : (
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={`${cert.name}-${index}`}
            className="rise-in flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--color-line)] pb-4"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="space-y-1">
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  className="text-base font-medium text-[color:var(--color-ink)] hover:underline"
                >
                  {cert.name}
                </a>
              ) : (
                <p className="text-base font-medium">{cert.name}</p>
              )}
              {cert.issuer ? (
                <p className="text-sm text-[color:var(--color-muted)]">{cert.issuer}</p>
              ) : null}
            </div>
            {cert.date ? (
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                {cert.date}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    )}
  </section>
);

export default CertificationsSection;

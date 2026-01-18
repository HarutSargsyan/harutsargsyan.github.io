import { useMemo, type ComponentType } from "react";
import { FiArrowUpRight, FiGlobe, FiMail, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { PortfolioData, SocialLink } from "../portfolio";

type HeaderProps = {
  profile: PortfolioData["profile"];
  socials: SocialLink[];
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const Header = ({ profile, socials, theme, onToggleTheme }: HeaderProps) => {
  const socialIconMap: Record<string, ComponentType<{ className?: string }>> = useMemo(
    () => ({
      email: FiMail,
      github: FaGithub,
      linkedin: FaLinkedinIn,
      x: FaXTwitter,
      website: FiGlobe,
    }),
    [],
  );

  const renderSocialIcon = (social: SocialLink) => {
    if (!social.icon) {
      return null;
    }
    const Icon = socialIconMap[social.icon];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  return (
    <header className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight md:text-5xl">
            {profile.name}
          </h1>
          {profile.location ? (
            <p className="text-sm text-[color:var(--color-muted)]">
              {profile.location}
            </p>
          ) : null}
          {profile.title ? (
            <p className="text-base text-[color:var(--color-muted)]">{profile.title}</p>
          ) : null}
          {profile.tagline ? (
            <p className="max-w-xl text-sm text-[color:var(--color-muted)]">{profile.tagline}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socials.map((social) => (
            <a
              key={`${social.label}-${social.url}`}
              href={social.url}
              className="rise-in inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--color-ink)]"
              style={{ animationDelay: "80ms" }}
            >
              {renderSocialIcon(social)}
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {profile.primaryLinkUrl ? (
          <a
            href={profile.primaryLinkUrl}
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
          >
            {profile.primaryLinkLabel || "Thoughts"}
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)] transition hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]"
        >
          {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;

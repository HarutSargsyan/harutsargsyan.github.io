import { useEffect, useState } from "react";
import { portfolioData } from "./portfolio";
import Header from "./components/Header";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
// import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [openExperiences, setOpenExperiences] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  };

  const toggleExperience = (index: number) => {
    setOpenExperiences((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const data = portfolioData;

  return (
    <div className="min-h-screen text-[color:var(--color-ink)]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 pb-20 pt-16 md:px-12">
        <Header
          profile={data.profile}
          socials={data.socials}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <EducationSection education={data.education} />
        <ExperienceSection
          experiences={data.experiences}
          openExperiences={openExperiences}
          onToggleExperience={toggleExperience}
        />
        <ProjectsSection projects={data.projects} />
        {/* <CertificationsSection certifications={data.certifications} /> */}
      </main>
      <Footer name={data.profile.name} />
    </div>
  );
}

export default App;

import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";

interface Props {
  img: string;
  title: string;
  desc: string;
  stack: string[];
  link: string;
  category: string;
  repo?: string;
  index?: number;
}

export default function ProjectBox({
  img,
  title,
  desc,
  stack,
  link,
  repo,
  category,
  index = 0,
}: Props) {
  const backgroundOverlay =
    "linear-gradient(to bottom, rgba(15,23,42,0.2), rgba(15,23,42,0.55))";

  return (
    <article className="flex flex-col rounded-3xl border border-slate-100 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
      <div
        className="relative h-48 overflow-hidden"
        style={{
          backgroundImage: `${backgroundOverlay}, url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/80">
          <FiImage className="text-4xl" />
        </div>
        <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
          {category}
        </span>
      </div>

      <div className="flex h-full flex-col gap-4 px-6 py-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            <FiExternalLink />
            View Project
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
              aria-label="View source code"
            >
              <FiGithub className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

import type { MouseEvent } from 'react';
import { Github } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-mint-300 hover:shadow-[0_0_28px_-4px_rgba(85,201,174,0.45)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--glow-x, 50%) var(--glow-y, 0%), rgba(85, 201, 174, 0.22), rgba(85, 201, 174, 0.06) 45%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="h-1 w-12 rounded-full bg-coral-400 transition-all duration-300 group-hover:w-20" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-bold leading-[1.2] text-navy-900">{project.title}</h3>
        <p className="mt-3 flex-1 leading-normal text-gray-600">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold text-mint-900"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-gray-100 pt-5">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 focus-visible:ring-offset-2"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Ver en GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

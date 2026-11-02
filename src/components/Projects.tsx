import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-mint-700">Proyectos</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.2] text-navy-900 md:text-4xl">
          Proyectos destacados
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-normal text-gray-600">
          Una selección de mis trabajos más representativos, con las tecnologías que utilicé en cada uno.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.repoUrl} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { technologies } from '@/data/portfolio';

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-mint-700">Sobre mí</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.2] text-navy-900 md:text-4xl">
              Resuelvo problemas con método y trabajo en equipo
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-coral-400" aria-hidden="true" />
          </div>

          <div>
            <p className="text-lg leading-normal text-gray-600">
              Me enfoco en entender primero el problema, luego diseño una solución clara y la pruebo paso a paso.
              Disfruto trabajar en equipo, comunicar avances con claridad y aprender de cada retroalimentación para
              mejorar el resultado final.
            </p>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-gray-500">Tecnologías principales</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((tech) => (
                <li
                  key={tech.name}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-mint-400 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint-50 text-mint-700 transition group-hover:bg-mint-100">
                    <tech.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-navy-900">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

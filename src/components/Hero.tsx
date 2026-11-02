import { Download, GraduationCap, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 px-6 py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-coral-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-mint-400/40 bg-mint-400/10 px-4 py-1.5 text-sm font-semibold text-mint-200">
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          Ingeniería en Sistemas
        </p>

        <h1 className="animate-fade-up mt-6 max-w-3xl text-4xl font-bold leading-[1.15] md:text-6xl [animation-delay:100ms]">
          Hola, soy <span className="text-coral-300">Abril Montserrat</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-normal text-navy-100 [animation-delay:200ms]">
          Junior Software Developer | Python &amp; Java Web Specialist
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:300ms]">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-coral-400 px-6 py-3 font-semibold text-navy-900 no-underline shadow-lg shadow-coral-900/30 transition hover:-translate-y-0.5 hover:bg-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            Ver Proyectos
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-300 px-6 py-3 font-semibold text-white transition hover:border-mint-300 hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}

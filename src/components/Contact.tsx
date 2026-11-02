import { Github, Linkedin, Mail } from 'lucide-react';
import { contactLinks } from '@/data/portfolio';

const contactItems = [
  {
    label: 'GitHub',
    value: 'github.com/AbMonts',
    href: contactLinks.github,
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Abril Montserrat Peñaloza Tenorio',
    href: contactLinks.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Correo',
    value: contactLinks.email,
    href: `mailto:${contactLinks.email}`,
    icon: Mail,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-navy-900 px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-mint-300">Contacto</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.2] md:text-4xl">
          ¿Hablamos de tu próximo proyecto?
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-normal text-navy-100">
          Puedes conocer mi trabajo en GitHub o escribirme directamente por LinkedIn o correo electrónico.
        </p>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {contactItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex h-full items-center gap-4 rounded-2xl border border-navy-700 bg-navy-800 p-5 text-white no-underline transition duration-300 hover:-translate-y-1 hover:border-mint-400 hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-400 text-navy-900 transition group-hover:bg-coral-300">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-mint-200">{item.label}</span>
                  <span className="block truncate text-sm text-navy-100">{item.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-16 max-w-6xl border-t border-navy-800 pt-8 text-sm text-navy-200">
        © {new Date().getFullYear()} Abril Montserrat. Todos los derechos reservados.
      </p>
    </section>
  );
}

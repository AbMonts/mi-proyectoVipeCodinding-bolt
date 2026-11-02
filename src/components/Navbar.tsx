import { Code2 } from 'lucide-react';

const sections = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-900/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-base font-bold text-white no-underline">
          <Code2 className="h-6 w-6 text-mint-300" aria-hidden="true" />
          Abril Montserrat
        </a>
        <ul className="flex items-center gap-6 text-sm font-semibold">
          {sections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                className="text-navy-100 no-underline transition-colors hover:text-mint-300 focus-visible:text-mint-300 focus-visible:outline-none"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

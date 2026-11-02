import {
  Braces,
  Coffee,
  Container,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Hash,
  Layout,
  Table2,
  type LucideIcon,
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Gestión de Proyectos Ágiles',
    description:
      'Aplicación de escritorio para planificar y dar seguimiento a proyectos bajo metodologías ágiles, con una interfaz personalizada.',
    tags: ['C#', '.NET', 'Visual Studio', 'Material UI'],
    repoUrl: 'https://github.com/AbMonts/Proyecto_Gest_Proy_Soft',
  },
  {
    title: 'Cliente de Base de Datos SQL Server',
    description:
      'Aplicación de escritorio que se conecta a SQL Server para consultar y administrar la información de la base de datos Northwind.',
    tags: ['C#', 'Visual Studio', 'SQL Server', 'Northwind'],
    repoUrl: 'https://github.com/AbMonts/ProyectoConsumoBD_SQLServer',
  },
  {
    title: 'Aprende Prolog en el Móvil',
    description:
      'App móvil educativa que introduce la programación funcional y Prolog de forma interactiva y sencilla.',
    tags: ['Android Studio', 'Programación funcional', 'Prolog'],
    repoUrl: 'https://github.com/AbMonts/PrologFun_VeranoCientifico2025',
  },
  {
    title: 'Aplicación Web con Laravel',
    description:
      'Aplicación web desarrollada con Laravel, con dependencias gestionadas por Composer y Node.js, y contenedores Docker.',
    tags: ['PHP', 'Laravel', 'Node.js', 'Vite', 'Docker'],
    repoUrl: 'https://github.com/AbMonts/PRoyecto_WeB_III',
  },
];

export const technologies: { name: string; icon: LucideIcon }[] = [
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: Braces },
  { name: 'C++', icon: Cpu },
  { name: 'Git', icon: GitBranch },
  { name: 'HTML/CSS', icon: Layout },
  { name: 'JavaScript', icon: FileCode },
  { name: 'SQL', icon: Table2 },
  { name: 'C#', icon: Hash },
  { name: 'Bases de datos', icon: Database },
  { name: 'Docker', icon: Container },
];

export const contactLinks = {
  github: 'https://github.com/AbMonts',
  linkedin: 'https://www.linkedin.com/in/abril-montserrat-peñaloza-tenorio-bb38302b2',
  email: 'abrimonts16@gmail.com',
};


import Link from 'next/link';

const projects = [
  {
    id: 'counter1',
    title: 'Contador Avanzado',
    description: 'Un contador con persistencia de datos y animaciones'
  },
  {
    id: 'counter2',
    title: 'Contador Simple',
    description: 'Versión minimalista con modo oscuro'
  },
  // ...otros proyectos dinámicos
];

export default function PlaygrPage() {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/playgr/${project.id}`}
          className="border p-4 rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
        </Link>
      ))}
    </div>
  );
}
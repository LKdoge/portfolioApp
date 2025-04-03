export default function ProjectPage({
    params,
  }: {
    params: { slug: string };
  }) {
    // Lógica para proyectos dinámicos (ej: fetch desde API)
    return <div>Proyecto dinámico: {params.slug}</div>;
  }
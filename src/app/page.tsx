import StaticNavbar from "@/components/ui/navbar";

export default function HomePage() {
  return (
    <>
      <StaticNavbar />
      <div className="min-w-75 grid grid-cols-none gap-4 justify-items-center">
        <article className="my-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <h1 className="text-4xl font-bold">1</h1>
              <p className="text-gray-600">Text</p>
            </div>

            <div className="">
              <h1 className="text-4xl font-bold">2</h1>
              <p className="text-gray-600">Text</p>
            </div>
          </div>

          <div className="">
            <h1>Título Principal del Documento</h1>
            <p>Este es un texto de ejemplo que tiene como único propósito extenderse innecesariamente en múltiples párrafos para demostrar el uso de etiquetas HTML correctamente organizadas.</p>

            <h2>Primera Sección</h2>
            <p>En esta primera sección se abordará un tema irrelevante pero que se expandirá en múltiples líneas para dar la sensación de contenido extenso.</p>
            <p>Muchas veces, los textos largos no aportan mayor valor, pero su estructura es fundamental para la legibilidad y comprensión del documento.</p>

            <h3>Subtítulo Relacionado</h3>
            <p>Dentro de cada sección, es importante contar con subtítulos que permitan organizar la información de manera más clara y estructurada.</p>
            <p>Este párrafo no tiene un propósito real más allá de incrementar la cantidad de contenido dentro del documento.</p>

            <h2>Segunda Sección</h2>
            <p>A medida que avanzamos en el documento, es relevante dividir la información en nuevas secciones para mantener la coherencia.</p>
            <p>Los lectores suelen perder interés si el contenido no está bien distribuido, lo que hace que el uso de títulos y subtítulos sea indispensable.</p>

            <h3>Otro Subtítulo</h3>
            <p>Este subtítulo es solo una excusa para continuar extendiendo el texto y ofrecer más ejemplos de cómo se pueden estructurar los documentos HTML.</p>
            <p>Aunque no se diga nada nuevo, la organización en párrafos ayuda a la digestión del contenido.</p>

            <h2>Conclusión</h2>
            <p>En este documento se ha demostrado cómo se puede estructurar un texto innecesariamente largo utilizando HTML.</p>
            <p>Aunque su contenido carezca de valor real, el formato es clave para una presentación efectiva de la información.</p>
          </div>

          <div className="">
            <h1 className="text-4xl font-bold">3</h1>
            <p className="text-gray-600">Footer</p>
          </div>
        </article>
      </div>
    </>

  );
}
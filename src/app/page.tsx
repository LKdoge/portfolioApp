import StaticNavbar from "@/components/ui/navbar";
import IconGrid from "@/components/ui/icons/IconGrid";
import Card_ from "@/components/ui/card";
import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <StaticNavbar />
      <div className="min-w-75 grid grid-cols-none gap-4 justify-items-center border-2 border-black">
        <article className="my-8  border-3 border-red-500 p-2 w-2/3">
        <div className="justify-items-end">
          <Card_></Card_>
        </div>
          <div className="flex flex-col items-center border-2 border-blue-500 felx justify-center flex-col">
            <div className="border-2 border-black mt-8 w-full max-w-md">
              <img
                src="https://i.pinimg.com/564x/21/a8/c8/21a8c882a7d18e577eef4a48eec20b46.jpg"
                rel="image"
              />
            </div>
              <h1 className="text-4xl font-bold">Name del tipo</h1>
              <p className="text-gray-600">Text intro</p>
              <section>
                <h2>Fundamentos</h2>
                <p>Un dev junior conoce la estructura básica de HTML:</p>
                <ul>
                  <li>
                    Etiquetas semánticas como <code>&lt;header&gt;</code>,{" "}
                    <code>&lt;section&gt;</code> y <code>&lt;footer&gt;</code>.
                  </li>
                  <li>
                    Listas (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>),
                    tablas y formularios.
                  </li>
                  <li>
                    Uso correcto de enlaces e imágenes con <code>alt</code> y{" "}
                    <code>target="_blank"</code>.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Uso de Atributos</h2>
                <p>
                  Maneja atributos como <code>id</code>, <code>class</code>,{" "}
                  <code>href</code> y <code>src</code> para estructurar
                  correctamente el contenido.
                </p>
              </section>

              <section>
                <h2>Integración con CSS y JS</h2>
                <p>
                  Conoce cómo vincular estilos con <code>&lt;link&gt;</code> y
                  scripts con <code>&lt;script&gt;</code>, optimizando la carga
                  con <code>defer</code>.
                </p>
              </section>
          </div>
          {/*seccion de iconos*/}
          <div className="border-2 border-black m-2">
            <h2 className="text-xl font-semibold mb-4">Tech & Skills</h2>
            <IconGrid />
          </div>
          <div className="border-2 border-black m-2">
            <h2 className="text-xl font-semibold mb-4">Certification</h2>
            <IconGrid />
          </div>
          <div className=" border-2 border-green-500 m-px justify-center">
            <Link href="/playgr" passHref> 
              <button  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Projectos/XP
              </button>
            </Link>
          </div>

         
        </article>
      </div>
      <div className=" border-2 border-black flex flex-col items-center">
            <h1 className="text-4xl font-bold">Footer</h1>
            <p className="text-gray-600">About me</p>
      </div>
    </>
  );
}

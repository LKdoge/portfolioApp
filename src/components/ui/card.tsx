'use client';
import {Card} from "@heroui/react";
import IconGrid from "@/components/ui/icons/IconGrid";
import Link from "next/link";

export default function CustomCard() {
  return (
    <Card className="py-4">
          <div className="min-w-75 grid grid-cols-none gap-4 justify-items-center border-2 border-black">
            <article className="border-3 border-red-500 w-2/3">
              <div className="flex flex-col items-center border-2 border-blue-500 flex justify-center flex-col">
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
              <div className="border-2 border-black">
                <h2 className="text-xl font-semibold">Tech & Skills</h2>
                <IconGrid />
              </div>
              <div className="border-2 border-black">
                <h2 className="text-xl font-semibold">Certification</h2>
                <IconGrid />
              </div>
              <div className=" border-2 border-green-500 m-px justify-center">
                <Link href="/playgr" passHref>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
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
    </Card>
  );
}

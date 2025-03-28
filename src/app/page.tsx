import ReduxProvider from "@/lib/store/redux-provider";

export default function Home() {


  return (
    <main className="w-full h-screen grid grid-flow-col grid-rows-3 gap-4 place-items-center">
      <ReduxProvider>
        <div className="grid-cols-2">
          <div className="grid-rows-2 gap-4">
            <div className="grid-row">
              hola 1
            </div>
            <div className="">
              hola 2
            </div>
          </div>
          <div className="">
            hola 3
          </div>
        </div>
      </ReduxProvider>
    </main>
  );
}

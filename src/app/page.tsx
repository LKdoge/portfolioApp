import ErrorAlert from "@/components/ErrorAlert";
import InfoAlert from "@/components/InfoAlert";
import SuccessAlert from "@/components/SuccessAlert";
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
            <InfoAlert info="Test info" message="Info!" /> 
            <SuccessAlert info="Test success" message="Success!"/> 
            <ErrorAlert error="Test error" message="Error!"/> 
          </div>
        </div>
      </ReduxProvider>
    </main>
  );
}

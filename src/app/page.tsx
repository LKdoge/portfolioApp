
import Page from "../config/db-conection";
import {Button} from '@heroui/button'; 
import ReduxProvider from "@/lib/store/redux-provider";
import AuthUpdater from "../lib/auth/AuthUpdater";
import AuthViewer from "../lib/auth/AuthViewer";
export default function Home() {
  return (
    
    <div className="">
      <Page />
    <div>
      <Button isDisabled color="primary">
          Button
      </Button>
      <ReduxProvider>
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        <AuthUpdater />
        <AuthViewer />
      </main>
    </ReduxProvider>
    </div>
    </div>
  );
}

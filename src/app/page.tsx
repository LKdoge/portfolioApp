import Page from "../config/db-conection";
import {Button} from '@heroui/button'; 
export default function Home() {
  return (
    <div className="">
      <Page />
    <div>
      <Button isDisabled color="primary">
          Button
      </Button>
    </div>
    </div>
  );
}

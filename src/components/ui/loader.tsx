import { Spinner } from "@heroui/spinner";

export default function Loader() {
  return (
    <div className="flex gap-4">
      <Spinner classNames={{label: "text-foreground mt-4"}} color="default" variant="wave" />
    </div>
  );
}

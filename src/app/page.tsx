import InfoAlert from "@/components/ui/info-alert";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="mt-2 text-gray-600">This is the homepage.</p>
      <InfoAlert info="Info Alert" message="This is an info alert." />
    </main>
  );
}
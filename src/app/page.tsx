'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-4 gap-x-4 gap-y-5 grid-flow-row-dense w-full max-w-6xl">
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[500px] col-span-4 row-span-3" />
        <div className="bg-orange-500 rounded-lg shadow-xl min-h-[300px]" />
        <div className="bg-blue-500 rounded-lg shadow-xl min-h-[300px]" />
        <div className="bg-rose-800 rounded-lg shadow-xl min-h-[300px]" />
        <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[300px] col-span-4" />
        <div className="bg-pink-500 rounded-lg shadow-xl min-h-[300px]" />
        <div className="bg-amber-100 rounded-lg shadow-xl min-h-[300px] col-span-2" />
        <div className="bg-purple-500 rounded-lg shadow-xl min-h-[300px] col-span-2" />
        <div className="bg-lime-200 rounded-lg shadow-xl min-h-[200px] col-span-4" />
      </div>
    </ div>
  );
}

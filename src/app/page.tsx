import { unstable_noStore as noStore } from "next/cache";
import { JonAndRachelPhoto } from "./_components/JonAndRachelPhoto";
import dayjs from "dayjs";

const weddingDate = dayjs("Nov 2, 2024");
const currentDate = dayjs();

const daysLeft = Math.abs(currentDate.diff(weddingDate, "day"));

export default async function Home() {
  noStore();

  return (
    <main className="flex h-full flex-col items-center gap-10 bg-blue-200">
      <div className="flex w-full justify-center bg-pink-500 px-4 py-2">
        <h1 className="font-serif text-4xl font-bold text-white">
          Rachel + Jon
        </h1>
      </div>

      <div className="text-center">
        <h3 className="font-serif text-2xl">
          How many days until this marvelous event?
        </h3>
        <h2 className="text-2xl font-bold">{daysLeft}</h2>
      </div>

      <div className="sm: border-8 border-pink-500 bg-slate-100 p-10 md:p-32">
        <JonAndRachelPhoto />
      </div>
    </main>
  );
}

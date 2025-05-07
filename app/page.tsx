import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Bebas_Neue } from "next/font/google";

export default async function Home() {
  const data = await (await fetch("http://localhost:3000/api/gettop250", {
    method: "POST",
  })).json();
  console.log(data.result);

  return (
    
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center py-4">
      
      <header className="text-center py-4">
        <div className="bg-gradient-to-l from-neutral-950 to-neutral-800 mx-auto w-6xl py-8 rounded-md">
        <h1 className="text-white text-6xl font-bold uppercase">Top 250 Rated Movies</h1>
        <p className="text-slate-200 mt-2">
          Top 250 movies as rated by regular IMDb voters. Source: 
          <a className="text-amber-400 underline" href="https://m.imdb.com/chart/top/" target="_blank" rel="noopener noreferrer"> IMDb</a>
        </p></div>
      </header>

      <div className="bg-neutral-800 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 max-w-6xl mx-auto rounded-md">
        {data.result.map((movie) => (
          <div key={movie.id} className="bg-black/30 backdrop-blur-lg relative rounded-lg flex flex-col items-center border-2 border-gray-700 transform hover:scale-105 group transition-all duration-300 ease-out">
                <Image src={movie.image} alt={movie.title} width={1920} height={1080} className="rounded-md h-96 object-cover " />
                <div className="hidden group-hover:flex absolute flex-col justify-between top-0 w-full h-full px-4 py-4 bg-black/80 backdrop-invert rounded-md items-center">
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-center font-bold uppercase text-amber-400">{movie.title}</p>
                  <div className="flex gap-4">
                    <p className="text-slate-300">{movie.releaseYear}</p>
                    <p className="text-slate-300"><span className="font-bold text-amber-500">{movie.ratings}</span>/10</p>
                  </div>
                </div>
                <span className="text-justify text-slate-200">{movie.plot}</span>
                <div className="flex flex-wrap text-center gap-1.5">
                  {movie.genre.map((genre, index) => (
                    <p key={index} className="bg-amber-700/80 px-4 py-0.5 rounded-full font-bold text-center text-amber-400">{genre}</p>
                  ))}
                </div>
          </div></div>
        ))}
      </div>
    </div>
  );
}

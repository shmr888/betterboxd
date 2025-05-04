import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



export default async function Home() {
  //abc().then((res)=>{console.log("Sucess ra "+ res)}).catch((err)=>{console.log("Error ra bunda: ",err)})
  const data = await (await fetch("http://localhost:3000/api/gettop250",{
    method:"POST"
  })).json();
  console.log(data.result);
  
  return (
    <div className=" bg-gradient-to-l from-gray-900 via-slate-800 to-gray-600">

    <div className="max-w-6xl mx-auto flex flex-col gap-4 pt-4"><div className="flex flex-col gap-0.5">
      <p className="text-white text-6xl font-bold text-center uppercase">Top 250 rated movies</p>
      <p className="text-center text-slate-200">Top 250 movies as rated by regular IMDb voters. Source : <a className="text-amber-400 underline" href="https://m.imdb.com/chart/top/" target="_blank">IMDb</a></p></div>
      <div className="grid grid-cols-4 gap-1 p-4">
      {data.result.map((movie)=>{
        return <div key={movie.id} className="bg-black/20 backdrop-blur-lg rounded-sm flex flex-col items-center border-2 gap-10">
            
            <HoverCard>
            <HoverCardTrigger><Image src={movie.image} alt={movie.title} width={1920} height={1080} className="rounded-md h-96"/></HoverCardTrigger>
            <HoverCardContent className="flex flex-col gap-2 bg-slate-700">
            <div className="flex flex-col gap-1 items-center"> 
            <p className="text-center font-bold">{movie.title}</p>
            <div className="flex  gap-4">
              <p>{movie.releaseYear}</p>
            <p><span className="font-bold text-amber-500">{movie.ratings}</span>/10</p>
            </div>
             </div>
            <span className="text-justify"> {movie.plot}</span>
            <div className="flex flex-wrap text-center gap-1.5">
            {movie.genre.map((genre,index)=><p key={index} className=" bg-amber-700/80 px-4 py-0.5 rounded-full font-bold text-center text-amber-400">{genre}</p>)}</div>
            </HoverCardContent>
            </HoverCard>
        </div>
      })}  </div>
    </div> </div>
  );
}


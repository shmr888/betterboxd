import Image from "next/image";



export default async function Home() {
  //abc().then((res)=>{console.log("Sucess ra "+ res)}).catch((err)=>{console.log("Error ra bunda: ",err)})
  const data = await (await fetch("http://localhost:3000/api/gettop250",{
    method:"POST"
  })).json();
  console.log(data.result);
  
  return (
    <div className=" bg-[#4a587d]">
    <div className="max-w-6xl mx-auto ">
      <div className="grid grid-cols-4 gap-2 p-4">
      {data.result.map((movie)=>{
        return <div key={movie.id} className="bg-black/20 backdrop-blur-lg p-2 rounded-md flex flex-col items-center border-2 gap-4">
            <Image src={movie.image} alt={movie.title} width={1920} height={1080} className="rounded-md h-96"/>
           <div className="flex flex-col gap-1 items-center"> 
            <p className="text-center font-bold">{movie.title}</p>
            <div className="flex  gap-4">
              <p>{movie.releaseYear}</p>
            <p><span className="font-bold text-amber-500">{movie.ratings}</span>/10</p>
            </div> 
            <div className="flex flex-wrap gap-1.5">
            {movie.genre.map((genre,index)=><p key={index} className=" bg-amber-400/80 px-4 py-0.5 rounded-full text-[#4a587d]">{genre}</p>)}</div> </div>
        </div>
      })}  </div>
    </div> </div>
  );
}


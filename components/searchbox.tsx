'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

const Searchbox = () => {
    const [loading,setLoading] = useState(false)
    const [search,setSearch] = useState()
    const [debounceSearch] = useDebounce(search,1200)
    const [data,setData] = useState([])
    useEffect(()=>{
        (async ()=>{
            if (!debounceSearch) setData([])
            setLoading(true)
            const searchText = await(await(fetch('http://localhost:3000/api/getsearchrecommandations',{
                method:"POST",
                body:JSON.stringify({
                    search:debounceSearch
                })
            }))).json()
            setData(searchText)
            setLoading(false)
        })()
    },[debounceSearch])
    console.log(data)
  return (

    <div className="relative"><div className="w-96 border-1 border-neutral-400/60 rounded-md py-1.5 px-2 flex items-center">
        <input className='outline-none text-sm' onChange={(e)=>{
            setSearch(e.target.value)
        }}/>
        
        </div>
        {data.length!=0 && <div  className="bg-blue-950 absolute top-10 w-full rounded-md p-4 ">
             {!loading?data.result?.map((movie,index)=>{
                return <Link href={`/movie/${movie.id}`} className="p-1 border-b-1 flex gap-2 items-center hover:bg-neutral-900/20 cursor-pointer" key={index}> 
                <Image src={movie?.image} alt={movie.title} width={1920} height={1080} className="w-12 h-12 object-contain"/>
                <p className="text-sm">{movie.title}</p> </Link>
            }):"Loading..."} 

        </div>}
        

        

        </div>
  
  )
}

export default Searchbox

import {abc} from "@/lib/utils";

export default async function Home() {
  //abc().then((res)=>{console.log("Sucess ra "+ res)}).catch((err)=>{console.log("Error ra bunda: ",err)})
  try{
    const res = await abc()
    console.log(res)
  }
  catch{
    console.log("Error")
  }
  return (
    <div>
        
    </div>
  );
}


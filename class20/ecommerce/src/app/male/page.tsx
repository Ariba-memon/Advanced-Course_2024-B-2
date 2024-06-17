
import React from 'react'
import {client} from '../../../sanity/lib/client'
import Image from 'next/image'

async function getData(){
const fetchData = await client.fetch(`*[_type=="product" && category->name=="Male"  ]{
    name,
    "imageUrl": image.asset->url
}`)
return fetchData;
}


export default async function Male(){
  const data = await getData();
    return(
      <>
      <h1 className='text-center'>Male products</h1>
<div className='flex'>
  

    {/* Map */}
    {
      data.map((value:any, index:number) =>{
        return(
            <div className='m-4 flex flex-col'>
            
            
 <Image src={value.imageUrl} width={200}alt="image" height={200}/>
            <h1 key={index} className=''>{value.name}</h1>
            </div>
        )
      })  
    }


</div>
</>
    )
}

// import {client} from "../../../sanity/lib/client"
// import Image from "next/image";

// async function getData(){
//   // const fetchData = await client.fetch(`*[_type=="pet" ]`) 
//   const fetchData = await client.fetch(`*[_type=="product" ]{
//     name,
//     description
//       "imageUrl": image.asset->url
//   }`) ;
//   return fetchData;
// }

// export default async function Home(){
//   const data = await getData();
//   // console.log(data)
//   return(
//     <div className="flex max-h-screen flex-col items-center p-24">
//       <h1>Sanity Data</h1>
//       {
//         data.map((value:any,index:number) =>{
//           return(
//          <>
//          <h1 key={index}>{value.name}</h1>
//          <h1 key={index}>{value.description}</h1>
//          {/* <Image src={value.imageUrl} width={500} height={500} alt="image" /> */}
         
//          </>
//           )
//         })
//       }
//     </div>
//   )
// }


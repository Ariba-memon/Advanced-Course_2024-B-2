
import React from 'react'
import {client} from '../../../sanity/lib/client'
import Image from 'next/image'
//*[_type ==  "products"]
async function getData(){
const fetchData = await client.fetch(`*[_type ==  "product" ]{
  name,
  description
}`)
return fetchData;
}


export default async function Male(){
  const data = await getData();
    return(
<div>
    <h1>Sanity Data</h1>

    {/* Map */}
    {
      data.map((value:any, key:any) =>{
        return(
            <>
            <h1 className='m-4'>{value.name}</h1>
            <h1 >{value.description}</h1>
            {/* <Image src={value.imageUrl} width={200}alt="image" height={200}/> */}
            </>
        )
      })  
    }


</div>
    )
}


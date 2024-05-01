import React, { useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
const Home =() => {
  let [cityName,setCityName] = useState("")
  let [data,setData] = useState([])
   const submitHandler = async (e) =>{
    e.preventDefault()
    console.log("submithandler")
    try{
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=7ec82f8ee9ef6be819ecc8121b544a99`)
      // console.log("response",response) //user ko agar hamay koi cheez nh dekhani ho aur
     setData(response.data.list)
    }catch(error){
    console.log(error)
     }
  
   }
   
  return (
    <div className='min-h-screen'>
      <h1>Weather App</h1>
      <form onSubmit={submitHandler} >
   
        <input className="bg-blue-400 "type='text' onChange={(e) => setCityName(e.target.value)
 }  />
        <button className='bg-blue-500 rounded-full font-serif text-xs'>Get Weather</button>
      </form>
      {
        data.map((eachForcast,index) =>(
          <WeatherCard 
          key={index}
          date={eachForcast.dt_txt}
          temp={eachForcast.main.temp}
          min={eachForcast.main.temp_min}
          
          />
        ))
      }
    </div>
  )
}

export default Home


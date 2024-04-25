import React from 'react'

const Home = () => {
   const submitHandler =(e) =>{
    e.preventDefault()
    console.log("submithandler")
   }

  return (
    <div className='min-h-screen'>
      <h1>Weather App</h1>
      <form onSubmit={submitHandler} >
        <input className="bg-blue-400 "type='text' />
        <button className='bg-blue-500 rounded-full font-serif text-xs'>Get Weather</button>
      </form>
    </div>
  )
}

export default Home


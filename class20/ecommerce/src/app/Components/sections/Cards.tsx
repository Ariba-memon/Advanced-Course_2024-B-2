import React from 'react'

const Cards = () => {
  return (
<><h1 className='text-center font-bold text-3xl  text-navy'>50% Off</h1>
    <div className='m-10  p-10 flex space-x-5'>
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>   <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  </div>
  <div className="join m-10">
  <button className="join-item btn btn-active">1</button>
  <button className="join-item btn ">2</button>
  <button className="join-item btn">3</button>
  <button className="join-item btn">4</button>
</div>

  </>
  )
}

export default Cards
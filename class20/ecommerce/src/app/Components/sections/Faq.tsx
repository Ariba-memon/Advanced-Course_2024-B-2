import React from 'react'

const Faq = () => {
  return (
    <><h1 className='text-center font-bold text-3xl m-4 text-navy'>FAQ'S</h1>
    <div className='m-4'>
        <div className="join join-vertical w-full">
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" defaultChecked /> 
      <div className="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div className="collapse-content"> 
        <p>hello</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" /> 
      <div className="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div className="collapse-content"> 
        <p>hello</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" /> 
      <div className="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div className="collapse-content"> 
        <p>hello</p>
      </div>
    </div>
  </div></div>
  </>
  )
}

export default Faq
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <nav className=' bg-[#151515] text-[#EEEEEE] py-5 px-6 flex flex-wrap justify-between items-center'>
       <Link to='/' className='flex-1 ' >
        {/* <img className='inline sm:h-50 sm:w-120' src={Logo} width={120} height={50} /> */}
        <h2 className='inline text-lg font-semibold'>BlogWebsite</h2>
       </Link>
       <ul className='text-center -mx-5 md:mx-0 order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0'>
        <li className='inline-block mx-5'>
            <Link to = '/'>Home</Link>
        </li>
        <li className='inline-block mx-5'>
            <Link to = '/about'>About</Link>
        </li>
        <li className='inline-block mx-5'>
            <Link to = '/contact'>Contact</Link>
        </li>
        <li className='inline-block mx-5'>
            <Link to = '/articles'>Blogs</Link>
        </li>
        {/* <li className='inline-block mx-5'>
            <Link to = '/read'>ReadBlogs</Link>
        </li> */}
       
       </ul>
      
        </nav>
    </div>
  )
}

export default Navbar
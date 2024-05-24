import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.png'
import Pdf from '../Assets/book.pdf'

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
            <Link to = '/About'>About</Link>
        </li>
        <li className='inline-block mx-5'>
            <Link to = '/Contact'>Contact</Link>
        </li>
        <li className='inline-block mx-5'>
            <Link to = '/Post'>PostYourBlog</Link>
        </li>
        <li className='inline-block mx-5'>
            <Link to = '/Read'>ReadBlogs</Link>
        </li>
       
       </ul>
       <Link to={Pdf} target='blank'>
       <button className='rounded-lg bg-green-700 text-white m-2 p-2 '>
     Download Pdf
       </button>
      </Link>
        </nav>
    </div>
  )
}

export default Navbar
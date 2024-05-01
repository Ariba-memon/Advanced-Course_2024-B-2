import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
        <div className='bg-[#435585] text-[#F5E8C7] p-1 text-sm md:text-base  font-Schibsted justify-center items-center text-center'>
            Unleash the Power of Integration: Discover Our API 
        </div>
      <nav className='bg-[#818FB4] text-[#F5E8C7]  '>
        <div className='max-w-7xl mx-auto flex justify-between'>
     <div className='p-2'>
       <img src={Logo} alt='logo' width={200} height={200} />
     </div>
     <div>
        <ul className='flex space-x-8'>
            <li>
                <Link to='/'>
                <div className='text-white py-5 font-sans hover:text-gray-300 m-2'>
                    Home
                </div>
                </Link>

            </li>
            <li>
                <Link to='/About'>
                <div className='text-white py-5 font-sans hover:text-gray-300 m-2'>
                   About
                </div>
                </Link>

            </li>
            <li>
                <Link to='/contact'>
                <div className='text-white py-5 font-sans hover:text-gray-300 m-2'>
                    Contact
                </div>
                </Link>

            </li>
        </ul>
     </div>
     </div>
      </nav>
      
    </div>
  )
}

export default Navbar

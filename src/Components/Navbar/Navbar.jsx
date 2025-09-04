import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return <>


    <nav className="bg-gray-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">


        <ul className="font-medium justify-between  flex  w-[30%] items-center">
          <Link to="">
            <li className='cursor-pointer text-white p-5 hover:bg-gray-500'>
              Home
            </li></Link>
          <Link to="allemployees">
            <li className='cursor-pointer  text-white p-5 hover:bg-gray-500'>
              All Employees
            </li></Link>
          <li className=' cursor-pointer text-white  p-5 hover:bg-gray-500'>
            Services
          </li>
        </ul>
      </div>
    </nav>


  </>
}

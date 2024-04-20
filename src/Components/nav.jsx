import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png' 


function nav() {
  return (
    <div className=' flex gap-10 mt-5 mx-40 mt-10'>
      <Link to="/" className=' mx-2'>  <img src={logo} alt=" logo " /> </Link> 
       <Link to="/" className='hover:text-red-600 text-xl font-medium'>  Home  </Link>
       <Link to="/"  className='hover:text-red-600 text-xl font-medium'> Exercises </Link>
    </div>
  )
}

export default nav

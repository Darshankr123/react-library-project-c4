import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-emerald-700 flex justify-between items-center h-20 px-10'>
        <h2 className='text-3xl font-bold text-gray-50 tracking-wider capitalize'>welcome </h2>
        <NavLink to='/signup' className='text-xl font-bold tracking-wider text-emerald-200 ring focus:ring-emerald-300 px-4 py-2 rounded-lg bg-emerald-900'>Sign Up</NavLink>
    </div>
  )
}

export default Navbar
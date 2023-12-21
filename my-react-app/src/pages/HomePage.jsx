import React from 'react'
import Login from './Login'
import image from '../assets/images/hero.jpg'

const HomePage = () => {
  return (
    <div className='page-height bg-emerald-100 flex justify-center items-center relative'>
      <div className='page-height absolute top-0 left-0 h-full w-full'>
      </div>
        <Login />
    </div>
  )
}

export default HomePage
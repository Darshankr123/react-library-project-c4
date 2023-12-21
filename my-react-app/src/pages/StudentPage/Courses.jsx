import React, { useEffect } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { customFetch } from '../../utils';



const Courses = ({courseId,courseImage,courseName}) => {

   const navigate = useNavigate();

  return (
    <div className='w-80 bg-lime-300 '>
           <Link to={`/courserDetails/${courseId}`}>
              <img src={courseImage} alt={courseName} className='w-full h-60 object-cover' />
              <p className='text-center text-2xl py-2 font-semibold text-slate-50 bg-emerald-600 rounded-md'>{courseName}</p>
           </Link>

           
    </div>
  )
}

export default Courses
import React, { useEffect, useState } from 'react'
import { customFetch } from '../utils'
import Courses from './StudentPage/Courses';
import { NavLink } from 'react-router-dom';

const Student = () => {

  const [courses,setCourses] = useState([]);



  const getCourses=async()=>{
    const data = await customFetch.get("/GetCourse")
    // console.log(data.data);
    setCourses(data.data);
  }

  useEffect(()=>{
    getCourses()
  },[])

  // console.log(courses);
  return (
    <div className='page-height bg-emerald-200 flex flex-col justify-center items-center'>
        <h2 className='text-2xl mt-4 font-semibold text-slate-700 border-b-4 border-emerald-600 pb-2'>Availabel Courses</h2>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 '  >
        {
          courses.map((course)=>{
            return <Courses key={course.courseId} {...course}/>
          })
        }
        </div>
        <button type='submit' className='bg-lime-400 mt-4 w-30 mx-auto rounded-md font-semibold text-xl px-4 py-1 text-slate-700 capitalize mb-10'  >
          <NavLink to='/'>logout</NavLink></button>
    </div>
  )
}

export default Student
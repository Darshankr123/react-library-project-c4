import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../../utils'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export const loader=async({params})=>{
    const data = await customFetch.get(`/GetCourseById/${params.id}`);
    // console.log(data);
    return {courseName:data.data.courseName,image:data.data.courseImage}
}

const CourseDetails = () => {

    const [CourseDetails,setCourseDetails] = useState([]);
    const {courseName,image} = useLoaderData();
    // console.log(courseName);

    const getCourseContent=async()=>{
        const data = await customFetch.get('/GetCourseLinks')
        // console.log(data.data);
        setCourseDetails(data.data)
    }

    useEffect(()=>{
        getCourseContent();
      },[])

    const filterCourses = CourseDetails.filter((course)=> course.courseName === courseName);

    // console.log(filterCourses);
  
  return (
    <div className='flex flex-col justify-center '>
     <p className='text-3xl font-medium text-center border-b-4 pb-2 border-emerald-500 w-1/2 mx-auto '>{courseName} </p>
      <div className='grid justify-center  grid-cols-1 mx-auto  w-3/5 h-screen mt-8 '>

       {
           filterCourses.map((course)=>{
               const {courseContentId,courseContent} = course
              
               return <div key={courseContentId}>
               <iframe className='w-full h-3/4'
                    src={courseContent}>
                </iframe>
               
                <button type='submit' className='bg-lime-400 mt-4  rounded-md font-semibold text-xl px-4 py-1 text-slate-700 capitalize '  >
                    <Link to='/takeTest'>
                        Take a Test
                    </Link>
                </button>
                
            </div>
        })
    }
    </div>
    </div>
  )
}

export default CourseDetails
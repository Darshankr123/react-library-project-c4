import React, { useEffect, useState } from 'react'
import { customFetch } from '../../utils';

const AddCourseContent = () => {

    const [selectedCourse,setSelectedCourse] = useState('select course');
  
    const [courseData,setCourseData] = useState([]);
    const [courseLink,setCourseLink] = useState("");
  
   
  
    const addCourseContent=async(course,link)=>{
      const data = await customFetch.post("/AddCourseContent",{
        courseName:course,
        courseContent:link
      })
      console.log(data);
    }
  
    const getCourses=async()=>{
      const data = await customFetch.get("/GetCourse")
      // console.log(data);
      setCourseData(data.data)
    }
  
  
    const handleAddContent=(e)=>{
      e.preventDefault();
      addCourseContent(selectedCourse,courseLink)
      // console.log(selectedCourse);
      // console.log(courseLink);
    }
  
    useEffect(()=>{
      getCourses();
    },[])
  
    // console.log(selectedCourse);
  return (
    <div className='flex flex-col justify-center items-center p-4  '>
 
      <div className='mt-6 mx-auto'>
        <h2 className='text-xl font-semibold tracking-wider border-b-4 pb-2'>Select course to add contents</h2>

        <select
         className='text-center bg-lime-200 border-none outline-none p-1 mt-2 text-xl font-semibold text-slate-600 w-full'
        value={selectedCourse} onChange={(e)=>{setSelectedCourse(e.target.value)}}>
          {
            courseData.map((course)=>{

              return <option  key={course.courseId}>
                {course.courseName}
              </option>
            })
          }
        </select>

        
      <form action="" className='mt-6 flex flex-col justify-center  ' onSubmit={handleAddContent}>
        <div className='mt-2'>
          <h4  className='text-xl font-semibold tracking-wider border-b-4 border-lime-500 pb-2  capitalize'>selected course
            <span className='bg-lime-300 ml-40 px-4 rounded-full'> {selectedCourse}</span>
          </h4>

          <div className='mt-2'>

          <label htmlFor="" className='text-xl capitalize tracking-wide mr-4 font-semibold text-slate-800'>add course contents: </label>
          <input type="text" placeholder='add course link' className='p-2 rounded-sm border-none outline-none tracking-wide text-xl' value={courseLink}
          onChange={(e)=>{setCourseLink(e.target.value)}}
          />
          </div>
        </div>
        <button type='submit' className='bg-lime-400 mt-4 w-30 mx-auto rounded-md font-semibold text-xl px-4 py-1 text-slate-700 capitalize'  >submit</button>
      </form>
      </div>
    </div>
  )
}

export default AddCourseContent
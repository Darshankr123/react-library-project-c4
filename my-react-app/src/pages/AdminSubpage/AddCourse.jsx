import React, { useEffect, useState } from 'react'
import { customFetch } from '../../utils';
import { NavLink } from 'react-router-dom';

const AddCourse = () => {
    const [courseName,setCourseName] = useState('');
    const [image,setImage] = useState();

    const addCourse=async(course,image)=>{
        const data = await customFetch.post("/AddCourse",{
            courseName:course,
            courseImage:image
        })
        console.log(data);
        setCourseName("");
       
      }

    const handleAddCourse=(e)=>{
        e.preventDefault();
        addCourse(courseName,image)
     }  

     const handleImage=(e)=>{
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setImage(reader.result)
        }
     }
  return (
    <div className='flex flex-col justify-center items-center p-4  '>
      
      <form action="" className='mt-6 flex flex-col justify-center  ' onSubmit={handleAddCourse}>
        <div>
          <label htmlFor="" className='text-xl capitalize tracking-wide mr-4 font-semibold text-slate-800'>add course : </label>
          <input type="text" placeholder='course name' className='p-2 rounded-sm border-none outline-none tracking-wide text-xl' value={courseName}
          onChange={(e)=>{setCourseName(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="" className='text-xl capitalize tracking-wide mr-4 font-semibold text-slate-800'> course image: </label>
          <input type="file" placeholder='course name' className='p-2 rounded-sm border-none outline-none tracking-wide text-xl' 
          onChange={handleImage}
          />
        </div>
        <button type='submit' className='bg-lime-400 mt-4 w-30 mx-auto rounded-md font-semibold text-xl px-4 py-1 text-slate-700 capitalize'  >submit</button>
      </form>

      <button type='submit' className='bg-lime-400 mt-4 w-30 mx-auto rounded-md font-semibold text-xl px-4 py-1 text-slate-700 capitalize'  >
        <NavLink to='/'>logout</NavLink>
      </button>
    </div>
  )
}

export default AddCourse
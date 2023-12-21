import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';

const SignUpUser = () => {

    const navigate = useNavigate();

    const postStudentData = async(data)=>{
       const newData = await customFetch.post("/AddUser",{...data});
       console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        // console.log(data);
        postStudentData(data);
        // navigate('/');
        toast.success('signed up successfully')
    }
  return (
    <div className='page-height bg-emerald-100 flex justify-center items-center h-full w-full '>
        <form action="" onSubmit={handleSubmit} >
            <div className='flex flex-col justify-center items-start gap-2 mb-2'>
                <label htmlFor="" className='text-xl font-semibold tracking-wide text-emerald-800'>name :</label>
                <input type="text"  className='px-4 py-2 rounded-full text-xl tracking-wide text-emerald-800' placeholder='name' required  name='name' />
            </div>
            <div className='flex flex-col justify-center items-start gap-2 mb-2'>
                <label htmlFor="" className='text-xl font-semibold tracking-wide text-emerald-800'>email :</label>
                <input type="text" className='px-4 py-2 rounded-full text-xl tracking-wide text-emerald-800'  placeholder='email' required name='email' />
            </div>
            <div className='flex flex-col justify-center items-start gap-2 mb-2'>
                <label htmlFor="" className='text-xl font-semibold tracking-wide text-emerald-800'>password :</label>
                <input type="text" className='px-4 py-2 rounded-full text-xl tracking-wide text-emerald-800' placeholder='email' required  name='password'  />
            </div>
            <button className='bg-emerald-500 w-full text-emerald-100 text-xl font-bold tracking-wide py-2 rounded-lg mt-4' type='submit'>sign up</button>
            <button className='bg-emerald-500 w-full text-emerald-100 text-xl font-bold tracking-wide py-2 rounded-lg mt-4' type='submit' >
                <Link to='/'>Back Home</Link>
            </button>
        </form>
    </div>
  )
}

export default SignUpUser
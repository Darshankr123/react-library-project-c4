import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';

const Login = () => {

  const [loginType,setLoginType] = useState('');

  const navigate = useNavigate();

  
  const verifyLogin=async(data)=>{
    try {
      const newData = await customFetch.post("/Login",{...data})
      console.log(newData.data);
  
      if(newData.data === 'student'){
        navigate("/student")
        toast.success("logged in as student")
      }
      else if(newData.data === "admin"){
        navigate("/admin")
        toast.success("logged in as admin")
      }
    } catch (error) {
      // console.log(error.response.status);
      toast.error("please provide a valied mailId or password or type of user")
    }
  
    
  }
 

  const handleClick=(e)=>{

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    verifyLogin({...data,userType:loginType})
  }
  return (

    <div className='absolute opacity-90'>

     <button className='bg-emerald-500 text-gray-50 font-semibold h-10 w-24 tracking-wide capitalize text-xl rounded-xl mr-4 mb-4 hover:bg-emerald-700 transition delay-200' onClick={()=>setLoginType('student')}>student</button>
     <button className='bg-emerald-500 text-gray-50 font-semibold h-10 w-24 tracking-wide capitalize text-xl rounded-xl hover:bg-emerald-700 transition delay-200' onClick={()=>setLoginType('admin')}>admin</button>
   
    <form action="" onSubmit={handleClick}>
        <div className='flex flex-col justify-center items-start mb-2'>
            <label htmlFor="" className='text-xl font-bold capitalize text-emerald-600 mb-2 -tracking-wider bg-slate-100 px-4 rounded-lg'>name : </label>
            <input type="text" className='w-96 py-2 rounded-lg outline-none px-4 ring focus:ring-emerald-600 font-bold tracking-wider ' placeholder='name ' name='name'  autoFocus required/>
        </div>
        <div className='flex flex-col justify-center items-start mb-2'>
            <label htmlFor="" className='text-xl font-bold capitalize text-emerald-800 mb-2 -tracking-wider bg-slate-100 px-4 rounded-lg'>email : </label>
            <input type="email" className='w-96 py-2 rounded-lg outline-none px-4 ring focus:ring-emerald-600 font-bold tracking-wider ' placeholder='email ' name='email' autoFocus required/>
        </div>
        <div className='flex flex-col justify-center items-start mb-2'>
            <label htmlFor="" className='text-xl font-bold capitalize text-emerald-800 mb-2 -tracking-wider bg-slate-100 px-4 rounded-lg'>password : </label>
            <input type="password" className='w-96 py-2 rounded-lg outline-none px-4 ring focus:ring-emerald-600 font-bold tracking-wider' placeholder='password ' name='password' autoFocus required/>
        </div>
        <button className='bg-emerald-600 w-full text-2xl capitalize text-green-50 py-2 rounded-2xl hover:bg-emerald-500 hover:text-gray-200 mt-4 t' type='submit'>submit</button>
    </form>

    </div>
  )
}

export default Login
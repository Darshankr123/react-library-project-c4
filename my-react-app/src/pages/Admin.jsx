
import { NavLink, Outlet } from 'react-router-dom'


const Admin = () => {


  return (
    <div className='flex flex-col justify-center items-center p-4  '>
      <h2 className='text-3xl mt-3 tracking-wider font-semiBold text-slate-700 '>Admin</h2>

      <div className='flex gap-6 mt-2 text-xl text-slate-600 '>

        <NavLink to='' className='focus:border-b-4 border-lime-500'>Add Course</NavLink>
        <NavLink to='courseContent' className='focus:border-b-4 border-lime-500'>Add Course Links</NavLink>
      </div>
        {/* <AddCourse/>
        <AddCourseContent/> */}
        <Outlet/>
    </div>
  )
}

export default Admin
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Student from './pages/Student'
import HomePage from './pages/HomePage'
import Admin from './pages/Admin'
import SignUpUser from './pages/SignUpUser'
import { QueryClient } from 'react-query'
import AddCourse from './pages/AdminSubpage/AddCourse'
import AddCourseContent from './pages/AdminSubpage/AddCourseContent'
import CourseDetails from './pages/StudentPage/CourseDetails'
import { loader as courseLoader } from './pages/StudentPage/CourseDetails'
import TakeATest from './pages/StudentPage/TakeATest'



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'admin',
        element:<Admin/>,
        children:[
          {
            index:true,
            element:<AddCourse/>
          },
          {
            path:"courseContent",
            element:<AddCourseContent/>
          }
        ]
      },
      {
        path:"student",
        element:<Student/>,
        
      },
      {
        path:"signup",
        element:<SignUpUser/>
      },
      
      {
        path:"courserDetails/:id",
        element:<CourseDetails/>,
        loader:courseLoader
      },
      {
        path:"takeTest",
        element:<TakeATest/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
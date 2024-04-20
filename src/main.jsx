import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider } from "react-router-dom"
import Exercise from './pages/Exercise.jsx'
import Home
 from './pages/Home.jsx'
const router = createBrowserRouter( [


  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/exercise/:id',
    element:<Exercise/>
  }
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

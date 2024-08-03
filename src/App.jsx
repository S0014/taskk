import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
    ]
    }
  ])

  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App

import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <>
    <NavBar/>

    {/* in Outlet any childeren route will be render over here */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div className='min-h-screen'><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  )
}

export default Mainlayout

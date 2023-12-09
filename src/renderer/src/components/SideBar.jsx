import React from 'react'
import { Link } from 'react-router-dom'
import {
  GoHome,
  GoGraph,
  GoPerson,
} from "react-icons/go"

const SideBar = () => {
  return (
    <div className='flex flex-col w-40 h-screen items-center justify-center gap-12 shadow'>
      <Link to='/'><GoHome size="2rem" /></Link> 
      <Link to='/graph'><GoGraph size="2rem" /></Link> 
      <Link to='/user'><GoPerson size="2rem" /></Link> 
    </div>
  )
}

export default SideBar
import React from 'react'
import { Link } from 'react-router-dom'
import {
  GoHome,
  GoGraph,
  GoPerson,
} from "react-icons/go"

const SideBar = () => {
  return (
    <div className='flex flex-col bg-secondary w-[9.38rem] h-screen items-center justify-center gap-24 shadow'>
      <Link to='/'><GoHome className='text-primary' size="2rem"/></Link> 
      <Link to='/graph'><GoGraph className='text-primary' size="2rem" /></Link> 
      <Link to='/user'><GoPerson className='text-primary' size="2rem" /></Link> 
    </div>
  )
}

export default SideBar
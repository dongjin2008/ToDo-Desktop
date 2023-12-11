import React from 'react'
import { Link } from 'react-router-dom'
import {
  GoHome,
  GoGraph,
  GoPerson,
} from "react-icons/go"
import NavButton from './NavButton'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-secondary w-[9.38rem] h-screen items-center justify-center gap-24 shadow'>
      <Link to='/'><NavButton><GoHome className='text-primary' size="2rem"/></NavButton></Link> 
      <Link to='/graph'><NavButton><GoGraph className='text-primary' size="2rem"/></NavButton></Link> 
      <Link to='/user'><NavButton><GoPerson className='text-primary' size="2rem"/></NavButton></Link> 
    </div>
  )
}

export default SideBar
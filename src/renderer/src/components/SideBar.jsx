import React from 'react'
import {
  GoHome,
  GoGraph,
  GoPerson,
} from "react-icons/go"

const SideBar = () => {
  return (
    <div className='flex flex-col w-40 h-screen items-center justify-center gap-12 shadow'>
      <GoHome size="2rem" />
      <GoGraph size="2rem" />
      <GoPerson size="2rem" />
    </div>
  )
}

export default SideBar
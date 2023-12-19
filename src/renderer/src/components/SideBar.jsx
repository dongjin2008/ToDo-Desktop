import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GoHome,
  GoGraph,
  GoPerson,
  GoGear,
} from "react-icons/go"
import NavButton from './NavButton'
import supabase from '../apis/db'
import state from '../state/state'
import { useSnapshot } from 'valtio'


const SideBar = () => {
  const snap = useSnapshot(state)
  useEffect(() => {
    checkUser()
  }, [])
  const checkUser = async () => {
    const { data } = await supabase.auth.getUser()
    localStorage.setItem('userId', data['user']['id'])
    if (data['user']) {
      snap.setLoggedIn(true)
    } 
  }

  return (
    <div className='flex flex-col bg-secondary w-[9.38rem] h-screen items-center justify-center gap-24 shadow'>
      <Link to='/'><NavButton><GoHome className='text-primary' size="2rem"/></NavButton></Link> 
      <Link to='/graph'><NavButton><GoGraph className='text-primary' size="2rem"/></NavButton></Link> 
      {snap.loggedIn ? <Link to='/settings'><NavButton><GoGear className='text-primary' size="2rem"/></NavButton></Link> : <Link to='/user'><NavButton><GoPerson className='text-primary' size="2rem"/></NavButton></Link>}
    </div>
  )
}

export default SideBar
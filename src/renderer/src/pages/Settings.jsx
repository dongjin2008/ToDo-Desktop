import React, { useEffect, useState } from 'react'
import supabase from '../apis/db'
import { Link } from 'react-router-dom'
import state from '../state/state'
import { useSnapshot } from 'valtio'

const Settings = () => {
  const snap = useSnapshot(state)
  const [username, setUsername] = useState("")
  
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const { data } = await supabase.auth.getUser()
    setUsername(data['user']['user_metadata']['name'])
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    snap.setLoggedIn(false)
    if (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Hello {username}</h1>
      <Link to='/user'> 
        <button onClick={() => {signOut()}}>sign out</button>
      </Link>    
    </div>
  )
}

export default Settings
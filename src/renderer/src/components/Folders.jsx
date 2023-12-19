import React, { useState, useEffect } from 'react'
import { IconButton } from '.'
import { GoArrowRight, GoPlus } from "react-icons/go"
import supabase from '../apis/db'
import Folder from './Folder'
import state from '../state/state'
import { useSnapshot } from 'valtio'


const Folders = () => {
  const snap = useSnapshot(state)
  const [folders, setFolders] = useState([])

  useEffect(() => {
    snap.getFolders()
  }, [])

  const handleChange = async (e, id) => {
    snap.setFolders(snap.folders.map((folder) => folder.id === id ? { ...folder, name: e.target.value } : folder))
  }


  
  return (
    <div className='flex flex-col gap-4 w-[20.5rem] h-[32.5rem] rounded-lg'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[1.562rem] font-semibold text-secondary'>Folder</h1>
        <IconButton onClick={() => snap.createFolder()}>
          <GoPlus className='text-secondary' size="2rem" />
        </IconButton>
      </div> 
      <div className='flex flex-col h-[20rem] gap-4 scrollbar-gutter overflow-x-clip overflow-y-scroll'>
        {snap.folders.map((folder) => {
          return (
            <Folder key={folder.id} folder={folder} handleChange={handleChange} /> 
          )
        })} 
      </div>
    </div>
  )
}

export default Folders
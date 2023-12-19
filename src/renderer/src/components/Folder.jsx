import React, { useEffect, useState } from 'react'
import IconButton from './IconButton'
import { GoArrowRight } from "react-icons/go"
import state from '../state/state'
import { useSnapshot } from 'valtio'


const Folder = ({ folder }) => {
  const [name, setName] = useState(folder.name)
  const snap = useSnapshot(state)
  const handleClick = () => {
    snap.setFolderId(folder.id)
  }

  useEffect(() => {
    console.log(name)
    snap.updateFolder(folder, name)
  }, [name])
  return (
    <div className='flex w-[19rem] h-[6rem] items-center bg-secondary rounded-lg py-[1.31rem] px-6'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col gap-0'>
          <input type='text' onChange={(e) => {setName(e.target.value)}}  className='w-[11.5rem] text-[1.562rem] bg-secondary font-semibold text-primary' value={name} />
          <h1 className='text-base font-light text-primary'>10 todos left</h1>
        </div>
        <div className='flex items-center'>
          <IconButton onClick={() => {handleClick()}}>
            <GoArrowRight className='text-primary' size="2rem" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Folder

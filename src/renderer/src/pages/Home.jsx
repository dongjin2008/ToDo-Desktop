import React from 'react'
import { useState, useEffect } from 'react'
import supabase from '../apis/db'
import IconButton from '../components/IconButton'
import {
  GoPlus,
} from "react-icons/go"

const Home = () => {
  const [dates, setDates] = useState([])
  const handleClick = async () => {
    // supabase insert example
    const { error } = await supabase
      .from('users')
      .insert([
        { name: 'test1', email: 'stpuid@stupid.com', password: '123456' },
      ])
    console.log(error)
  }

  return (
    <main className='w-screen h-screen px-[8.06rem] py-[3.75rem]'>
      <div className='w-full h-full flex gap-6'>
        <div className='w-[42.5rem] h-full bg-secondary rounded-lg px-6 py-[1.56rem]'>
          <div className='flex justify-between'>
            <h1 className='text-primary font-semibold text-[1.938rem]'>Study Todos 👨‍🎓</h1>
            <IconButton>
              <GoPlus className='text-primary opactiy-100' size="2rem" />
            </IconButton>
          </div>
        </div>
        <div className='w-[20.5rem] h-full bg-accent rounded-lg'>

        </div>
      </div>
    </main>
  )
}

export default Home
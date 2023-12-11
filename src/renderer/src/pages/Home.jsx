import { useState } from 'react'
import supabase from '../apis/db'
import IconButton from '../components/IconButton'
import {
  GoCheck,
  GoPlus,
  GoTrash,
} from "react-icons/go"

const Home = () => {
  const createTodo = async () => {
    // supabase insert example
    const { error } = await supabase
      .from('todos')
      .insert([
        { task: 'test1', isDone: 'stpuid@stupid.com', folder: '123456' },
      ])
    console.log(error)
  }

  return (
    <main className="w-screen h-screen px-[8.06rem] py-[3.75rem]">
      <div className="w-full h-full flex gap-6">
        <div className="w-[42.5rem] h-full bg-secondary rounded-lg p-6">
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between'>
              <h1 className='text-primary font-semibold text-[1.938rem]'>Study Todos 👨‍🎓</h1>
              <IconButton onClick={() => {console.log("Clicked")}}>
                <GoPlus className='text-primary' size="2rem" />
              </IconButton>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center w-[39.5rem] h-[6.5rem] bg-primary rounded-lg px-8'>
                <div className='flex w-full items-center justify-between'>
                  <h1 className='font-semibold text-[1.938rem] '>Finish math homework</h1>
                  <IconButton>
                    <GoCheck className='text-secondary' size="2rem" />  
                  </IconButton>
                  <IconButton>
                    <GoTrash className='text-secondary' size="2rem" />  
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-[20.5rem] h-full bg-accent rounded-lg'>

        </div>
      </div>
    </main>
  )
}

export default Home
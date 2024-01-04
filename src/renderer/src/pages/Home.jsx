import { useEffect, useState } from 'react'
import supabase from '../apis/db'
import { IconButton, Folder } from '../components'
import {
  GoArrowRight,
  GoCheck,
  GoPlus,
  GoTrash,
} from "react-icons/go"
import state from '../state/state'
import { useSnapshot } from 'valtio'
import Todo from '../components/Todo'

const Home = () => {
  const snap = useSnapshot(state)

  useEffect(() => {
    snap.getTodos()
    snap.getDailyGoal()
    snap.updateTodo()
    snap.getFirstFolderId()
  }, [])
  
  useEffect(() => {
    snap.updateDailyGoal()
  }, [snap.dailyGoal])

  return (
    <main className="w-screen h-screen px-[8.06rem] py-[3.75rem]">
      <div className="w-full h-full flex gap-6">
        <div className="w-[42.5rem] h-full bg-secondary rounded-lg p-6">
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between'>
              <h1 className='text-primary font-semibold text-[1.938rem]'>{snap.name}</h1>
              <IconButton onClick={() => {snap.deleteFolder()}}>
                <GoTrash className='text-primary' size="2rem" />
              </IconButton>
              <IconButton onClick={() => {snap.createTodo()}}>
                <GoPlus className='text-primary' size="2rem" />
              </IconButton>
            </div>
            <div className='flex flex-col gap-4'>
              {snap.todos.map((todo) => {
                return (
                  <Todo key={todo.id} todo={todo} />
                )
              })}
            </div>
          </div>

        </div>
        <div className='flex flex-col w-[20.5rem] gap-6 h-full rounded-lg'>
          <Folder />
          <div className='flex flex-col items-center w-[20.5rem] h-[22.5rem] py-4 px-6 bg-secondary rounded-lg gap-[0.63rem]'>
            <h1 className='text-[1.562rem] text-primary font-semibold'>Daily Goal 🥅</h1>
            <textarea className='w-full h-full resize-none text-base text-primary font-light bg-secondary placeholder:text-base placeholder:text-primary placeholder:font-light placeholder:text-left' onChange={(e) => {snap.setDailyGoal(e.target.value)}} value={snap.dailyGoal} placeholder='Enter your daily goal...' type="text" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
import React, {useEffect, useState} from 'react'
import IconButton from './IconButton'
import { GoCheck, GoTrash } from "react-icons/go"
import supabase from '../apis/db'
import state from '../state/state'
import { useSnapshot } from 'valtio'

const Todo = ({todo}) => {
  const snap = useSnapshot(state)
  const [taskName, setTaskName] = useState(todo.task)
  const [done, setDone] = useState(todo.isDone)
  useEffect(() => {
    setDone(todo.isDone)
  }, [todo.isDone])
  useEffect(() => {
    console.log(taskName)
    console.log(todo.task)
    handleChange()
  }, [taskName])
  const handleChange = async () => {
    const { error } = await supabase
      .from('todos')
      .update({ task: taskName })
      .eq('id', todo.id)
    snap.getTodos()
  }
  return (
    <div className='flex items-center w-[39.5rem] h-[6.5rem] bg-primary rounded-lg px-8'>
      <div className='flex w-full items-center justify-between'>
        <input className={done ? 'font-semibold text-accent line-through text-[1.938rem]' : 'font-semibold text-secondary text-[1.938rem]' } onChange={(e) => {setTaskName(e.target.value)}} value={taskName} />
        <IconButton onClick={() => {snap.handleCheck(todo)}}>
          <GoCheck className='text-secondary' size="2rem" />  
        </IconButton>
        <IconButton onClick={() => {snap.deleteTodo(todo)}}>
          <GoTrash className='text-secondary' size="2rem" />  
        </IconButton>
      </div>
    </div>
  )
}

export default Todo
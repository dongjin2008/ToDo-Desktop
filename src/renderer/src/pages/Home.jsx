import React from 'react'
import { useState, useEffect } from 'react'
import supabase from '../apis/db'

const Home = () => {
  const [dates, setDates] = useState([])
  useEffect(() => {
    updateDates()
  }, [])
  const handleClick = async () => {
    // supabase insert example
    const { error } = await supabase
      .from('users')
      .insert([
        { name: 'test1', email: 'stpuid@stupid.com', password: '123456' },
      ])
    console.log(error)
  }
  const updateDates = () => {
    let date = new Date()
    let newDates = [];

    for (let i = 0; i < 7; i++) {
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`
      }

      let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      newDates.push(`${day}/${dayOfWeek}`)
      date.setDate(date.getDate() + 1)
    }

    setDates(newDates)
  }

  return (
    <main className='w-full h-full'>
      <h1 className='text-center'>Home</h1>
      <ul className='text-center'>
        {dates.map((date, index) => {
          return (
            <li key={index}>{date}</li>
          )
        })}
      </ul>
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

export default Home
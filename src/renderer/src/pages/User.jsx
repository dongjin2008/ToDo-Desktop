import React from 'react'
import google from '../assets/google.svg' 
import github from '../assets/github.svg'
import supabase from '../apis/db'

const User = () => {

  const signInWithGoogle = async () => {
    // supabase google login
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/settings'
      }
    })
  }

  const signInWithGithub = async () => {
    // supabase github login
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:5173/settings'
      }
    })
  }
  return (
    <main className='w-full h-full px-[8.06rem] py-[3.75rem]'>
      <div className='flex w-full h-full bg-secondary rounded-lg justify-center items-center'>
        <div className='flex gap-3'>
          <button>
            <img className='w-8 h-8' onClick={() => {signInWithGoogle()}} src={google} alt="google" />
          </button>
          <button>
            <img className='w-8 h-8' onClick={() => {signInWithGithub()}} src={github} alt="github" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default User
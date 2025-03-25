import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1574853792871-8a8d2f4df893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRyYWZmaWMlMjAlMjBzaWduYWx8ZW58MHx8MHx8fDA%3D)] w-full h-screen flex justify-between flex-col'>
        <img className='w-28 ml-3 mt-3 h-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'></img>
        <div className=' bg-white py-3 px-8 '>
          <h1 className='text-3xl font-bold flex items-center justify-center'>Get started with Uber</h1>
          <Link
            to='/login'
            className='group font-bold flex items-center justify-center w-full bg-black hover:bg-slate-800  transition-all duration-300 text-white rounded px-2 py-1 mt-4 text-2xl cursor-pointer'
          >
            Continue
            <div className="ml-4">
              <img
                className='h-10 transition-transform duration-300 group-hover:translate-x-2'
                src='https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-image-png-14.png'
                alt='Arrow'
              />
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Start

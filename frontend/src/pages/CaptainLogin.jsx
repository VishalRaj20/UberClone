import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[userData, setUserData] = useState({})

  const SubmitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
  }

  return (
    <div className='px-7 py-4 h-screen flex flex-col justify-between '>
      <div >
        <img className='w-24 h-24 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg'></img>
        <form >

          <h3 className='text-xl mb-2'>What's your Email</h3>
          <input className='bg-[#eeeeee] w-full py-2 px-2 rounded placeholder:text-sm mb-6'
           type='email' 
           required
           placeholder='name@example.com'
           value={email}
           onChange={(e) => {
            setEmail(e.target.value)
           }} />
          <h3 className='text-xl mb-2'>What's your password</h3>
          <input className='bg-[#eeeeee] w-full py-2 px-2 rounded placeholder:text-sm mb-8' 
          type='password' 
          required
          placeholder='Password'
          value={password}
          onChange={(e) => {
           setPassword(e.target.value)
          }} />
          <button onClick={(e) => {SubmitHandler(e)}} className='bg-black text-white text-lg w-full py-2 rounded mb-2'>
            Login
          </button>
          <p className='flex justify-center text-lg'>Join as fleet? <Link to={'/captain-signup'} className='text-blue-700 underline ml-2'>Register as a Captain</Link></p>
        </form>
      </div>
      <div>
        <Link to={'/Login'} className=' flex items-center justify-center bg-[#00BF83] text-white px-2 py-2 mb-6 rounded w-full text-lg'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin

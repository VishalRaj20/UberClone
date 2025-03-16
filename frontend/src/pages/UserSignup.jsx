import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const SubmitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div >
        <img className='w-18 h-7 mb-7' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'></img>
        <form >
          <h3 className='text-xl mb-2'>What's your name</h3>
          <div className='flex gap-4'>
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-6'
              type='text'
              required
              placeholder='First Name'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-6'
              type='text'
              placeholder='Last Name'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>
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
          <button onClick={(e) => { SubmitHandler(e) }} className='bg-black text-white text-lg w-full py-2 rounded mb-2'>
            Login
          </button>
          <p className='flex justify-center text-lg'>Already have Account? <Link to={'/login'} className='text-blue-700 underline ml-2'>Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup

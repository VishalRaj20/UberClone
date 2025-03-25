import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserLogin = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigate = useNavigate()
  const { user, setUser } = React.useContext(UserDataContext)

  const SubmitHandler = async(e) => {
    e.preventDefault();

    const UserData = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, UserData)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div >
        <img className='w-18 h-7 mb-7' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'></img>
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
          <p className='flex justify-center text-lg'>New here? <Link to={'/signup'} className='text-blue-700 hover:underline ml-2'>Create New Account</Link></p>
        </form>
      </div>
      <div>
        <Link to={'/captain-login'} className=' flex items-center justify-center bg-amber-500 text-white px-2 py-2 mb-6 rounded w-full text-lg'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin

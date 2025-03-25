import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainSignup = () => {

  const Navigate = useNavigate()
  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')

  const SubmitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      Navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleType('')
    setVehicleCapacity('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div >
        <img className='w-20 h-20' src='https://www.svgrepo.com/show/505031/uber-driver.svg'></img>
        <form >
          <h3 className='text-xl mb-2'>What's our Captain's name</h3>
          <div className='flex gap-4'>
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-3'
              type='text'
              required
              placeholder='First Name'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-3'
              type='text'
              placeholder='Last Name'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>
          <h3 className='text-xl mb-2'>What's our Captain's Email</h3>
          <input className='bg-[#eeeeee] w-full py-2 px-2 rounded placeholder:text-sm mb-3'
            type='email'
            required
            placeholder='name@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
          <h3 className='text-xl mb-2'>What's your password</h3>
          <input className='bg-[#eeeeee] w-full py-2 px-2 rounded placeholder:text-sm mb-3'
            type='password'
            required
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} />

          <h3 className='text-xl mb-2'>Vehicle Details</h3>
          <div className='flex gap-4'>
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-4'
              type='text'
              required
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-4'
              type='text'
              required
              placeholder='Vehicle Plate Number'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className='flex gap-4'>
            <input className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-4'
              type='number'
              required
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select className='bg-[#eeeeee] w-1/2 py-2 px-2 rounded placeholder:text-sm mb-4'
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button onClick={(e) => { SubmitHandler(e) }} className='bg-black text-white text-lg w-full py-2 rounded mb-2'>
            Create Captain Account
          </button>
          <p className='flex justify-center text-lg'>Already have Account? <Link to={'/captain-login'} className='text-blue-700 underline ml-2'>Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup

import React,{useRef, useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();    
  }

  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])

  return (
    <div>
      <img className='w-18 absolute h-7 mt-3 ml-3' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="home" />
      <div className='h-screen flex flex-col justify-center items-center'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="home" />
      </div>
      <div className='h-screen absolute flex flex-col justify-end top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='absolute opacity-0 top-2 right-3 text-3xl'><i className="ri-arrow-down-wide-line"></i></h4>
          <h3 className='text-2xl font-bold'>Find a trip</h3>
          <form onSubmit={(e) =>{
            submitHandler(e);
          }}>
            <div className='line absolute h-16 w-1 bg-black left-10 top-[36%] rounded-full'></div>
            <input 
            onClick={()=>setPanelOpen(true)}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className='bg-[#eee] px-10 py-2 mt-3 w-full rounded-lg' 
            type='text' 
            placeholder='Enter your pickup location' 
            />
            <input 
            onClick={()=>setPanelOpen(true)}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className='bg-[#eee] px-10 py-2 mt-3 w-full rounded-lg' 
            type='text' 
            placeholder='Enter your destination' 
            />
          </form>
        </div>
        <div  ref={panelRef} className='h-[70%] p-5'>

        </div>
      </div>


    </div>
  )
}

export default Home

import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

function Banner() {
  const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      <div className='md:w-1/2 flex-1  items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Create account</button>
      </div>
      <div className='hidden md:block md:w-1/2 lg:w-[-370] relative'>
        <img className='w-full h-full absolute bottom-0 right-0 max-w-md' src={assets.PointDoc} alt="" />
      </div>
    </div>
  )
}

export default Banner
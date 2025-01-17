import React, { useContext } from 'react'
// import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function TopDoctors() {

  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16  text-gray-900 md:mx-10' >
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Explore our comprehensive list of trusted healthcare professionals.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {doctors.slice(0,10).map((item,index)=>(
              <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-green-700 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-green-100' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2  text-center text-green-700 text-sm'>
                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500':'bg-red-500'} rounded-full`}></p><p className={`${item.available?'text-green-500':'text-red-500'}`}>{item.available? 'Available':'Not Available'}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
          ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-green-100 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors
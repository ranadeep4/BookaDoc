import React from 'react'
import { useContext , useMemo } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'

function Allappointments() {



const {aToken, appointments,getAllAppointments,cancelAppointment} = useContext(AdminContext)
const {calculateAge , slotDateFormat,currencySymbol} = useContext(AppContext)


// const trackedAppointments = appointments.map((item) => item.userData.dob);

  // Effect to calculate age based on appointments
  // useEffect(() => {
  //   appointments.forEach((item) => {
  //     calculateAge(item.userData.dob);
  //   });
  // }, [trackedAppointments]); // Track only DOBs to minimize dependency changes

useEffect(()=>{
  if(aToken){
    getAllAppointments()
  }
 
},[aToken])


// const appointmentsWithAge = useMemo(() => {
//   return appointments.map((item) => ({
//     ...item,
//   }));
// }, [appointments, calculateAge]);


  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border-rounded text-sm max-h-[80vh] overflow-y-scroll min-h-[60vh]'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date</p>
          <p>Time</p>
          <p>Doctor</p>
          <p>Fee</p>
          <p>Actions</p>
        </div>
        {appointments.map((item,index)=>(
          <div className=' flex flex-wrap  justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 hover:bg-gray-100 border-b' key={index} >
            <p className='max-sm:hidden'>{index+1}</p>
            <div className='flex items-center gap-2'>
              <img className='w-8 rounded-full ' src={item.userData.image} alt="" /><p>{item.userData.name}</p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)},{item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img className='w-8 rounded-full bg-green-200' src={item.docData.image} alt="" /><p>{item.docData.name}</p>
            </div>
            <p>{currencySymbol}{item.docData.fees}</p>
            {
            item.cancelled
            ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>: item.isCompleted? <p className='text-green-500 text-xs font-medium'>Completed</p> : <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Allappointments
import React from 'react'
import {assets} from '../assets/assets_frontend/assets';

function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-green-600 font-bold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[320px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-green-500'>
          <p>At BookaDoc, we are committed to simplifying healthcare access by connecting patients with trusted doctors effortlessly. Our platform bridges the gap between healthcare providers and patients, ensuring quick, convenient, and reliable appointment booking experiences.</p>
          <b className='text-green-700'>What We Do</b>
          <p>We provide a seamless online platform for scheduling doctor appointments, managing consultations, and accessing healthcare services from verified professionals. At BookaDoc, we prioritize your health by making the process simple, transparent, and efficient.</p>
          <b className='text-green-700'>Our Vision</b>
          <p>Our vision is to revolutionize healthcare accessibility by empowering individuals to make informed healthcare decisions. BookaDoc strives to create a world where quality healthcare is just a click away, ensuring every patient receives timely care with ease.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-green-600 font-bold'>CHOOSE US?</span> </p>

      </div>
      <div  className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white transition-all duration-300 text-green-600 font-medium cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white transition-all duration-300 text-green-600 font-medium cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of a trusted healthcae professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white transition-all duration-300 text-green-600 font-medium cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
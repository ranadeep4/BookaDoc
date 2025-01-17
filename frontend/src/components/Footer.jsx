import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <div className='md:mx:10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div className='mx-7'>
                <div className='flex mb-5 w-40'>
                    <img  className='w-44 h-auto' src={assets.BookaDoc} alt="" />
                    {/* <img className='w-24 h-auto' src={assets.Bookadocname} alt="" /> */}
                </div>
                <p className='w-full md:w-3/4 text-gray-600 leading-6'>At BookaDoc, we connect patients with trusted healthcare professionals through a seamless booking experience. Our user-friendly platform ensures easy appointment scheduling, reliable medical information, and timely healthcare services. Your health is our priority, and we’re committed to making quality care accessible to all.</p>
            </div>
            {/* center section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-123-456-7890</li>
                    <li>bookadoc@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* copyright text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>&copy;2025 <strong>BookaDoc</strong> - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
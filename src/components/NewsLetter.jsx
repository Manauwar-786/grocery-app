import React from 'react'
import { LuMailOpen } from "react-icons/lu";

function NewsLetter() {
  return (
    <div className='bg-emerald-600 mt-16 '>
        <div className='container py-8  md:flex-row gap-4 text-white 5'>
            <div className='flex gap-4'>
            <LuMailOpen className='text-[60px]' />
            </div>
            <h3 className=' text-xl sm:text-2xl font-semibold'>sign up to our NewsLetters</h3>
            <p>...and receive $20 coupon for first shoppnig</p>
        </div>

        <div className='w-full max-w-[300px] relative text-white bg-emerald-800 rounded-full '>
            <input className='py-3 px-6 w-full rounded-full text-white ' 
            type='text' placeholder='enter you email address'>
            </input>
            <button className='bg-emerald-800 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-emerald-500'>Sbscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter

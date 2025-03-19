import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
    return (
        <div className=' container pt-8'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-8'>
                <div className='relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]'>
                    <img src='/Images/hero1.png' alt='photo'></img>
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] sm:space-y4">
                        <p className='text-2xl hidden sm:block'>100% Original Dry Fruits</p>
                        <h2 className=''>Dried Fruits Best Quality</h2>
                        <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At</p>
                        <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>$18.36</div>
                        <div className='bg-green-700 hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py3 cursor-pointer flex '>Shop Now <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="w-fill h-fill object-cover rounded-lg" src='Images/hero2.png' alt='hero img'></img>
                    <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[10%] -tranlate-y-[50%] sm:space-y-2'>
                        <h2 className='text-2xl sm:text-3xl font-bold'>Best Yummy Pizza</h2>
                        <p className='text-gray-500 text-xl pt-4'>Starting At</p>
                        <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8'>&25</div>
                        <div className='bg-green-700 hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py3 cursor-pointer flex '>Shop Now <BsArrowRight /></div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="w-fill h-fill object-cover rounded-lg" src='Images/hero3.png' alt='hero img'></img>
                    <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[10%] -tranlate-y-[50%] sm:space-y-2'>
                        <h2 className='text-2xl sm:text-3xl font-bold'>Best Yummy Chips</h2>
                        <p className='text-gray-500 text-xl pt-4'>Starting At</p>
                        <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8'>&10</div>
                        <div className='bg-green-700 hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py3 cursor-pointer flex '>Shop Now <BsArrowRight /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

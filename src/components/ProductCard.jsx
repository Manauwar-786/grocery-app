import React from 'react'
import { FcRating } from "react-icons/fc";
import { IoStarHalfOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

function ProductCard({name,img,price}) {
  return (
    <div className='border border-gray-200 hover:border-gray-300 hover:scale-105 transform rounded-lg relative'>
      <img src={img} alt={name} ></img>
      <div className='space-y-2 relative p-4'>
        <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
{/* <AiFillStar/>
<AiFillStar/>
<AiFillStar/>
<AiFillStar/>
<AiOutlineStar/> */}
<FcRating />
<FcRating /> 
<FcRating />
 <IoStarHalfOutline /> <IoStarHalfOutline />
        </div>
        <h3 className='font-medium'>{name}</h3>
        <h3 className='text-2xl font-medium text-red-600'>{price}</h3>
        <div className='absolute -top-4 right-2 bg-emerald-700 text-white tex-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer'>
        <MdOutlineShoppingBag />

            {/* <AiOutlineShopping/> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard

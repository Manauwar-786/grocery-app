import React from 'react'
import ProductCard from './ProductCard'

const FeaturesBreakfastSec = () => {

    const data=[
        { id:0, img:"Images/product5.png", name:"Fresh Tomato",Price:"$400"},
        { id:1, img:"Images/product2.png", name:"Crunchy Crispy",Price:"$300"},
        { id:2, img:"Images/product3.png", name:"Jwel Cranberries",Price:"$200"},
        { id:3, img:"Images/product4.png", name:"Almond Organic",Price:"$100"},

        ]
  return (
    <div className='container pt-16'>
        <div className="lg:flex justify-center items-center">
<div className='pr-135 '>
    <h3 className='font-medium text-2xl'>Breakfast & Dairy</h3>
    <p className='text-gray-600 mt-2'>Buy the Breakfast online from big-basket stop near you!</p>
</div>
<div className='space-x-4 mt-8 lg:mt-0'>
<button className='feature_btn'>Eggs & Dairy</button>
<button className='text-gray-600 hover:text-emerald-700 '>Pizza</button>
<button className='text-gray-600 hover:text-emerald-700 '>Snacks</button>
    </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <div >
                <img className=' w-full h-full object-cover' src='/Images/feature2.png' alt='banner'></img>
            </div>
            {data.map((el) =>
            <ProductCard 
            key={el.id} 
            img={el.img} 
            name={el.name}
            price={el.Price}
            />
            )}
        </div>
    </div>
  )
}

export default FeaturesBreakfastSec 


// import React from 'react'

// const Category = () => {
//   return (
// <div className='container pt-16'>
//     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'></div>

//     </div>
//   )
// }

// export default Category

import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const data = [
    {
      id: 0,
      name: "Fresh Fruits",
      count: "9 Products",
      img: "/Images/category1.png",
    },
    {
      id: 1,
      name: "Fresh Veg",
      count: "8 Products",
      img: "/Images/category2.png",
    },
    {
      id: 2,
      name: "Canned Goods",
      count: "10 Products",
      img: "/Images/category3.png",
    },
    {
      id: 3,
      name: "Bread & bakery",
      count: "12 Products",
      img: "/Images/category4.png",
    },
    {
      id: 4,
      name: "Fishes",
      count: "10 Products",
      img: "/Images/category5.png",
    },
    {
      id: 5,
      name: "Egg & Dairy",
      count: "7Products",
      img: "/Images/category6.png",
    },
    {
      id: 6,
      name: "Soft Drinks",
      count: "9 Products",
      img: "/Images/category7.png",
    },
    {
      id: 7,
      name: "Fresh Fruits",
      count: "9 Products",
      img: "/Images/category1.png",
    },
  ];

  return (
    <div className="container pt-16 px-8">
      <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "Images/post1.png",
    tittle: "Healthy Food &  Healthy Life",
    date: "8 jan 2025",
    comments: "8",
  },
  {
    img: "Images/post2.png",
    tittle: "Healthy Food &  Healthy Life",
    date: "15 jan 2025",
    comments: "12",
  },
  {
    img: "Images/post3.png",
    tittle: "Healthy Food &  Healthy Life",
    date: "25 jan 2025",
    comments: "18",
  },
];
function BlogSection() {
  return (
    <div className="container pt-16 px-8">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present post in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            tittle={el.tittle}
            date={el.date}
            comment={el.comments}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;

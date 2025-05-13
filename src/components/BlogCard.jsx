import React from "react";

function BlogCard({ img, tittle, comments, date }) {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      ></img>
      <div className="text-emerald-600 font-medium">
        <span>{date}</span>
        <span>{comments}</span>
      </div>
      <h3 className="font-bold text-xl">{tittle}</h3>
    </div>
  );
}

export default BlogCard;

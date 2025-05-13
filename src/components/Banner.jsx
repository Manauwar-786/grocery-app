import React from "react";

function Banner() {
  return (
    <div className="container pt-16 px-8">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="/Images/banner1.png"
            alt="banner1"
          ></img>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="/Images/banner2.png"
            alt="banner2"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;

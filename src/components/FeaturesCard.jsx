import React from "react";

function FeaturesCard({ title, icon, para }) {
  return (
    <div className="flex items-center gap-4 ">
      <div className="bg-gray-300 w-[50%] h-[50%] text-emerald-600 tex-[24px] grid place-items-center rounded-full">
        {icon}
      </div>
      <h3 className="text-emerald-700 font-medium text-xl">{title}</h3>
      <p className="text-gray-500 text-[14px]">{para}</p>
    </div>
  );
}

export default FeaturesCard;

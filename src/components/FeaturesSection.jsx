import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeaturesCard from "./FeaturesCard";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
    para: "Free shipping lets customers choose products based on their preferences, rather than just shipping costs.",
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveAltSolid />,
    para: "Our Best Price Guarantee means that you can be sure of booking at the best rate",
  },
  {
    title: "Free Curbside pickup",
    icon: <LiaGiftSolid />,
    para: "Bulky and Special Load Collections are available for household items too large for regular curbside collection ",
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
    para: "Customers are happy when they can get help whenever they need it.",
  },
];

function FeaturesSection() {
  return (
    <div className="container pt-16 px-8">
      <div className="grid gap-4 md:grid-col lg:grid-cols-4">
        {data.map((el) => (
          <FeaturesCard
            key={el.title}
            title={el.title}
            icon={el.icon}
            para={el.para}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;

import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card2 = () => {
  return (
    <div className="card2 bg-[#1A1C1D] p-8 rounded-md">
      <div className="top flex flex-col items-start justify-between gap-8">
        <h1 className="text-[1.4rem] font-semibold">INDEPENDENT DESIGNERS</h1>
        <div className="bottom flex items-center justify-between gap-8">
          <p className="text-[#9d9c9c] text-[1rem]">
            Our platform celebrates the ingenuity of independent designers,
            offering a diverse range of fashion-forward garments that reflect
            the creatively and innovation of the artists behind them. Explore
            carfted collections showcasing unique creations by independent
            desginers.
          </p>
          <div className="btn2 flex items-center gap-2 cursor-pointer">
            <h1>EXPLORE</h1>
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;

import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  return (
    <div className="card p-8 bg-[#1A1C1D]  w-[24%] rounded-md flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">INDEPENDENCY</h1>
      <p className="text-[1.1rem] text-[#9d9c9c]">
        Explore the creativity of independent designers from around the globe.
      </p>
      <div className="cardbtn flex items-center gap-2  cursor-pointer">
        <h1>LEARN MORE</h1>
        <ArrowUpRight />
      </div>
    </div>
  );
};

export default Card;

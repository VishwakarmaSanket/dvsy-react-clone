import React from "react";
import FashionImage from "../assets/images/FashionImage.png";
import { CircleArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="Hero flex flex-col justify-center items-center ">
      <img src={FashionImage} alt="img" />
      <h1 className="absolute top-[56%] left-[10%] text-[8vw] font-light">
        DESIGN
      </h1>
      <h1 className="absolute top-[74%] left-[24%] text-[8vw] font-light">
        & FREEDOM
      </h1>
      <div className="Hbottom absolute bottom-[-28%] left-[10%] flex flex-col">
        <div className="Hbottom_content w-[70vw] flex items-center justify-between ">
          <p className="text-2xl">
            Explore independent styler by embracing uniqueness
          </p>
          <div className="btn flex items-center gap-2 cursor-pointer">
            <h1 className="text-2xl">Learn More</h1>
            <h1>
              <CircleArrowDown />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import img1 from "../assets/images/Fashion-themed image.png";

const Section2 = () => {
  return (
    <div className="section1 flex items-center justify-between gap-4 w-full p-4">
      <div className="left w-[50%] bg-[#1A1C1D] p-12 flex flex-col items-start justify-between gap-14">
        <h1 className="text-2xl font-semibold">ABOUT</h1>
        <div className="top flex flex-col gap-8">
          <h1 className="text-4xl font-normal">WHERE FASHION MEETS FREEDOM</h1>
          <div className="bottom flex items-center justify-between">
            <p className="text-[#9d9c9c]">
              We belive that fashion should be an expression of individuality.
              We encourage creativity and originality in every times we offer,
              presenting customers with exclusive collections from independent
              designer. With a commitment to fosering a community of creativity
              and innovation.
            </p>
            <p className="text-[#9d9c9c]">
              We stand to connect designers with fashion emthesists who
              appreciate the activity and individuality behind each piece.
              Driven by our dedication to authentic. We create each collection
              with a keen eye for unique designs that inspire confidence and
              self-expression.
            </p>
          </div>
        </div>
      </div>
      <div className="right w-[50%] rounded-md">
        <img src={img1} alt="" className="rounded-md" />
      </div>
    </div>
  );
};

export default Section2;

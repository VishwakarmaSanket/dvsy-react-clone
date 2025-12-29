import React from "react";
import Card2 from "./Card2";

const Cards2 = () => {
  return (
    <div className="section3 flex flex-row-reverse items-centre justify-between gap-4 w-full p-4">
      <div className="left w-[50%] flex flex-col items-start justify-between gap-2">
        <Card2 />
        <Card2 />
      </div>
      <div className="right w-[50%] rounded-md">
        <img
          src="src\assets\images\Urban fashion-themed.png"
          alt="img"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Cards2;

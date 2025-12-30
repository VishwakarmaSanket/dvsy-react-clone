import React from "react";
import Card2 from "./Card2";
import img3 from "../assets/images/varied dress forms.png";

const Cards2 = () => {
  return (
    <div className="section3 flex items-centre justify-between gap-4 w-full p-4">
      <div className="left w-[50%] flex flex-col items-start justify-between gap-2">
        <Card2 />
        <Card2 />
      </div>
      <div className="right w-[50%] rounded-md">
        <img src={img3} alt="img" className="rounded-md" />
      </div>
    </div>
  );
};

export default Cards2;

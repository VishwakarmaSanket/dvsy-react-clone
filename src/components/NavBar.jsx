import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-[#111] text-white">
      <h1 className="text-3xl font-medium text-[MontserratB]">DVSY</h1>
      <div className="nav_left flex items-center gap-4">
        <button className="secondary">Designer</button>
        <button className="secondary">Collabs</button>
        <button className="secondary">Events</button>
        <button className="secondary">Blog</button>
        <button className="secondary">Card</button>
        <button className="primary">GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default NavBar;

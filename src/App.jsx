import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Values from "./components/Values";
import Section2 from "./components/Section2";
import Cards2 from "./components/Cards2";
import Cards3 from "./components/Cards3";

const App = () => {
  return (
    <div className="h-screenflex flex-col items-center bg-[#111]">
      <NavBar />
      <Hero />
      <Cards />
      <Values />
      <Section2 />
      <h1 className="p-4 text-[3rem]">OUR ADVANTAGES</h1>
      <Cards2 />
      <Cards3 />
    </div>
  );
};

export default App;

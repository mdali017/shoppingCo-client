import React from "react";
import Category from "./Category/Category";
import SliderPart from "./SliderPart/SliderPart";

const HeroSection = () => {
  return (
    <div className="container mx-auto w-full md:flex py-10 md:gap-9">
      <div className="category w-3/12 md:min-h-[500px] border">
        <Category />
      </div>
      <div className="slider md:w-9/12 ">
        <SliderPart />
      </div>
    </div>
  );
};

export default HeroSection;

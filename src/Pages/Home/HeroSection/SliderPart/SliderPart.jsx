import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

const SliderPart = () => {
  return (
    <div className="h-[500px]">
      <div className="top_slider h-1/2">
        <Slider />
      </div>
      <div className="banner h-1/2">
        <Banner />
      </div>
    </div>
  );
};

export default SliderPart;

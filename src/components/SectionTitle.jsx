import React from "react";

const SectionTitle = ({ category_title }) => {
  return (
    <div className="my-32 text-center">
      <h2 className="text-3xl font-semibold">{category_title}</h2>
      <button className="underline">Show More</button>
    </div>
  );
};

export default SectionTitle;

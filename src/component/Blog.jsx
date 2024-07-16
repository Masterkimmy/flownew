import React from "react";
import img from "../../src/Image (12).png"
import img2 from "../../src/Image (11).png"
import img3 from "../../src/Image (13).png"
import img4 from "../../src/Ellipse 1 (1).png"
import img5 from "../../src/Image (14).png"
import img6 from "../../src/Ellipse 1 (2).png"

const Blog = () => {
  return (
    <div className="flex justify-around gap-24 h-[100vh] items-center max-sm:flex-col max-sm:gap-4 max-sm:h-[70vh]">
      <div className="flex flex-col gap-80 max-sm:gap-6 max-sm:items-center max-sm:justify-center  ">
        <div className="flex flex-col gap-4 max-sm:items-center">
          <h1 className="font-semibold text-[40px] w-[24vw] max-sm:w-[67vw] max-sm:text-center">
            Learn more from our blog
          </h1>
          <p className="text-gray-300 font-semibold w-[32vw] max-sm:w-[82vw] max-sm:text-center ">
            Our team boasts top green energy experts, driving innovation in
            sustainability.
          </p>
        </div>
        <button className="font-bold border border-black rounded-[30vw] w-[8vw] h-10 max-sm:w-[35vw]">
          See all
        </button>
      </div>
      <div className="flex flex-col gap-16 max-sm:gap-6">
        <div className="flex gap-4 items-center max-sm:flex-col">
          <img className="h-[20vh]" src={img} alt="" />
          <div className="max-sm:flex max-sm:flex-col gap-4">
            <h1 className="font-semibold w-[36vw] text-[30px] max-sm:w-[82vw] max-sm:text-center">
              Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
            </h1>
            <div className="flex items-center gap-2 max-sm:justify-center">
              <img className="h-[5vh]" src={img2} alt="" />
              <h3 className="font-medium">Wade Warren . 7 min read</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center max-sm:flex-col">
          <img className="h-[20vh]" src={img3} alt="" />
          <div className="max-sm:flex max-sm:flex-col gap-4">
            <h1 className="font-semibold w-[36vw] text-[30px] max-sm:w-[82vw] max-sm:text-center">
              From Trash to Treasure: The Promising World of Biomass Energy
            </h1>
            <div className="flex items-center gap-2 max-sm:justify-center">
              <img src={img4} alt="" />
              <h3 className="font-medium">Jenny Wilson . 12 min read</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center max-sm:flex-col">
          <img className="h-[20vh]" src={img5} alt="" />
          <div className="max-sm:flex max-sm:flex-col gap-4">
            <h1 className="font-semibold w-[36vw] text-[30px] max-sm:w-[77vw] max-sm:text-center">
              Hydrogen: Fueling the Green Energy Revolution
            </h1>
            <div className="flex items-center gap-2 max-sm:justify-center">
              <img src={img6} alt="" />
              <h3 className="font-medium">Leslie Alexander . 5 min read</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog ;

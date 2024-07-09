import React from "react";
import img from "../../src/Image (12).png"
import img2 from "../../src/Image (11).png"
import img3 from "../../src/Image (13).png"
import img4 from "../../src/Ellipse 1 (1).png"
import img5 from "../../src/Image (14).png"
import img6 from "../../src/Ellipse 1 (2).png"

const Blog = () => {
  return (
    <div className="flex justify-around gap-24 h-[100vh] items-center">
      <div className="flex flex-col gap-80">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[40px] w-[24vw]">
            Learn more from our blog
          </h1>
          <p className="text-gray-300 font-semibold w-[32vw] ">
            Our team boasts top green energy experts, driving innovation in
            sustainability.
          </p>
        </div>
        <button className="font-semibold border border-black rounded-[30vw] w-[8vw] h-10">
          See all
        </button>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex gap-4 items-center">
          <img className="h-[20vh]" src={img} alt="" />
          <div>
            <h1 className="font-semibold w-[36vw] text-[30px]">
              Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
            </h1>
            <div className="flex items-center gap-2">
              <img className="h-[5vh]" src={img2} alt="" />
              <h3 className="font-medium">Wade Warren . 7 min read</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img className="h-[20vh]" src={img3} alt="" />
          <div>
            <h1 className="font-semibold w-[36vw] text-[30px]">
              From Trash to Treasure: The Promising World of Biomass Energy
            </h1>
            <div className="flex items-center gap-2">
              <img src={img4} alt="" />
              <h3 className="font-medium">Jenny Wilson . 12 min read</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img className="h-[20vh]" src={img5} alt="" />
          <div>
            <h1 className="font-semibold w-[36vw] text-[30px]">
              Hydrogen: Fueling the Green Energy Revolution
            </h1>
            <div className="flex items-center gap-2">
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

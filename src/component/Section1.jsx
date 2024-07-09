import React from 'react'
import img from "../../src/Image (14).png"
import img2 from "../../src/Dot.png"
import img3 from "../../src/Rectangle 2689.png"
import img4 from "../../src/Image (1).png"
import img5 from "../../src/Image.png"
import img6 from "../../src/Logo (2).png"
import img7 from "../../src//Logo.png"

const Section1 = () => {
  return (
    <div className="bg-green-900">
      <div className="flex items-center justify-around pt-12">
        <img className="h-[40vh]" src={img} alt="" />
        <div className="flex flex-col items-center justify-center gap-[15px]">
          <div className="flex gap-[6px] items-center">
            <img className="bg-green-400 h-[2vh]rounded" src={img2} alt="" />
            <h3 className="text-white ">Powering Tomorrow</h3>
          </div>
          <h1 className="text-[40px] font-bold text-white w-[20vw]">
            The Future Of Green Energy
          </h1>
          <p className="text-white w-[37vw]">
            Our commitment to green energy is paving the way for a cleaner,
            healthier planet. Join us on a journey towards a future where clean,
            renewable energy sources transform the way we power our lives.
          </p>
          <div className="flex gap-[20px]">
            <button className="bg-green-500 w-[11vw] rounded-full h-8 font-semibold">
              See Our Solution
            </button>
            <button className=" border w-[9vw] rounded-full h-8 font-semibold">
              Get In touch
            </button>
          </div>
        </div>
        <img className="h-[30vh] relative bottom-16" src={img3} alt="" />
      </div>
      <div className="pt-10 flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-[20%]">
          <img className="h-[20vh] relative top-8" src={img4} alt="" />
          <img className="h-[30vh]" src={img5} alt="" />
        </div>
        <h3 className="text-white font-semibold w-[28vw] text-[35px] text-center">
          Global partners that trusted us
        </h3>
        <div className=" flex  items-center gap-[10px] pb-12 ">
          <div className="bg-gray-500 w-60 h-10 flex items-center justify-center rounded">
            <img className="w-28" src={img7} alt="" />
          </div>
          <div className="bg-gray-500 w-60 h-10 flex items-center justify-center rounded">
            <img className="w-28" src={img6} alt="" />
          </div>
          <div className="bg-gray-500 w-60 h-10 flex items-center justify-center rounded">
            <img className="w-28" src={img7} alt="" />
          </div>
          <div className="bg-gray-500 w-60 h-10 flex items-center justify-center rounded">
            <img className="w-28" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1

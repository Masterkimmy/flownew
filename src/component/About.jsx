import React from 'react'
import img from "../../src/Image (3).png"
import img2 from "../../src/Image (4).png"
import img8 from "../../src/Image (5).png"
import img7 from "../../src/Image (8).png";
import img6 from "../../src/Image (7).png";
import img5 from "../../src/Image (6).png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-24 pt-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="font-bold text-[40px]">About Us</h3>
        <p className="font-medium w-[40vw]">
          At Flow, we're committed to a sustainable future. As a pioneering
          force in the green energy sector, we've been at the forefront of the
          transition to clean, renewable power sources. Our mission is simple
          yet profound: to create a world where energy is not only abundant but
          also environmentally responsible. We believe that by harnessing the
          power of nature, we can power the world and protect it simultaneously.
        </p>
        <button className="font-medium border rounded-full border-black w-[10vw] h-8 ">
          Read More
        </button>
      </div>
      <div className="flex items-center justify-center flex-col gap-24 pb-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[35px]">Meet our experts</h1>
          <p className="font-medium text-gray-500">
            Our team boasts top green energy experts, driving innovation in
            sustainability.
          </p>
        </div>
        <div className="flex gap-32 items-center justify-center pr-10 ">
          <div className="flex flex-col gap-3 items-center justify-center">
            <img className="h-[15vh]" src={img} alt="" />
            <div className='flex flex-col items-center'>
              <h3 className="font-medium">Jenny Wilson</h3>
              <p className="text-gray-500 ">
                Senior Sustainability Consultant
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <img className="h-[15vh]" src={img2} alt="" />
            <div className='flex flex-col items-center'>
              <h3 className="font-medium">Cameron Williamson</h3>
              <p className="text-gray-500 ">
                Senior Sustainability Consultant
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <img className="h-[15vh]" src={img8} alt="" />
            <div>
              <h3 className="font-medium">Courtney Henry</h3>
              <p className="text-gray-500">Energy Analysts</p>
            </div>
          </div>
        </div>
        <div className="flex gap-32 items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <img className="h-[15vh]" src={img7} alt="" />
            <div className='flex flex-col items-center'>
              <h3 className="font-medium">Dianne Russell</h3>
              <p className="text-gray-500">
                Senior Renewable Energy Engineer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <img className="h-[15vh]" src={img6} alt="" />
            <div className='flex flex-col items-center'>
              <h3 className="font-medium">Brooklyn Simmons</h3>
              <p className="text-gray-500">
                Renewable Energy Engineer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <img className="h-[15vh]" src={img5} alt="" />
            <div className='flex flex-col items-center'>
              <h3 className="font-medium">Jerome Bell</h3>
              <p className="text-gray-500 ">
                Renewable Energy Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About

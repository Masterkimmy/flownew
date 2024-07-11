import React from 'react'
import img from "../../src/Dot.png"

const section2 = () => {
  return (
    <div className="flex flext-col items-center justify-center h-[100vh] max-sm:h-[115vh] max-sm:bg-pink-100 ">
      <div className=" bg-pink-100 w-[80vw] h-[90vh] flex flex-col items-center justify-center rounded-lg  gap-16 max-sm:gap-4 ">
        <div className="flex gap-[7px] border-b-2 border-gray-400 items-center py-4 w-[70vw]">
          <img className="h-[2vh]" src={img} alt="" />
          <h3 className="font-semibold">About Us</h3>
        </div>
        <div className="flex  gap-32 max-sm:flex-col max-sm:gap-7">
          <div className="flex flex-col gap-5 max-sm:gap-3">
            <h1 className="font-bold w-[25vw] text-[40px] max-sm:w-[87vw] text-center">
              Committed to a sustainable future
            </h1>
            <p className="text-gray-500 font-medium w-[40vw] max-sm:w-[87vw] text-center">
              As a pioneering force in the green energy sector, we've been at
              the forefront of the transition to clean, renewable power sources.
              Our mission is simple yet profound: to create a world where energy
              is not only abundant but also environmentally responsible. We
              believe that by harnessing the power of nature, we can power the
              world and protect it simultaneously.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-sm:items-center justify-center">
            <div className="max-sm:text-center">
              <h1 className="font-semibold text-[30px]">5,000 Mwh</h1>
              <p className="text-gray-500 font-medium">
                Renewable Energy Generated
              </p>
            </div>
            <div className="max-sm:text-center">
              <h1 className="font-semibold text-[30px]">2,500+</h1>
              <p className="text-gray-500 font-medium">
                Metric Tons of CO2 Reduced
              </p>
            </div>
            <div className="max-sm:text-center">
              <h1 className="font-semibold text-[30px]">10,000+</h1>
              <p className="text-gray-500 font-medium">Customers Served</p>
            </div>
            <div className="max-sm:text-center">
              <h1 className="font-semibold text-[30px]">15%</h1>
              <p className="text-gray-500 font-medium">Avg. Energy Saved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section2

import React from 'react'
import img from "../../src/Image (2).png"

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-white gap-[60px] max-sm:flex-col max-sm:gap-[20px] max-sm:h-[125vh]'>
      <div className='flex flex-col gap-[16px] max-sm:items-center justify-center max-sm:gap-[10px]'>
        <h3 className="font-medium w-[24vw] max-sm:w-[66vw] max-sm:text-center">
          Our commitment to green energy is paving the way for a cleaner,
          healthier planet.
        </h3>
        <h1 className="text-gray-400 text-[35px]">EV charging</h1>
        <h1 className="font-medium text-[35px] border-b-2 border-gray-700 w-[18vw] max-sm:w-full max-sm:flex items-center max-sm:justify-center">Solar Energy</h1>
        <p className="text-gray-400 w-[31vw] max-sm:w-[74vw] max-sm:text-center">
          Solar panels convert sunlight into electricity. Photovoltaic (PV)
          cells on these panels capture the energy from the sun and convert it
          into electrical power.
        </p>
        <p className="font-bold">Learn More</p>
        <h3 className="text-gray-400 text-[35px]">Wind Energy</h3>
        <h3 className="text-gray-400 text-[35px]">Hydropower</h3>
      </div>
      <img className='h-[73vh] max-sm:h-[50vh]' src={img} alt="" />
    </div>
  );
}

export default Hero

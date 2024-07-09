import React from 'react'
import img from "../../src/Image (2).png"

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-white gap-[60px]'>
      <div className='flex flex-col gap-[16px]'>
        <h3 className="font-medium w-[24vw]">
          Our commitment to green energy is paving the way for a cleaner,
          healthier planet.
        </h3>
        <h1 className="text-gray-400 text-[35px]">EV charging</h1>
        <h1 className="font-medium text-[35px] border-b-2 border-gray-700 w-[18vw]">Solar Energy</h1>
        <p className="text-gray-400 w-[31vw]">
          Solar panels convert sunlight into electricity. Photovoltaic (PV)
          cells on these panels capture the energy from the sun and convert it
          into electrical power.
        </p>
        <p className="font-medium">Learn More</p>
        <h3 className="text-gray-400 text-[35px]">Wind Energy</h3>
        <h3 className="text-gray-400 text-[35px]">Hydropower</h3>
      </div>
      <img className='h-[73vh]' src={img} alt="" />
    </div>
  );
}

export default Hero

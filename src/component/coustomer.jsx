import React from 'react'
import img from "../../src/Dot (1).png"
import img2 from "../../src/Image (10).png"
import img3 from "../../src/Image (9).png"
import img4 from "../../src/Image (11).png"

const coustomer = () => {
  return (
    <div>
      <div className="bg-green-950 h-[100vh] flex flex-col items-center justify-center gap-10 max-sm:h-[150vh] max-sm:gap-4">
        <div className="flex gap-2 items-center border-b-2 border-gray-500 w-[64vw] pl-7 py-4">
          <img className="h-3" src={img} alt="" />
          <h1 className="text-white font-semibold">Testimonials</h1>
        </div>
        <h1 className="text-white font-bold text-[40px] pr-[31vw] max-sm:pr-0 max-sm:w-[77vw] max-sm:text-center">
          What our customers say
        </h1>
        <div className="flex gap-[2vw] border-b-2 border-white py-10 max-sm:flex-col max-sm:gap-4 max-sm:py-6">
          <div className="bg-green-500 flex flex-col items-center justify-center w-[20vw]  h-[37vh]  gap-[80px] p-5 rounded-xl max-sm:w-[70vw]">
            <h3 className="font-semibold w-[15vw] max-sm:w-[55vw]">
              “Flow transformed my energy use. Efficient, green tech,
              outstanding service!”
            </h3>
            <div className="flex items-start gap-4">
              <img className="h-10" src={img2} alt="" />
              <div>
                <h3 className="font-medium">Jenny Wilson</h3>
                <h3 className="font-medium">Solar energy service</h3>
              </div>
            </div>
          </div>
          <div className="bg-green-500 flex flex-col  justify-center w-[20vw]  h-[37vh]  gap-[80px] p-10 rounded-xl max-sm:w-[70vw]">
            <h3 className="font-semibold w-[15vw] max-sm:w-[55vw]">
              “Flow redefined my energy game – green, efficient, and top-notch
              service!”
            </h3>
            <div className="flex items-center gap-4">
              <img className="h-10" src={img3} alt="" />
              <div>
                <h3 className="font-medium">Dianne Russell</h3>
                <h3 className="font-medium">EV service</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-green-500 flex flex-col  justify-center w-[20vw]  h-[37vh]  gap-[58px] p-8 rounded-xl max-sm:w-[70vw]">
              <h3 className="font-semibold w-[15vw] max-sm:w-[55vw]">
                “Thanks to Flow, my energy is now solar-powered – sustainable,
                efficient, and exceptional service.”
              </h3>
              <div className="flex items-center gap-4">
                <img className="h-10" src={img4} alt="" />
                <div>
                  <h3 className="font-medium">Cody Fisher</h3>
                  <h3 className="font-medium">Solar energy service</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white h-[60vh] flex flex-col items-center justify-center gap-5 max-sm:h-[40vh]'>
        <h1 className='font-bold text-[40px] w-[40vw] max-sm:w-[92vw] max-sm:text-center'>
          Our commitment to green energy is paving the way for a cleaner,
          healthier planet.
        </h1>
        <button className='bg-green-950 rounded-2xl border-none text-white w-[8vw] h-8 max-sm:w-[40vw]'>Get in touch</button>
      </div>
    </div>
  );
}

export default coustomer

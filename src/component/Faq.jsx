import React from 'react'
import img from "../../src/Dot (1).png"
import img2 from "../../src/Tail icon.png"

const Faq = () => {
  return (
    <div className=" h-[130vh] flex flex-col items-center justify-center gap-7 max-sm:h-[175vh] max-sm:gap-0 ">
      <div className="bg-pink-100 w-[95vw] rounded-xl flex flex-col gap-7">
        <div className="flex gap-2 items-center border-b-2 py-4 pl-5">
          <img className="h-3" src={img} alt="" />
          <h3 className="font-semibold">Faq</h3>
        </div>
        <div className="flex items-center justify-center gap-44  max-sm:flex-col max-sm:gap-6">
          <div className="flex flex-col gap-[30vw] pb-10 max-sm:items-center justify-center max-sm:gap-[5vw] max-sm:pb-2 ">
            <h1 className="font-bold text-[40px] w-[24vw] max-sm:w-[86vw] max-sm:text-center  max-sm:text-[30px]">
              Answers to the frequently asked questions.
            </h1>
            <div className="flex  items-center gap-1 border border-black rounded-2xl w-[10vw] justify-center h-10 max-sm:w-[53vw]">
              <button className="font-medium">Contact Us</button>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 max-sm:items-center max-sm:justify-center max-sm:gap-6">
            <div className="flex flex-col gap-2 max-sm:items-center max-sm:justify-center">
              <h3 className="font-bold">What is green energy?</h3>
              <p className="text-gray-400 font-medium w-[46vw] max-sm:w-[82vw] max-sm:text-center">
                Green energy, also known as renewable energy, is derived from
                natural sources that are replenished on a human timescale. This
                includes solar, wind, hydro, geothermal, and biomass energy,
                among others.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-sm:items-center justify-center">
              <h3 className="font-bold max-sm:w-[66vw] max-sm:text-center">
                How does green energy benefit the environment?
              </h3>
              <p className="text-gray-400 font-medium w-[45vw] max-sm:w-[82vw] max-sm:text-center">
                Green energy reduces the reliance on fossil fuels, lowering
                greenhouse gas emissions and mitigating climate change. It also
                helps conserve natural resources and promotes a cleaner,
                sustainable future.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-sm: items-center justify-center">
              <h3 className="font-bold md:pr-56 max-sm:w-[56vw]  max-sm:text-center">
                What green energy solutions does your company offer?
              </h3>
              <p className="text-gray-400 font-medium w-[46vw] max-sm:w-[82vw] max-sm:text-center">
                We provide a range of green energy solutions, including solar
                power systems, wind turbines, energy-efficient appliances, and
                smart home technologies to enhance energy sustainability.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-sm:items-center justify-center">
              <h3 className="font-bold w-[38vw] max-sm:w-[76vw] max-sm:text-center">
                What support services do you offer after installing green energy
                solutions?
              </h3>
              <p className="text-gray-400 font-medium w-[44vw] max-sm:w-[82vw] max-sm:text-center">
                We offer ongoing maintenance, monitoring, and support services
                to ensure the optimal performance and longevity of your green
                energy system. Our team is ready to assist with any issues that
                may arise.
              </p>
            </div>
            <div className="flex flex-col gap-2 pb-10 max-sm:items-center max-sm:justify-center">
              <h3 className="font-bold">How do solar panels work?</h3>
              <p className="text-gray-400 font-medium w-[44vw] max-sm:w-[82vw] max-sm:text-center ">
                Solar panels convert sunlight into electricity through
                photovoltaic cells. These cells generate direct current (DC),
                which is then converted into usable alternating current (AC) for
                household or commercial use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq

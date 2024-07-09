import React from 'react'
import img from "../../src/Dot (1).png"
import img2 from "../../src/Tail icon.png"

const Faq = () => {
  return (
    <div className=" h-[130vh] flex flex-col items-center justify-center gap-7 ">
      <div className="bg-pink-100 w-[95vw] rounded-xl flex flex-col gap-7">
        <div className="flex gap-2 items-center border-b-2 py-4 pl-5">
          <img className="h-3" src={img} alt="" />
          <h3 className="font-semibold">Faq</h3>
        </div>
        <div className="flex items-center justify-center gap-44 ">
          <div className="flex flex-col gap-[30vw] pb-10">
            <h1 className="font-bold text-[40px] w-[24vw]">
              Answers to the frequently asked questions.
            </h1>
            <div className="flex  items-center gap-1 border border-black rounded-2xl w-[10vw] justify-center h-10">
              <button className="font-medium">Contact Us</button>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">What is green energy?</h3>
              <p className="text-gray-400 font-medium w-[46vw]">
                Green energy, also known as renewable energy, is derived from
                natural sources that are replenished on a human timescale. This
                includes solar, wind, hydro, geothermal, and biomass energy,
                among others.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                How does green energy benefit the environment?
              </h3>
              <p className="text-gray-400 font-medium w-[45vw]">
                Green energy reduces the reliance on fossil fuels, lowering
                greenhouse gas emissions and mitigating climate change. It also
                helps conserve natural resources and promotes a cleaner,
                sustainable future.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                What green energy solutions does your company offer?
              </h3>
              <p className="text-gray-400 font-medium w-[46vw]">
                We provide a range of green energy solutions, including solar
                power systems, wind turbines, energy-efficient appliances, and
                smart home technologies to enhance energy sustainability.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold w-[38vw]">
                What support services do you offer after installing green energy
                solutions?
              </h3>
              <p className="text-gray-400 font-medium w-[44vw]">
                We offer ongoing maintenance, monitoring, and support services
                to ensure the optimal performance and longevity of your green
                energy system. Our team is ready to assist with any issues that
                may arise.
              </p>
            </div>
            <div className="flex flex-col gap-2 pb-10">
              <h3 className="font-bold">How do solar panels work?</h3>
              <p className="text-gray-400 font-medium w-[44vw] ">
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

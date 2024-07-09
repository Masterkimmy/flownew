import React from 'react'

const Faq2 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 h-[190vh]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-[40px]">FAQ</h1>
        <h3 className="font-medium text-gray-400">
          Here you will find the answers to the frequently asked questions.
        </h3>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3  border-t-2 border-yellow-200 py-7">
          <h3 className="font-bold">What is green energy?</h3>
          <p className="text-gray-500 w-[48vw]">
            Green energy, also known as renewable energy, is derived from
            natural sources that are replenished on a human timescale. This
            includes solar, wind, hydro, geothermal, and biomass energy, among
            others.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t-2 border-yellow-200 py-7">
          <h3 className="font-bold">
            How does green energy benefit the environment?
          </h3>
          <p className="text-gray-500 w-[48vw]">
            Green energy reduces the reliance on fossil fuels, lowering
            greenhouse gas emissions and mitigating climate change. It also
            helps conserve natural resources and promotes a cleaner, sustainable
            future.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t-2 border-yellow-200 py-7">
          <h3 className="font-bold">
            What green energy solutions does your company offer?
          </h3>
          <p className="text-gray-400 w-[48vw]">
            We provide a range of green energy solutions, including solar power
            systems, wind turbines, energy-efficient appliances, and smart home
            technologies to enhance energy sustainability.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t-2 border-yellow-200 py-7">
          <h3 className="font-bold">
            What support services do you offer after installing green energy
            solutions?
          </h3>
          <p className="text-gray-400 w-[48vw]">
            We offer ongoing maintenance, monitoring, and support services to
            ensure the optimal performance and longevity of your green energy
            system. Our team is ready to assist with any issues that may arise.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t-2 border-yellow-200 py-5">
          <h3 className="font-bold">How do solar panels work?</h3>
          <p className="text-gray-400 w-[48vw]">
            Solar panels convert sunlight into electricity through photovoltaic
            cells. These cells generate direct current (DC), which is then
            converted into usable alternating current (AC) for household or
            commercial use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq2

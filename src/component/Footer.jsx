import React from 'react'
import img from "../../src/Photo.png"
import img2 from "../../src/Brand Logo.png"
import img3 from "../../src/Icon (1).png"
import img4 from "../../src/Icon (2).png"
import img5 from "../../src/Icon (3).png"

const Footer = () => {

  return (
    <div className="bg-green-950 h-[150vh] pl-[10vw] flex flex-col justify-center gap-24 max-sm:h-[190vh] max-sm:pl-0 max-sm:gap-8 ">
      <div className='flex flex-col gap-24 pb-[15vw] max-sm:pb-0 max-sm:gap-10'>
        <div className="flex justify-cnter items-center gap-56 max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col gap-10 max-sm:gap-4">
            <div className="flex flex-col gap-4 max-sm:items-center max-sm:justify-center">
              <h1 className="font-bold text-[40px] w-[32vw] text-white max-sm:w-[88vw] max-sm:text-[30px] max-sm:text-center">
                Your Source for Green Energy Updates
              </h1>
              <p className="text-gray-400 w-[40vw] max-sm:w-[82vw] max-sm:text-center">
                Stay in the loop with our Green Horizon newsletter, where we
                deliver bite-sized insights into the latest green energy
                solutions.
              </p>
            </div>
            <div className="flex  gap-4 max-sm:flex-col max-sm:items-center max-sm:justify-center">
              <input
                className="rounded-[30vw] h-12 w-64 pl-4"
                type="text"
                placeholder="Your Email..."
              />
              <button className="font-bold bg-lime-400 w-[10vw] h-12 rounded-[30vw] max-sm:w-[50vw]">
                Get in touch
              </button>
            </div>
          </div>
          <img className="h-[50vh] max-sm:h-[20vh]" src={img} alt="" />
        </div>
        <div className="flex gap-28 max-sm:flex-col max-sm:items-center max-sm:gap-8">
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="flex gap-28 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-8 ">
            <div className="flex flex-col gap-2 text-white max-sm:items-center">
              <p className="font-medium">Platform</p>
              <p>Solutions</p>
              <p>How it works</p>
              <p>Pricing</p>
            </div>
            <div className="flex flex-col gap-2 text-white max-sm:items-center">
              <p className="font-medium">Company</p>
              <p>About</p>
              <p>Our Mission</p>
              <p>
                Careers{" "}
                <span className="bg-lime-500 text-black rounded-lg  font-medium">
                  Hiring
                </span>
              </p>
              <p>Contact</p>
            </div>
            <div className="flex flex-col gap-2 text-white max-sm:items-center">
              <p className="font-medium">Resources</p>
              <p>Blog</p>
              <p>Help Center</p>
              <p>Support</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex bg-gray-400 gap-6 items-center w-[20vw] pl-1 h-[8vh] rounded-[10vw] max-sm:w-[65vw]">
                <img src={img3} alt="" />
                <p>Follow us on Facebook</p>
              </div>
              <div className="flex bg-gray-400 gap-6 items-center w-[20vw] pl-1 h-[8vh] rounded-[10vw] max-sm:w-[65vw]">
                <img src={img4} alt="" />
                <p>Follow us on Instagram</p>
              </div>
              <div className="flex bg-gray-400 gap-6 items-center w-[20vw] pl-1 h-[8vh] rounded-[10vw] max-sm:w-[65vw]">
                <img src={img5} alt="" />
                <p>Follow us on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pl-[63vw] text-white max-sm:pl-20">© 2024 Flow. All rights reserved.</p>
    </div>
  );
}

export default Footer

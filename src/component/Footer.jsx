import React from 'react'
import img from "../../src/Photo.png"
import img2 from "../../src/Brand Logo.png"
import img3 from "../../src/Icon (1).png"
import img4 from "../../src/Icon (2).png"
import img5 from "../../src/Icon (3).png"

const Footer = () => {

  return (
    <div className="bg-green-950 h-[150vh] pl-[10vw] flex flex-col justify-center gap-24 ">
      <div className='flex flex-col gap-24 pb-[15vw]'>
        <div className="flex justify-cnter items-center gap-56">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[40px] w-[32vw] text-white">
                Your Source for Green Energy Updates
              </h1>
              <p className="text-gray-400 w-[40vw]">
                Stay in the loop with our Green Horizon newsletter, where we
                deliver bite-sized insights into the latest green energy
                solutions.
              </p>
            </div>
            <div className="flex  gap-4">
              <input
                className="rounded-[30vw] h-12 w-64 pl-4"
                type="text"
                placeholder="your e-email..."
              />
              <button className="font-semibold bg-lime-400 w-[10vw] h-12 rounded-[30vw]">
                Get in touch
              </button>
            </div>
          </div>
          <img className="h-[50vh]" src={img} alt="" />
        </div>
        <div className="flex gap-28">
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="flex gap-28 ">
            <div className="flex flex-col gap-2 text-white">
              <p className="font-medium">Platform</p>
              <p>Solutions</p>
              <p>How it works</p>
              <p>Pricing</p>
            </div>
            <div className="flex flex-col gap-2 text-white">
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
            <div className="flex flex-col gap-2 text-white">
              <p className="font-medium">Resources</p>
              <p>Blog</p>
              <p>Help Center</p>
              <p>Support</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex bg-gray-400 gap-6 items-center w-[20vw] pl-1 h-[8vh] rounded-[10vw]">
                <img src={img3} alt="" />
                <p>Follow us on Facebook</p>
              </div>
              <div className="flex bg-gray-400 gap-6 items-center w-[20vw] pl-1 h-[8vh] rounded-[10vw]">
                <img src={img4} alt="" />
                <p>Follow us on Instagram</p>
              </div>
              <div className="flex bg-gray-400 gap-6 items-center w-[20vw] pl-1 h-[8vh] rounded-[10vw]">
                <img src={img5} alt="" />
                <p>Follow us on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pl-[63vw] text-white">© 2024 Flow. All rights reserved.</p>
    </div>
  );
}

export default Footer

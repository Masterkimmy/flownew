import React, { useState } from 'react'
import img from "../../src/Brand Logo.png"
import { FaOutdent } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const[Nav,setNav]=useState(false)
  function handleToggle(){
    setNav(!Nav)

  }
  return (
    <div className="flex justify-around bg-green-900 h-20 items-center">
      <div className="flex gap-[40vw]">
        <div className="flex gap-[35px]">
          <img src={img} alt="" />
          <div className="flex gap-[15px] text-white items-center justify-center max-sm:hidden">
            <h3>About</h3>
            <h3>Team</h3>
            <h3>Solution</h3>
            <h3>Blog</h3>
          </div>
        </div>
        <button className="text-white border rounded-full w-[8vw] h-10 font-semibold max-sm:hidden">  Get In touch  </button>
        <button  onClick={handleToggle}  className="hidden pl-20 mt-2 max-sm:flex" > {Nav ? <FaOutdent /> : <IoMdClose />}  </button>
      </div>
      <div
        className={`${
          !Nav ? "top-[0%]" : ""
        }  md:hidden top-[-54%] absolute ransition-all duration-1000 mt-20 bg-green-900 text-white flex items-center justify-center h-[25vh] flex-col gap-[10px] w-full`}
      >
        <h3>About</h3>
        <h3>Team</h3>
        <h3>Solution</h3>
        <h3>Blog</h3>
        <button className="text-white border rounded-full w-[30vw] h-10 font-semibold"> Get In touch </button>
      </div>
    </div>
  );
}

export default Nav

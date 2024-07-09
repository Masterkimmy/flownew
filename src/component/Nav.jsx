import React from 'react'
import img from "../../src/Brand Logo.png"

const Nav = () => {
  return (
    <div className='flex justify-around bg-green-900 h-20 items-center'>
      <div className='flex gap-[15px] text-white items-center justify-center'>
        <img src={img} alt="" />
        <h3>About Us</h3>
        <h3>Team</h3>
        <h3>Solution</h3>
        <h3>Blog</h3>
      </div>
      <button className='text-white border rounded-full w-[8vw] h-10 font-semibold'>Get In touch</button>
    </div>
  );
}

export default Nav

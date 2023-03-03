import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../assets/Img/welcome.png";
import "../index.css";

const Welcome = () => {
  return (
    <div  style={{backgroundColor:"#F4C27F", fontFamily:"poppins"}} className="h-screen">
      <div className='mx-auto'>
          <img src={banner} alt="banner" className='mx-auto'/>
      </div>
      <div className='text-center mt-10'>
          <h6 className='text-4xl'>Welcome to</h6>
          <h3 className='text-6xl text-uppercase'>Our Reminder</h3>
          <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc</p>
      </div>
      <div className='text-center mt-10'>
          <Link to="/signUp" className="btn text-white font-bold uppercase bg-gradient-to-r from-red-500 to-amber-500 border-none outline-none">Get Start</Link>
      </div>
    </div>
  )
}

export default Welcome ;
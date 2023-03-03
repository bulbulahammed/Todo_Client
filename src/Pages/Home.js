import React from 'react';
import profile from "../assets/Img/profile.jpg";
import "../index.css";

const Home = () => {
  return (
    <>
        <div  style={{backgroundColor:"#F4C27F", fontFamily:"poppins"}} className="">
            <div className='mx-auto pt-20'>   
                <img src={profile} alt="banner" className='mx-auto border-8 border-red-400 rounded-full'/> 
            </div>
            <div className='text-center mt-10'>
                <h3 className='text-4xl text-uppercase'>Bulbul Ahammed</h3>
            </div>
            <div className='text-center mt-10 pb-10'>
                <button className="btn text-white font-bold uppercase bg-gradient-to-r from-red-500 to-amber-500 border-none outline-none">Logout</button>
            </div>
        </div>
        <div>
            <h4>Task List</h4>
        </div>
    </>
  )
}

export default Home ;
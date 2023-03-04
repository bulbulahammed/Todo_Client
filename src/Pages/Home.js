import React, { useEffect, useState } from 'react';
import profile from "../assets/Img/profile.jpg";
import Clock from '../components/clock/Clock';
import "./home.css";




    // Greetings
    let hour = new Date().getHours();
    console.log(hour)
    
const Home = () => {

    const [greetings,SetGreetings] = useState("")


	useEffect(()=>{
        if(hour >= 1 && hour <= 12 ){
            SetGreetings("Good Morning");
        }else if(hour >= 12 && hour <= 18){
            SetGreetings("Good Afternoon");
        }else if(hour >= 18 && hour >= 24){
            SetGreetings("Good Evening");
        }
	}, [])


  return (
    <>
        <div  style={{backgroundColor:"#F4C27F", fontFamily:"poppins"}} className="h-screen">
            <div className='mx-auto pt-20'>   
                <img src={profile} alt="banner" className='mx-auto border-8 border-red-400 rounded-full'/> 
            </div>
            <div className='text-center mt-10'>
                <h3 className='text-4xl text-uppercase'>Bulbul Ahammed</h3>
            </div>
            <div className='text-center mt-10 pb-10'>
                <button className="btn text-white font-bold uppercase bg-gradient-to-r from-red-500 to-amber-500 border-none outline-none">Logout</button>
            </div>
            <div className="text-center banner-scroll-btn">
              <div className="mouse_scroll">
                <div className="mouse">
                   <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
              </div>
            </div>
        </div>
        <div className='text-center bg-slate-100 py-20'>
            <Clock/>
            <p className='text-3xl mt-5 story'>{greetings}</p>
        </div>
    </>
  )
}

export default Home ;
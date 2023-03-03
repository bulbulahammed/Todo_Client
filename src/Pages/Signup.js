import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const Signup = () => {
  return (
    <section style={{backgroundColor:"#F4C27F", fontFamily:"poppins"}} className="">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-10 text-xl text-center">Sign Up</h1> 
            <form>
              {/*----------- Label For Password ------------*/}
              <label className='label'>
                <span className='label-text text-sm'>Name</span>
              </label>
              <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                  placeholder=""/>
              <label className='label'>
                <span className='label-text text-sm'>Email</span>
              </label>
              <input
                  type="email"
                  className="input input-bordered w-full max-w-xs"
                  name="email"
                  placeholder=""/>
                   {/*----------- Label For Password ------------*/}
              <label className='label'>
                <span className='label-text text-sm'>Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                name="password"
                placeholder="" />
              {/*----------- Label For Profile ------------*/}
              <label className='label'>
                <span className='label-text text-sm'>Profile</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                name="profile"
                placeholder="" />
              <button
                type="submit"
                className="w-full max-w-xs text-center py-3 rounded text-white bg-gradient-to-r from-red-500 to-amber-500 focus:outline-none my-5"
              >Sign Up</button>
            </form>
            <p className="text-xs">Already Have An Account? <Link to="/login" className="text-secondary">Log In</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;
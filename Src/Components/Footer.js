import React from 'react';
import FooterLogo from "../Assets/FooterLogo.png";
import {BsArrowRight} from 'react-icons/bs'
import {FaGithubSquare, FaDribbbleSquare, FaInstagramSquare, FaBehanceSquare, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-sky-900 mt-8 w-full'>
      <div className=' w-4/5 mx-auto flex flex-row justify-between py-12'>
        <div className=' w-1/4'>
            <img src={FooterLogo} className=' w-32 h-12'/>
            <p className=' text-sm text-white font-sans font-normal mt-6'>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet.</p>
        </div>
        <div>
          <p className=' text-base font-sans font-medium text-white'>Quick Links</p>
          <div className='text-sm font-sans font-regular text-white mt-4'>
            <p>About Us</p>
            <p>Search</p>
            <p>Checkout</p>
            <p>Shopping Cart</p>
            <p>Checkout</p>
            <p>My Account</p>
          </div>
        </div>
        <div>
          <p className=' text-base font-sans font-medium text-white'>Products</p>
          <div className='text-sm font-sans font-regular text-white mt-4'>
            <p>Mobiles</p>
            <p>Televisons</p>
            <p>Laptops</p>
            <p>Audio</p>
            <p>Watches</p>
            <p>Camera</p>
          </div>
        </div>
        <div>
          <p className=' text-base font-sans font-medium text-white'>Customer Service</p>
          <div className='text-sm font-sans font-regular text-white mt-4'>
            <p>Contact Us</p>
            <p>Help Center</p>
            <p>Report Abuse</p>
            <p>Submit a Dispute</p>
            <p>Policies & Rules</p>
          </div>
        </div>
        <div>
          <p className=' text-base font-sans font-medium text-white'>Contact with Us</p>
          <div className="flex flex-row mt-6">
          <input
            type="text"
            placeholder="Email"
            className="flex-1 border-solid border border-white rounded-l-md font-sans text-sm py-2 px-4 text-slate-400"
          />
          <span>
            <button
            className="border-solid border border-red-800 rounded-r-md font-sans text-xl py-2 px-3 text-white bg-red-800 text-center">
              <BsArrowRight/>
            </button>
          </span>   
        </div>
          <div className='flex flex-row justify-between text-2xl font-sans font-regular text-white mt-6'>
            <p><FaGithubSquare/></p>
            <p><FaDribbbleSquare/></p>
            <p><FaInstagramSquare/></p>
            <p><FaBehanceSquare/></p>
            <p><FaLinkedin/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
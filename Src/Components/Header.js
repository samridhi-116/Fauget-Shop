import React, { useState } from 'react';
import Logo from "../Assets/Logo.png"
import { Link } from 'react-router-dom';
import { MdOutlinePersonOutline, MdOutlineShoppingCart, MdOutlineSearch, MdShoppingCart } from 'react-icons/md';
import {PiHeartStraightBold, PiHeartStraightFill} from 'react-icons/pi';
import { useSelector } from "react-redux";

const Title = () => {
    return(
        <div className=' w-[10%]'>
          <Link to='/'>
            <img src={Logo} className='w-full'/>
          </Link>
        </div>
    )
}
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store)=> store.wishlist.items)

  const [searchInput, setSearchInput] = useState("")
  return (
    <div className='bg-white'>
      <div className=' h-2 bg-sky-900'></div>
      <div className=' w-11/12 mx-auto flex flex-row justify-between items-center'>
        <Title/>
        <div className="flex flex-row w-1/4 mx-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 border-solid border border-sky-900 rounded-l-md font-sans text-sm py-2 px-4 text-slate-400"
            value= {searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <span>
            <button 
            data-testid = "search-btn"
            className="border-solid border border-sky-900 rounded-r-md font-sans text-base py-2 px-3 text-white bg-sky-900 text-center"
            onClick={() => filterProducts(searchInput)}><MdOutlineSearch className=" text-xl"/></button>
          </span>   
        </div>
        <div className=' w-1/4 mx-auto flex flex-row justify-between items-center text-sm font-sans font-semibold text-sky-700'>
            <Link to='/'>Home</Link>
            <Link to="/categories">Categories</Link>
            <Link>Offers</Link>
            <Link>Contact</Link>
        </div>
        <div className=' w-[12%] mx-auto flex flex-row justify-between items-center'>
          <Link 
            className='border-solid border border-sky-900 rounded-sm font-sans text-sm py-2 px-3 text-white bg-sky-900 text-center'>
            Sign in
          </Link>
          
          <Link to='/wishlist'>
            {
              wishlistItems.length == 0 ? <PiHeartStraightBold className='text-sky-900 pl-2 w-7 h-7'/> :  
              <PiHeartStraightFill 
              className=' text-sky-900 pl-2 w-7 h-7'/>
            }
          </Link>
          <Link to='/cart'>
            {
              cartItems.length == 0 ? <MdOutlineShoppingCart className='text-sky-900 pl-2 w-7 h-7'/> : 
              <MdShoppingCart className='text-sky-900 pl-2 w-7 h-7'/>
            }
          </Link>
        </div>
    </div>
    </div>
    
  )
}

export default Header;
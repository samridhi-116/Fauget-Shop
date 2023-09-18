import React from 'react';
import CartEmpty from '../Assets/emptyCart.png'
import { Link } from 'react-router-dom';

const EmptyWishlist = () => {
  return (
    <div className='w-11/12 mx-auto bg-white my-6 px-6 py-4'>
        <div className='w-full flex flex-col justify-center items-center'>
            <img src={CartEmpty} className=' w-1/2'/>
            <p className=' text-lg font-sans font-bold leading-loose mt-4 text-center'>Nothing added to wishlist!</p>
            <p className='text-center text-sm font-normal font-sans text-gray-500 leading-relaxed'>Looks like you have not liked anything. Go <br/> ahead and explore top products</p>
            <Link to='/'>
                <button className='my-6 border-solid border border-red-800 rounded-sm font-sans text-sm py-4 px-5 text-white bg-red-800 text-center mr-6  hover:bg-white hover:text-red-800'>Continue Shopping</button>
            </Link>
        </div>
        
    </div>
  )
}

export default EmptyWishlist;
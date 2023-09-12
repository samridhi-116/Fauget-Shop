import React from 'react'; 
import { useDispatch } from 'react-redux';
import { removeWishlist } from './utils/wishlistSlice';
import { addItem } from './utils/cartSlice';

const WishlistItems = ({item}) => {
    const dispatch = useDispatch();
    const handleRemoveWishlist =() =>{
        dispatch(removeWishlist({item}));
    }
    const addProduct = ({ item }) =>{
        dispatch(addItem({item}))
    }
  return (
    <div className='my-8'>
        <div className='mb-7 flex flex-row justify-start'>
            <div className='w-[23%] mr-12'>
                <img src={item.image} className='w-full h-40 rounded-md' alt={item.name} />
            </div>
            <div className='w-1/2 py-3 mr-12'>
                <p className='font-sans font-semibold text-xl leading-relaxed'>{item.name}</p>
                <p className='font-sans font-normal text-sm text-gray-600 leading-relaxed'>{item.description}</p>
                <p className='font-sans text-sm text-black leading-relaxed'>Brand: {item.brand}</p>
                <p className='font-sans text-sm text-gray-500 leading-relaxed'>⭐ {item.rating}</p>
                <p className='font-sans text-base text-green-700 leading-relaxed'>${item.price}</p>
            </div>
            <div className=' w-1/6 flex flex-col justify-evenly'>
                <button
                onClick={()=>{addProduct({item: item})}} 
                className='border-solid border border-sky-900 rounded-sm font-sans text-sm py-3 px-4 text-white bg-sky-900 text-center uppercase hover:bg-white hover:text-sky-900'>Move to cart</button>
                <button 
                onClick={()=>{handleRemoveWishlist({item: item})}}
                className='border-solid border border-red-800 rounded-sm font-sans text-sm py-3 px-4 text-white bg-red-800 text-center uppercase hover:bg-white hover:text-red-800'>Remove Product</button>
            </div>
        </div>
    </div>
  )
}

export default WishlistItems;
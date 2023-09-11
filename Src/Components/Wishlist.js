import React from 'react'; 
import WishlistItems from './WishlistItems';
import { useDispatch, useSelector } from 'react-redux';
import { clearWishlist } from './utils/wishlistSlice';
import EmptyCart from './EmptyCart';

const Wishlist = () => {
  const dispatch = useDispatch();
  const handleClearWishlist =() =>{
      dispatch(clearWishlist());
  }
  const wishlistItems = useSelector(store => store?.wishlist?.items);

  return (wishlistItems.length == 0 )? <EmptyCart/> : (
    <div className='w-11/12 mx-auto bg-white rounded-md my-8'>
      {wishlistItems.map((item) => <WishlistItems key={item.id} {...item}/>)}
      <div className='w-full flex flex-row justify-end'>
          <button 
            onClick={()=>handleClearWishlist()} 
            className='mr-14 my-6 border-solid border border-red-800 rounded-sm font-sans text-sm font-medium py-3 px-4 text-white bg-red-800 text-center uppercase hover:bg-white hover:text-red-800'>Clear Wishlist
          </button> 
        </div>
    </div>
  )
}

export default Wishlist;
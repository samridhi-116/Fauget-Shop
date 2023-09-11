import React from 'react';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './utils/cartSlice';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
    }
    const cartItems = useSelector(store => store?.cart?.items);
    const cartQuant = useSelector(store => store?.cart?.totalItems)
    const cartPrice = useSelector(store => store?.cart?.itemPrice)
    const cartDelivery = useSelector(store => store.cart.deliveryPrice)

  return (cartQuant == 0) ? <EmptyCart/> : (
    <div className='w-[97%] mx-auto flex flex-row justify-between my-8'>
      <div className=' bg-white w-[70%] rounded-md'>
        {cartItems.map((item) => <CartItems key={item.id} {...item}/>)}
        <div className='w-full flex flex-row justify-end'>
          <button 
            onClick={()=>handleClearCart()} 
            className='mr-14 my-6 border-solid border border-red-800 rounded-sm font-sans text-sm font-medium py-3 px-4 text-white bg-red-800 text-center uppercase hover:bg-white hover:text-red-800'>Clear Cart
          </button> 
        </div>
      </div>
      <div className='bg-white w-[29%] rounded-md px-6 py-8'>
        <p className=' text-xl font-sans font-semibold text-sky-800 leading-relaxed mb-2 uppercase'>Price Details</p>
        <hr className=' my-4'/>
        <p className=' font-sans font-medium text-base leading-relaxed flex flex-row justify-between items-center'>Total Items:  
        <span className='font-sans font-medium text-base leading-relaxed'>{cartQuant}</span></p>
        <br/>
        <p className='font-sans font-medium text-base leading-relaxed flex flex-row justify-between items-center'>Price: 
        <span className='font-sans font-medium text-base leading-relaxed'>${cartPrice.toFixed(2)}</span></p>
        <br/>
        <p className='font-sans font-medium text-base leading-relaxed flex flex-row justify-between items-center'>Delivery Charges: 
        <span className='font-sans font-medium text-base leading-relaxed text-red-800'>${cartDelivery.toFixed(2)}</span></p>
        <br/>
        <hr/>
        <p className=' my-3 font-sans font-medium text-xl leading-relaxed flex flex-row justify-between items-center'>Total Amount: 
          <span className=' font-sans font-medium text-xl leading-relaxed'>${(cartPrice+cartDelivery).toFixed(2)}</span>
        </p>
        <hr/>
        <Link to='/checkout' className='w-full flex flex-row justify-center'>
          <button className=' my-3 border-solid border border-sky-900 rounded-sm font-sans text-sm py-3 px-8 text-white bg-sky-900 text-center hover:bg-white hover:text-sky-900'>
            Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart;
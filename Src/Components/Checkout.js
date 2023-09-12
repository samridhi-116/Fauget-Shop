import React, {useState} from 'react'
import CartItems from './CartItems';
import {useSelector } from 'react-redux';
import { Link,  useNavigate} from 'react-router-dom';
import CDCard from '../Assets/CDCard.png';
import COD from '../Assets/COD.png';
import FaugetPay from '../Assets/FaugetPay.png';
import NetBanking from '../Assets/NetBanking.png';
import Paytm from '../Assets/Paytm.png';
import UPI from '../Assets/UPI.png';

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); 

  const handlePaymentMethodChange = (value) => {
    setSelectedPaymentMethod(value);
  };

  const isCompleteOrderButtonEnabled = () => {
    return selectedPaymentMethod !== null && cartItems.length !== 0;
  };

    const cartItems = useSelector(store => store?.cart?.items);
    const cartQuant = useSelector(store => store?.cart?.totalItems)
    const cartPrice = useSelector(store => store?.cart?.itemPrice)
    const cartDelivery = useSelector(store => store.cart.deliveryPrice)

  return (
    <div>
      <div className='w-[97%] mx-auto flex flex-row justify-between my-8'>
      <div className=' bg-white w-[70%] rounded-md px-8 py-8'>
        <div className=' w-1/2 mb-6'>
          <p className=' text-2xl font-sans font-bold mb-8'>Payment Method</p>

          <div className='flex flex-row items-center'>
            <input 
              type="radio" 
              name='paymentMode' 
              value="Credit / Debit Card" 
              className=' w-4 h-4'
              onChange={() => handlePaymentMethodChange("Credit / Debit Card")}/>
            <label for="Credit / Debit Card" className='flex flex-row items-center'>
              <img src={CDCard} className=' w-[60px] h-10 mx-4'/> 
              <span>Credit / Debit Card </span>
            </label><br/>
          </div>
          <hr className='my-3'/>
          <div className='flex flex-row items-center'>
            <input 
              type="radio" 
              name='paymentMode' 
              value="UPI" 
              className=' w-4 h-4'
              onChange={() => handlePaymentMethodChange("UPI")} />
            <label for="UPI"  className='flex flex-row items-center'>
              <img src={UPI} className=' w-[60px] h-10 mx-4'/> UPI</label><br/>
          </div>
          <hr className='my-3'/>

          <div className='flex flex-row items-center'>
            <input 
              type="radio" 
              name='paymentMode' 
              value="Paytm" 
              className=' w-4 h-4'
              onChange={() => handlePaymentMethodChange("Paytm")} />
            <label for="Paytm"  className='flex flex-row items-center'>
            <img src={Paytm} className=' w-[60px] h-10 mx-4'/> Paytm</label><br/>
          </div>
          <hr className='my-3'/>

          <div className='flex flex-row items-center'>
            <input 
              type="radio" 
              name='paymentMode' 
              value="Net Banking" 
              className=' w-4 h-4'
              onChange={() => handlePaymentMethodChange("Net Banking")} />
            <label for="Net Banking"  className='flex flex-row items-center'>
          <img src={NetBanking} className=' w-[60px] h-10 mx-4'/> Net Banking</label><br/>
          </div>
          <hr className='my-3'/>

          <div className='flex flex-row items-center'>
            <input 
              type="radio" 
              name='paymentMode' 
              value="Fauget Pay" 
              className=' w-4 h-4'
              onChange={() => handlePaymentMethodChange("Fauget Pay")} />
          <label for="Fauget Pay"  className='flex flex-row items-center'>
          <img src={FaugetPay} className=' w-[60px] h-10 mx-4'/> Fauget Pay</label><br/>
          </div>
          <hr className='my-3'/>

          <div className='flex flex-row items-center'>
            <input 
              type="radio" 
              name='paymentMode' 
              value="COD" 
              className=' w-4 h-4'
              onChange={() => handlePaymentMethodChange("COD")} />
            <label for="COD"  className='flex flex-row items-center'>
          <img src={COD} className=' w-[60px] h-10 mx-4'/> Cash on Delivery</label><br/>
          </div> 
        </div>

        <p className=' text-2xl font-sans font-bold my-8'>Order Details</p>
        {cartItems.map((item) => <CartItems key={item.id} {...item}/>)}
        <div className='w-full flex flex-row justify-end'>
        </div>
      </div>
      <div className='bg-white w-[29%] rounded-md px-6 py-8'>
        <p className=' text-xl font-sans font-semibold text-sky-800 leading-relaxed mb-2 uppercase'>Order Summary</p>
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
        <Link className='w-full flex flex-row justify-center'>
          <button disabled={!isCompleteOrderButtonEnabled()} 
            onClick={()=>{
              alert("Order Successfull. Thankyou for Shopping! ");
              navigate('/')
            }}
            className=' my-3 border-solid border border-sky-900 rounded-sm font-sans text-sm py-3 px-8 text-white bg-sky-900 text-center hover:bg-white hover:text-sky-900'>
            Complete Order
          </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Checkout;
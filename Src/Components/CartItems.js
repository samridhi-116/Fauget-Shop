import React, {useState} from 'react'; 
import { removeItem, updateItem } from './utils/cartSlice';
import { useDispatch} from 'react-redux';


const CartItems = ({item}) => {

    const dispatch = useDispatch();
    const removeProduct = () =>{
        dispatch(removeItem({item}))
    }  

    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        if (count < 10) {
          setCount(count + 1);
          dispatch(updateItem({ item, count: count + 1 }));
        }

      };
      const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
          dispatch(updateItem({ item, count: count - 1 }));
        }
      };

  return (
    <div className='my-6 px-6 py-4'>
        <div className='w-full flex flex-row justify-start'>
            <div className=' w-2/5 mr-8'>
                <img src={item.image} className='w-full h-52 rounded-md'/>
            </div>
            <div className=' w-7/12'>
                <p className='font-sans font-semibold text-xl leading-relaxed'>{item.name}</p>
                <p className='font-sans font-normal text-sm text-gray-600 leading-relaxed'>{item.description}</p>
                <p className='font-sans font-semibold text-sm leading-relaxed'>{item.title}</p>
                <p className='font-sans text-base text-black leading-relaxed'>⭐ {item.rating}</p>
                <p className='font-sans font-medium text-xl text-green-700 leading-relaxed'>${item.price.toFixed(2) * count}</p>
                <p className='font-sans font-semibold text-sm text-gray-600 leading-relaxed'>Delivery Charges: <span className='font-sans font-medium text-base text-red-800 leading-relaxed'>${item.delivery_charges}</span></p>
                <div className='flex flex-row justify-start items-center mt-4'>
                    <div className='flex flex-row items-center border-2 border-sky-800 mr-6'>
                        <button onClick={handleDecrement} disabled={count === 1} className='mx-4 my-1'>-</button>
                        <p className=' font-sans font-medium'>{count}</p>
                        <button onClick={handleIncrement} className='mx-4 my-1'>+</button>
                    </div>
                    <div className='mr-8'>
                        <button className=' uppercase font-semibold font-sans text-sm hover:text-sky-800'>
                            Save for later
                        </button>
                    </div>
                    <div>
                        <button 
                            className='uppercase font-semibold font-sans text-sm hover:text-sky-800'
                            onClick={()=>removeProduct({ item: item})}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems;
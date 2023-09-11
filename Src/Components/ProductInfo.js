import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../Data/config';
import {PiHeartStraightBold} from 'react-icons/pi';
import { Shimmer2 } from './Shimmer';
import { addItem } from './utils/cartSlice';
import { addWishlist } from './utils/wishlistSlice';
import { useDispatch} from 'react-redux';

const ProductInfo = () => {
    const { product_id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    
    const dispatch = useDispatch();
    const addProduct = ({ item }) =>{
        dispatch(addItem({item}))
    }
    const addToWishlist = ({item})=>{
      dispatch(addWishlist({item}))
    }  

    useEffect(() => {
        getProductDetails();
      }, [product_id]);
    
      async function getProductDetails() {
        const data = await fetch(ProductsData);
        const json = await data.json();
        const category = json?.cards?.card.find((item) =>
          item.sub_categories?.some((sub) =>
            sub.products?.some((product) => product.product_id === product_id)
          )
        );
        const productDet = category?.sub_categories?.flatMap((sub) => sub.products || []).find(
          (product) => product.product_id === product_id);
          setProductDetails(productDet ? [productDet] : []);
      }

  return(productDetails.length == 0) ? <Shimmer2/> : (
    <div className='w-11/12 mx-auto bg-white my-8 px-8 py-8'>
      <div>
        {productDetails?.map((item) => (
          <div key={item.product_id} className='mb-7 flex flex-row justify-start'>
              <div className='w-2/5 mr-12'>
                <img src={item.image} className='w-full h-80 rounded-md' alt={item.name} />
              </div>
              <div className=' py-3'>
                <p className='font-sans font-semibold text-3xl leading-relaxed'>{item.name}</p>
                <p className='font-sans font-semibold text-lg leading-relaxed'>{item.title}</p>
                <p className='font-sans text-base text-black leading-relaxed'>⭐ {item.rating}</p>
                <p className='font-sans text-lg text-green-700 leading-relaxed'>${item.price}</p>
                <p className='font-sans font-normal text-base text-gray-600 leading-relaxed'>{item.description}</p>
                <div className='w-full flex flex-row mt-4'>
                    <div className='w-1/5'>
                        <p className=' text-sm font-sans font-medium text-gray-600'>Delivery </p>
                    </div>
                    <div>
                        <p className=' text-base font-sans font-normal'>{item.delivery_time}</p>
                        <p className=' text-red-800 text-base font-sans font-normal'>${item.delivery_charges}</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center mt-4'>
                    <div className='w-1/5'>
                        <p className=' text-sm font-sans font-medium text-gray-600'>Brand </p>
                    </div>
                    <div>
                        <p className=' text-base font-sans font-medium'>{item.brand}</p>
                    </div>
                </div>
                <div className='w-full flex flex-row mt-4'>
                    <div className='w-1/5'>
                        <p className=' text-sm font-sans font-medium text-gray-600'>Details </p>
                    </div>
                    <div className=' text-base font-normal font-sans'>
                        <p className=' text-base font-sans font-normal'>{item.color}</p>
                        <p className=' text-base font-sans font-normal'>{item.storage}</p>
                        <p className=' text-base font-sans font-normal'>{item.size}</p>
                        <p className=' text-base font-sans font-normal'>{item.screen_size}</p>
                        <p className=' text-base font-sans font-normal'>{item.author}</p>
                        <p className=' text-base font-sans font-normal'>{item.genre}</p>
                        <p className=' text-base font-sans font-normal'>{item.format}</p>
                        <p className=' text-base font-sans font-normal'>{item.frame_color}</p>
                        <p className=' text-base font-sans font-normal'>{item.lens_color}</p>
                        <p className=' text-base font-sans font-normal'>{item.age_range}</p>
                        <p className=' text-base font-sans font-normal'>{item.player_count}</p>
                        <p className=' text-base font-sans font-normal'>{item.weight_capacity}</p>
                        <p className=' text-base font-sans font-normal'>{item.volume}</p>
                        <p className=' text-base font-sans font-normal'>{item.weight}</p>
                        <p className=' text-base font-sans font-normal'>{item.material_type}</p>
                        <p className=' text-base font-sans font-normal'>{item.case_material}</p>
                        <p className=' text-base font-sans font-normal'>{item.band_material}</p>
                        <p className=' text-base font-sans font-normal'>{item.movement_type}</p>
                        <p className=' text-base font-sans font-normal'>{item.water_resistance}</p>
                        <p className=' text-base font-sans font-normal'>{item.material}</p>
                        <p className=' text-base font-sans font-normal'>{item.type}</p>
                    </div>
                </div>
                <div className='flex flex-row items-center mt-8'>
                    <button 
                      onClick={()=>addToWishlist({item: item})}
                    className='border-solid border border-red-800 rounded-sm font-sans text-sm py-4 px-5 text-white bg-red-800 text-center mr-6 uppercase hover:bg-white hover:text-red-800'>
                        <span className='flex flex-row items-center'><PiHeartStraightBold className='mr-2 text-lg'/> Wishlist</span>
                    </button>
                    <button 
                    onClick={()=>addProduct({ item: item})}
                    className='border-solid border border-sky-900 rounded-sm font-sans text-sm py-4 px-5 text-white bg-sky-900 text-center uppercase hover:bg-white hover:text-sky-900'>Add to Cart</button>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductInfo;
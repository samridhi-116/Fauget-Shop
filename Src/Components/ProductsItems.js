import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsData } from '../Data/config';
import { Shimmer3 } from './Shimmer';

const ProductsItems = () => {
  const { subcategory_id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [subcategory_id]);

  async function getProducts() {
      const data = await fetch(ProductsData);
      const json = await data.json();

      const category = json?.cards?.card.find(
        (item) => item.sub_categories?.some((sub) => sub.subcategory_id == subcategory_id)
      );

      const subcategory = category.sub_categories.find(
        (sub) => sub.subcategory_id == subcategory_id
      );
      setProducts(subcategory || []);
  }
  
  return (products.length == 0 ) ? <Shimmer3/> : (
    <div className='w-11/12 mx-auto bg-white my-8 px-8 py-6'>
      <p className='text-2xl font-sans font-bold mb-8'>{products?.category_name}</p>
      <div className=''>
        {products?.products?.map((item) => (
          <div key={item.product_id} className='mb-7 flex flex-row justify-start'>
              <div className='w-[23%] mr-12'>
                <img src={item.image} className='w-full h-40 rounded-md' alt={item.name} />
              </div>
              <div className=' py-3'>
                <Link to={`/products/${item.product_id}`} className=' hover:text-blue-800 hover:underline underline-offset-4'>
                  <p className='font-sans font-semibold text-xl leading-relaxed'>{item.name}</p>
                </Link>
                <p className='font-sans font-normal text-sm text-gray-600 leading-relaxed'>{item.description}</p>
                <p className='font-sans text-sm text-black leading-relaxed'>Brand: {item.brand}</p>
                <p className='font-sans text-sm text-gray-500 leading-relaxed'>⭐ {item.rating}</p>
                <p className='font-sans text-base text-green-700 leading-relaxed'>${item.price}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsItems;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsData } from '../../Data/config';

const ProductCards = () => {
    
    const [randomCategory, setRandomCategory] = useState(null);
    const [randomSubcategory, setRandomSubcategory] = useState(null);
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(()=>{
        getProductCard();
    },[]);

    const getRandomElement = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    async function getProductCard(){
        const data = await fetch(ProductsData);
        const json = await data.json();

        const randomCategory = getRandomElement(json?.cards?.card);
        const randomSubcategory = getRandomElement(randomCategory?.sub_categories);
        const randomProducts = randomSubcategory?.products?.slice(0, 4);
        setRandomCategory(randomCategory);
        setRandomSubcategory(randomSubcategory);
        setRandomProducts(randomProducts);
    }

    return (
    <div className='my-8 bg-white'>
        {randomCategory && (
            <div key={randomCategory.category_id} >
                {randomSubcategory && (
                    <div key={randomSubcategory.subcategory_id} className='flex flex-row justify-between items-center'> 
                        <div className='w-1/5 h-80 p-8 py-auto flex flex-col justify-center items-center'>
                            <h3 className=' text-3xl font-sans font-semibold text-center align-middle'>{randomSubcategory.category_name}</h3>
                            <Link to={`/subcategories/${randomSubcategory.subcategory_id}`}>
                                <button className='border-solid border border-sky-900 rounded-sm font-sans text-sm py-2 px-3 text-white bg-sky-900 text-center mt-6'>View All</button>
                            </Link>
                            
                        </div>

                        <div className='flex flex-row justify-between items-center w-[78%]'>
                            {randomProducts.map((product) => (
                                <Link to={`/products/${product.product_id}`} className='w-[24.5%]'>
                                    <div key={product.product_id} className='  h-80 rounded-md p-4'>
                                    <img src={product.image} alt={product.name} className='rounded-md w-full h-40'/>
                                    <h4 className=' text-lg font-sans font-semibold whitespace-nowrap text-ellipsis overflow-hidden mt-3 w-full leading-relaxed'>{product.name}</h4>
                                    <p className='font-sans text-sm text-gray-500 leading-relaxed'>⭐ {product.rating}</p>
                                    <p className=' font-sans font-medium text-base text-green-600 leading-relaxed'>${product.price}</p>
                                    <p className=' font-sans font-normal text-sm text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden w-full leading-relaxed'>{product.title}</p>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            )}
    </div>
  )
}

export default ProductCards;
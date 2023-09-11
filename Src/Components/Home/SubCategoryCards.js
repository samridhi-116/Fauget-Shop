import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsData } from '../../Data/config';

const SubCategoryCards = () => {
    const [categoryCard, setCategoryCard] = useState([]);

    useEffect(()=>{
        getCategoryCards();
    },[])

    async function getCategoryCards(){
        const data = await fetch(ProductsData);
        const json = await data.json();
        setCategoryCard(json?.cards?.card);
    }
    const getRandomCategories = () => {
        const shuffled = [...categoryCard].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    };
  return (
    <div className='flex flex-row justify-between items-center mt-4'>
        {getRandomCategories().map((category) => (
            <div key={category.category_id} className='w-[24%] bg-white px-4 py-6'>
                <p className='my-3 text-xl font-sans font-bold text-black whitespace-nowrap text-ellipsis overflow-hidden w-full'>{category.category_name}</p>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-6'>
                    {category?.sub_categories?.slice(0, 4)?.map((subcategory) => (
                    <Link to={`/subcategories/${subcategory.subcategory_id}`}>
                        <div key={subcategory.subcategory_id} className='w-full hover:text-sky-800'>
                            <img src={subcategory.category_img} className='w-full h-[100px] rounded-md'/>
                            <h3 className=' text-xs font-sans font-normal whitespace-nowrap text-ellipsis overflow-hidden w-full'>{subcategory.category_name}</h3>
                        </div>  
                    </Link>
                    ))}
                </div>
                <Link to={`/categories/${category.category_id}`} className=' text-xs font-sans font-normal text-sky-800 underline underline-offset-4 mt-8'>Explore all</Link>
            </div>
         ))}
    </div>
  )
}

export default SubCategoryCards;
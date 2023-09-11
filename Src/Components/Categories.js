import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ProductsData } from '../Data/config';
import { Shimmer } from './Shimmer';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories();
    },[])

    async function getCategories(){
        const data = await fetch(ProductsData);
        const json = await data.json();
        setCategories(json?.cards?.card)
    }
  return (categories.length == 0) ? <Shimmer/> : (
    <div className='w-11/12 mx-auto bg-white my-8 px-8 py-6'>
        <p className=' text-2xl font-sans font-bold mb-8'>All Categories</p>
        <div className='flex flex-row flex-wrap justify-start'>
            {categories.map((category) => (
                <div key={category.category_id} className=' w-[23%] mr-5 mb-7'>
                    <Link to={`/categories/${category.category_id}`}>
                    <img src={category.category_img} className=' w-full h-40 rounded-md'/>  
                    <p className=' font-sans font-medium text-sm'>{category.category_name}</p>
                    <p className=' font-sans text-xs text-gray-500'>{category.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories;
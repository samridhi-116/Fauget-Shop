import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsData } from '../Data/config';
import { Shimmer } from './Shimmer';

const SubCategories = () => {

  const { category_id } = useParams();
  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    getSubCategories();
  }, [category_id]);

  async function getSubCategories() {
    const data = await fetch(ProductsData);
    const json = await data.json();
    const category = json?.cards?.card.find((info) => info.category_id === category_id);
    setSubcategory(category?.sub_categories || []);
  }

  return (subcategory.length == 0) ? <Shimmer/> : (
    <div className='w-11/12 mx-auto bg-white my-8 px-8 py-6'>
      <p className=' text-2xl font-sans font-bold mb-8'>Sub Categories</p>
      <div className='flex flex-row flex-wrap justify-start'>
          {subcategory.map((item) => (
              <div key={item.subcategory_id} className=' w-[23%] mr-5 mb-7'>
                <Link to={`/subcategories/${item.subcategory_id}`}>
                  <img src={item.category_img} className=' w-full h-40 rounded-md'/>
                  <p className=' font-sans font-medium text-sm'>{item.category_name}</p>
                  <p className=' font-sans text-xs text-gray-500'>{item.description}</p>
                </Link>
              </div>
          ))}
      </div>
    </div>
  )
}

export default SubCategories;
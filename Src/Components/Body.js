import React, {useEffect, useState} from 'react';
import HomeSlider from './Home/HomeSlider';
import SubCategoryCards from './Home/SubCategoryCards';
import CategoriesSlider from './Home/CategoriesSlider';
import ProductCards from './Home/ProductCards';
import { Shimmer } from './Shimmer';

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(delay);
  }, []);

  return (isLoading) ? <Shimmer /> : (
    <div className='w-[95%] mx-auto mt-2'>
      <HomeSlider/>
      <SubCategoryCards/>
      <CategoriesSlider/>
      <ProductCards/>
      <ProductCards/>
      <ProductCards/>
      <SubCategoryCards/>
    </div>
  )
}

export default Body
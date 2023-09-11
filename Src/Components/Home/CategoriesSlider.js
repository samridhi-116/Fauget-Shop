import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { ProductsData } from '../../Data/config';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

const CategoriesSlider = () => {

  const [categorySliderItems, setCategorySliderItems] = useState([]);
  
  useEffect(()=>{
    getCategorySliderItems();
  },[])

  async function getCategorySliderItems(){
        const data = await fetch(ProductsData);
        const json = await data.json();
        setCategorySliderItems(json?.cards?.card);
    }

    const sliderRef = useRef(null);
    const next = () => {
      sliderRef.current.slickNext();
    };
    const previous = () => {
      sliderRef.current.slickPrev();
    };

    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      accessibility:true,
      arrows:false,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      adaptiveHeight: false,
      centerPadding: "100px",
      variableWidth: false,
    };

  return (
    <div className='my-5'>
      <div className='flex flex-row justify-between items-center my-4'>
        <p className=' text-2xl font-sans font-bold'>Popular Categories</p>
        <div className="flex flex-row items-center text-lg font-extrabold text-sky-900 mr-4">
          <button onClick={previous}>
            <BsFillArrowLeftCircleFill className='ml-3'/>
          </button>
          <button onClick={next}>
            <BsFillArrowRightCircleFill className= 'ml-3'/>
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
          {categorySliderItems?.map((item, index) => (
              <Link to={`/categories/${item.category_id}`} >
                <div key={index} className='my-4 w-56'>
                  <img 
                    src={item.category_img} 
                    alt={`Carousel ${index}`} 
                    className=" w-56 h-36 object-fill rounded-md"
                  />
                  <p className='font-sans font-normal text-sm'>{item.category_name}</p>
                </div>
              </Link>
          ))}
      </Slider>
    </div>
  )
}

export default CategoriesSlider;
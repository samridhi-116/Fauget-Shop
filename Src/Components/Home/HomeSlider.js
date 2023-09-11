import React, {useRef, useState, useEffect} from 'react';
import Slider from "react-slick";
import { HomeCarousel } from '../../Data/HomeCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {

    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
      setCarouselItems(HomeCarousel);
    }, []);

    const sliderRef = useRef(null);

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility:true,
      arrows:false,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      adaptiveHeight: false,
      // centerPadding: "50px",
      variableWidth: false,
    };

  return (
    <div className='mt-4 mb-8'>
      <Slider ref={sliderRef} {...settings}>
          {carouselItems?.map((item, index) => (
              <div key={index}>
                  <img 
                    src={item} alt={`Carousel ${index}`} className=" w-full h-72 object-fill cursor-pointer rounded-md"
                  />
              </div>
          ))}
      </Slider>
    </div>
  )
}

export default HomeSlider;
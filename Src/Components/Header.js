import React, { useState, useEffect } from 'react';
import Logo from "../Assets/Logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlinePersonOutline, MdOutlineShoppingCart, MdOutlineSearch, MdShoppingCart } from 'react-icons/md';
import {PiHeartStraightBold, PiHeartStraightFill} from 'react-icons/pi';
import { useSelector } from "react-redux";
import { ProductsData } from '../Data/config';

const Title = () => {
    return(
      <div className=' w-[10%]'>
        <Link to='/'>
          <img src={Logo} className='w-full'/>
        </Link>
      </div>
    )
}
const Header = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const [searchProducts, setSearchProducts] = useState('');

  useEffect(()=>{
    getSearchData();
  },[])
  async function getSearchData(){
    const data = await fetch(ProductsData);
    const json = await data.json();
    setSearchProducts(json);
  }
  const filterData = (query) => {
    const results = [];

    for (const category of searchProducts?.cards?.card) {
      if (category.category_name.toLowerCase().includes(query.toLowerCase())) {
        results.push({ type: 'category', data: category });
      }
  
      for (const subcategory of category.sub_categories) {
        if (subcategory.category_name.toLowerCase().includes(query.toLowerCase())) {
          results.push({ type: 'subcategory', data: subcategory });
        }
        for (const product of subcategory.products) {
          if (product.name.toLowerCase().includes(query.toLowerCase())) {
            results.push({ type: 'product', data: product });
          }
        }
      }
    }
    console.log('Filtered Results:', results);
    setFilteredResults(results[0]);
  };
  const handleSearch = (result) => {
    console.log('Clicked result:', result);
    if (result.type === 'category') {
      console.log('Navigating to category:', result.data.category_id);
      navigate(`/categories/${result.data.category_id}`);
    } else if (result.type === 'subcategory') {
      console.log('Navigating to subcategory:', result.data.subcategory_id);
      navigate(`/subcategories/${result.data.subcategory_id}`);
    } else if (result.type === 'product') {
      console.log('Navigating to product:', result.data.product_id);
      navigate(`/products/${result.data.product_id}`);
    } else {
      console.log('Navigating to /categories');
      navigate('/categories');
    }
  };
  
  
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store)=> store.wishlist.items)

  return (
    <div className='bg-white'>
      <div className=' h-2 bg-sky-900'></div>
      <div className=' w-11/12 mx-auto flex flex-row justify-between items-center'>
        <Title/>
        <div className="flex flex-row w-1/4 mx-auto">
        <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 border-solid border border-sky-900 rounded-l-md font-sans text-sm py-2 px-4 text-slate-400"
            value= {searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              filterData(e.target.value);
            }}
          />
          <span>
            <button 
            className="border-solid border border-sky-900 rounded-r-md font-sans text-base py-2 px-3 text-white bg-sky-900 text-center"
            onClick={handleSearch}>
            <MdOutlineSearch className=" text-xl"/></button>
          </span>   
        </div>
        
        <div className=' w-1/4 mx-auto flex flex-row justify-between items-center text-sm font-sans font-semibold text-sky-700'>
            <Link to='/'>Home</Link>
            <Link to="/categories">Categories</Link>
            <Link>Offers</Link>
            <Link>Contact</Link>
        </div>
        <div className=' w-[12%] mx-auto flex flex-row justify-between items-center'>
          <Link 
            className='border-solid border border-sky-900 rounded-sm font-sans text-sm py-2 px-3 text-white bg-sky-900 text-center'>
            Sign in
          </Link>
          
          <Link to='/wishlist'>
            {
              wishlistItems.length == 0 ? <PiHeartStraightBold className='text-sky-900 pl-2 w-7 h-7'/> :  
              <PiHeartStraightFill 
              className=' text-sky-900 pl-2 w-7 h-7'/>
            }
          </Link>
          <Link to='/cart'>
            {
              cartItems.length == 0 ? <MdOutlineShoppingCart className='text-sky-900 pl-2 w-7 h-7'/> : 
              <MdShoppingCart className='text-sky-900 pl-2 w-7 h-7'/>
            }
          </Link>
        </div>
    </div>
    </div>
    
  )
}

export default Header;
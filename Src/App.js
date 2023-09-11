import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error"
import Categories from "./Components/Categories";
import SubCategories from "./Components/SubCategories";
import ProductsItems from "./Components/ProductsItems";
import ProductInfo from "./Components/ProductInfo";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import store from "./Components/utils/store";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout";

const AppLayout = () =>{
    return(
        <div className=" bg-gray-100">
            <Provider store = {store}>
                <Header/>
                <Outlet/>
                <Footer/>
            </Provider>
        </div>
    )
}
const AppRouter = createBrowserRouter([
    {  
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/categories',
                element: <Categories/>,
            },
            {
                path: '/categories/:category_id',
                element: <SubCategories/>,
            },
            {
                path: '/subcategories/:subcategory_id',
                element: <ProductsItems/>,
            },
            {
                path: '/products/:product_id',
                element: <ProductInfo/>,
            },
            {
                path: '/wishlist',
                element: <Wishlist/>,
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/checkout',
                element: <Checkout/>,
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

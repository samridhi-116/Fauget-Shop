import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState: {
        items:[]
    },
    reducers:{
        addWishlist: (state, action)=>{
            state.items.push(action.payload)
        },
        removeWishlist: (state, action)=>{
            state.items.pop(action.payload);
        },
        clearWishlist: (state)=>{
            state.items=[]
        }
    }
});

export const {addWishlist, removeWishlist, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;

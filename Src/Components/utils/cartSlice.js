import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[],
        totalItems: 0,
        itemPrice: 0,
        deliveryPrice: 0,
    },
    reducers:{
        addItem: (state, action)=>{
            const newItem = action.payload.item;
            const existingItem = state.items.find((item) => item.product_id === newItem.product_id);

            if (!existingItem) {
                state.items.push( action.payload);
                state.totalItems += 1;
            }
            state.itemPrice += newItem.price;
            state.deliveryPrice += newItem.delivery_charges;
        },

        updateItem: (state, action)=>{
            const { item, count } = action.payload;
            const existingItem = state.items.find(
                (cartItem) => cartItem.product_id === item.product_id
            );

            if (existingItem) {
                existingItem.count = count;
                state.itemPrice += (count - existingItem.count) * item.price;
                state.deliveryPrice += (count - existingItem.count) * item.delivery_charges;
            }
            state.itemPrice += action.payload.item.price;
            state.deliveryPrice += action.payload.item.delivery_charges;
        },

        removeItem: (state, action)=>{
            const removedItem = action.payload.item;
            const existingItem = state.items.find((item) => item.product_id === removedItem.product_id);

            if (!existingItem) {
                state.items.splice( action.payload, 1);
                state.totalItems -= 1;
            }
            state.itemPrice -= removedItem.price;
            state.deliveryPrice -= removedItem.delivery_charges;
        },
        clearCart: (state)=>{
            state.items=[],
            state.totalItems = 0; 
            state.totalPrice = 0;
            state.deliveryPrice = 0;
        }
    }
});

export const {addItem, removeItem, updateItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

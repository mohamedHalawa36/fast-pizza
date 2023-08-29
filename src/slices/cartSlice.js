import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducer:{
        clearCart:(state)=>{state=[]},
        addToCart:(state,action)=>{state.push(action.payload.id)},
        deleteFromCart:(state,action)=>{
            state = state.filter((item)=>item.id !== action.payload.id);
        },
        incQuantity:(state,action)=>{
            const item = state.find((element)=>element.id === action.payload.id);
            item.quantity++;
        },
        decQuantity:(state,action)=>{
            const item = state.find((element)=>element.id === action.payload.id);
            item.quantity--;
        },
    },
})

export const {clearCart,addToCart,deleteFromCart,incQuantity,decQuantity} = cartSlice.actions
export default cartSlice.reducer
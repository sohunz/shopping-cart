import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
    products: products,
    cartCount: 0,
};

export const cartSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        addCart: (state) => {
            state.cartCount += 1;
        },
        removeAllCart: (state) => {
            state.products = [];
            state.cartCount = 0;
        },
        removeCart: (state, action) => {
            const remove = state.products.filter(
                (item) => item.id !== action.payload
            );
            state.products = remove;
        },
    },
});

export const { addCart, removeAllCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;

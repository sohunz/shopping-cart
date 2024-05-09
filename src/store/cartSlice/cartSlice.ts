import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
    products: products,
    amount: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            let cartItem: any = state.products.find(
                (item) => item.id === action.payload
            );
            cartItem = state.total += 1;
        },
        reduceCard: (state, action) => {
            let cartItem: any = state.products.find(
                (item) => item.id === action.payload
            );
            cartItem = state.total -= 1;
        },
        removeAllCart: (state) => {
            state.products = [];
            state.total = 0;
        },
        removeCart: (state, action) => {
            const remove = state.products.filter(
                (item) => item.id !== action.payload
            );
            state.products = remove;
        },
    },
});

export const { addCart, reduceCard, removeAllCart, removeCart } =
    cartSlice.actions;

export default cartSlice.reducer;

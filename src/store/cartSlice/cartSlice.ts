import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
    products: products.map((product) => ({ ...product, count: 1 })),
    total: 4,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                state.products[index].count += 1;
                state.total += 1;
            }
        },
        reduceCard: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1 && state.products[index].count > 0) {
                state.products[index].count -= 1;
                state.total -= 1;
            }
        },
        removeAllCart: (state) => {
            state.products = [];
            state.total = 0;
        },
        removeCart: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1 && state.products[index].count > 0) {
                state.total -= state.products[index].count;
                state.products.splice(index, 1);
            }
        },
    },
});

export const { addCart, reduceCard, removeAllCart, removeCart } =
    cartSlice.actions;

export default cartSlice.reducer;

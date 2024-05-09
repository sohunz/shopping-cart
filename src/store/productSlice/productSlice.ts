import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = products;

export const productSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        clearProduct: (state) => {
            return (state = []);
        },
    },
});

export const { clearProduct } = productSlice.actions;

export default productSlice.reducer;

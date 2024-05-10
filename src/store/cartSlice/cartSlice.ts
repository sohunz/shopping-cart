import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const allPrice = products.map((product) => product.price);
const sumPrice = allPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

const initialState = {
    products: products.map((product) => ({
        ...product,
        count: 1,
        productPrice: product.price,
    })),
    total: 4,
    totalPrice: sumPrice,
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

                state.totalPrice =
                    state.products[index].price + state.totalPrice;

                console.log(state.totalPrice);
            }
        },
        reduceCard: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1 && state.products[index].count > 0) {
                state.products[index].count -= 1;
                state.total -= 1;

                state.totalPrice =
                    state.totalPrice - state.products[index].price;

                if (state.products[index].count === 0) {
                    state.products.splice(index, 1);
                }
            }
        },
        removeAllCart: (state) => {
            state.products = [];
            state.total = 0;
            state.totalPrice = 0;
        },
        removeCart: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1 && state.products[index].count > 0) {
                state.total -= state.products[index].count;

                state.totalPrice =
                    state.totalPrice -
                    state.products[index].price * state.products[index].count;

                state.products.splice(index, 1);
            }
        },
        totalPrice: (state) => {
            state.totalPrice = state.products.reduce(
                (accumulator, product: any) =>
                    accumulator + parseFloat(product.price) + product.price,
                0
            );
        },
    },
});

export const { addCart, reduceCard, removeAllCart, removeCart, totalPrice } =
    cartSlice.actions;

export default cartSlice.reducer;

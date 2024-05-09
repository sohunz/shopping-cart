import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import productReducer from "./productSlice/productSlice";

export const store = configureStore({
    reducer: {
        addCart: cartReducer,
        products: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

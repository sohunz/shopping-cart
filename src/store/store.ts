import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";

export const store = configureStore({
    reducer: {
        addCart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

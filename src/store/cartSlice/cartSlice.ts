import { createSlice } from "@reduxjs/toolkit";

interface stateTypes {
    cartCount: number;
}

const initialState: stateTypes = { cartCount: 0 };

export const cartSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        addCard: (state) => {
            state.cartCount += 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addCard } = cartSlice.actions;

export default cartSlice.reducer;

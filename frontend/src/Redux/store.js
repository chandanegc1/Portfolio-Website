import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/ProjectDataSlice.js";
import pathSlice from "./Slices/pathSlice.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        path: pathSlice
    }
});

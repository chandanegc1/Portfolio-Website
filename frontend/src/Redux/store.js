import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./Slices/ProjectDataSlice.js";
import pathSlice from "./Slices/pathSlice.js";

export const store = configureStore({
    reducer: {
        project: projectSlice,
        path: pathSlice
    }
});

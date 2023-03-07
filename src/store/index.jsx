import { configureStore } from "@reduxjs/toolkit";
import gerenatedImagesSlice from "./slices/GenerateImagesSlice";

const store = configureStore({
    reducer:{
        StartCreatingPageImage:gerenatedImagesSlice,
    },
})

export default store
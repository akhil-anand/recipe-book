import { configureStore } from "@reduxjs/toolkit";
import CollectionSlice from "./collections/collections";

export const store = configureStore({
    reducer: {
        CollectionSlice
    }
})
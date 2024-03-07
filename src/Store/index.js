import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "./Slicers/CounterSlice";


const store = configureStore({
    reducer: { CounterSliceReducer },
})

export default store

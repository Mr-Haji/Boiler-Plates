import { configureStore } from "@reduxjs/toolkit";
import toDoSliceReducer from "./Slicers/ToDoSlice/toDoSlice";
import counterSliceReducer from "./Slicers/counterSlice/index";


const store = configureStore({
   reducer: { toDoSliceReducer,
    counterSliceReducer },
})

export default store
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Counter: 0,
}
const counterSlice = createSlice(
    {
        name: "counterSlice",
        initialState,
        reducers:
        {

            AddCount: (state, action) => {
                // console.log(action)
                state.Counter = ++state.Counter
            }
            , DecCount: (state, action) => {
                // console.log(action)

               
                    state.Counter != 0 ? --state.Counter :""
               

            }
        }
    }
)
const { actions, reducer } = counterSlice;
export const { AddCount, DecCount } = actions;
export default reducer;             
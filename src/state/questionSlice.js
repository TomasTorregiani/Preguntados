import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    points: 0
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value += 1,
            state.points += action.payload
        },
        unsetValue: (state) => {
            state.value = 0,
            state.points = 0
        }
    }
})

export const { setValue, unsetValue } = questionSlice.actions

export default questionSlice.reducer
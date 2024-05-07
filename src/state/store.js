import { configureStore } from "@reduxjs/toolkit"
import questionReducer from "./questionSlice"
import playersReducer from "./playerSlice"

export const store = configureStore({
    reducer: {
        question: questionReducer,
        players: playersReducer
    }
})
import { configureStore } from '@reduxjs/toolkit'
import listReducer from './list/listSlice'

export const store = configureStore({
    reducer: {
        list: listReducer,
    },
})

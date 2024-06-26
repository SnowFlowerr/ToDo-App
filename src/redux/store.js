import { configureStore } from '@reduxjs/toolkit'
import listReducer from './list/listSlice'


// configureStore from Redux Toolkit simplifies the process of setting up a Redux store by providing sensible defaults and enabling features like Immer and Redux DevTools Extension out of the box. It also reduces the amount of boilerplate code needed to set up your store.

export const store = configureStore({
    reducer: {
        list: listReducer,
    },
})

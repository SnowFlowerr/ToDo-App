import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

// createSlice is a function provided by Redux Toolkit that allows you to create a slice of your Redux state with a reducer function and action creators in a more concise way.

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes

        // To add a new element on the array.
        addList: (state, action) => {
            state.value = [...state.value, action.payload]
            localStorage.setItem("data",JSON.stringify(state.value))
        },

        // To remove a particular index
        removeList: (state, action) => {
            state.value=state.value.filter((ele,ind)=>ind!==action.payload)
            localStorage.setItem("data",JSON.stringify(state.value))
        },

        // To remove all the elements from the array
        removeAll: (state) => {
            state.value=[]
            localStorage.setItem("data",JSON.stringify(state.value))
        },

        // To checked the checkbox
        check: (state, action) => {
            state.value[action.payload]={text:state.value[action.payload].text,check:"on"}
            localStorage.setItem("data",JSON.stringify(state.value))
        },

        // To unchecked the checkbox
        unCheck: (state, action) => {
            state.value[action.payload]={text:state.value[action.payload].text,check:""}
            localStorage.setItem("data",JSON.stringify(state.value))
        },

        // To update the state.value with the localstorage
        localData: (state, action) =>{
            state.value=JSON.parse(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addList, removeList, removeAll, localData, check, unCheck } = listSlice.actions

export default listSlice.reducer
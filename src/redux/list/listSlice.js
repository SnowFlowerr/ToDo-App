import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        addList: (state, action) => {
            state.value = [...state.value, action.payload]
            localStorage.setItem("data",JSON.stringify(state.value))
        },
        removeList: (state, action) => {
            state.value=state.value.filter((ele,ind)=>ind!==action.payload)
            localStorage.setItem("data",JSON.stringify(state.value))
        },
        removeAll: (state) => {
            state.value=[]
            localStorage.setItem("data",JSON.stringify(state.value))
        },
        check: (state, action) => {
            state.value[action.payload]={text:state.value[action.payload].text,check:"on"}
            localStorage.setItem("data",JSON.stringify(state.value))
        },
        unCheck: (state, action) => {
            state.value[action.payload]={text:state.value[action.payload].text,check:""}
            localStorage.setItem("data",JSON.stringify(state.value))
        },
        localData: (state, action) =>{
            state.value=JSON.parse(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addList, removeList, removeAll, localData, check, unCheck } = listSlice.actions

export default listSlice.reducer
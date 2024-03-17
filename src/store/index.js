import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        ShowCounter: true
    },
    reducers:{
        increment: (state) => {
            state.counter++
        },
        decrement: (state) => {
            state.counter--
        },
        increase: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        toggle: (state) => {
            state.ShowCounter = !state.ShowCounter
        },
    }
})
export const counterActions = counterSlice.actions;

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuthenticated: false},
    reducers: {
        login: (state) => {state.isAuthenticated = true},
        logout: (state) => {state.isAuthenticated= false},
    }
})
export const authActions = authSlice.actions;
const store = configureStore({
    reducer: {
        counter:  counterSlice.reducer,
        auth:  authSlice.reducer,
    }
})
export default store
import {createSlice} from '@reduxjs/toolkit'

let initialState = {value: JSON.parse(localStorage.getItem('playVideo'))} || {value: {}};
const playSlice = createSlice({
    name: "play",
    initialState,
    reducers: {
        changePlay: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changePlay} = playSlice.actions
export default playSlice.reducer
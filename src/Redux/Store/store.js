import { configureStore } from '@reduxjs/toolkit'
import playReducer from './../Slice/MySingleCoursePlaySlice'

const store = configureStore({
    reducer: {
        play: playReducer
    }
})
export default store
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import questionReducer from './features/questionSlice'

const store = configureStore({
    reducer: {
        userState: userReducer,
        questionState: questionReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
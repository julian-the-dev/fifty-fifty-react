import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from '../../features/user/userSlice'

const store = configureStore({
    reducer: {
        user: userSlice as any,
    },
})

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

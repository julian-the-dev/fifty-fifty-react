import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import fiftyFiftySlice from '../../features/fifty-fifty/FiftyFiftySlice';
import userSlice from '../../features/user/userSlice';

const store = configureStore({
    reducer: {
        userInfo: userSlice as any,
        fiftyfiftyList: fiftyFiftySlice as any
    },
})

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

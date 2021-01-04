import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
    toto: '1',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export default userSlice.reducer;

export const selectUser = createSelector(
    (state: any) => state.user,
    (user) => user
)

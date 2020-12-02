import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toto: '1',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export default userSlice

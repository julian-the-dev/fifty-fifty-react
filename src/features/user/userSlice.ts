import { LOADING } from './../../common/common.const'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { HttpUtils } from '../../common/http/http.utils'

const initialState = {
    light: null,
    error: '',
    state: LOADING.idle,
}

const headers = {
    'Content-Type': 'application/json',
}

export const loadLightUser: any = createAsyncThunk(
    'user/loadUser',
    // The payload creator receives the partial `{title, content, user}` object
    async () => {
        const response = await HttpUtils.get('/api/v1/user/light', true, headers)
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return response.data
    }
)
const loadUserReducer: any = {
    [loadLightUser.pending]: (state: any, action: any) => {
        state.status = LOADING.idle
    },
    [loadLightUser.rejected]: (state: any, action: any) => {
        state.status = LOADING.error
        state.error = action.error.message
    },
    [loadLightUser.fulfilled]: (state: any, action: any) => {
        state.status = LOADING.idle
        state.light = action.payload
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        ...loadUserReducer,
    },
})

export default userSlice.reducer

export const selectLightUser = createSelector(
    (rootState: any) => rootState.userInfo,
    (state) => state.light
)

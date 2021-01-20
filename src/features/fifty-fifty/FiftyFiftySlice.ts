import { HttpUtils } from './../../common/http/http.utils'
import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
    EntityAdapter,
} from '@reduxjs/toolkit'
import { LOADING } from './../../common/common.const'
import { FiftyFifty } from './FiftyFifty'

const adapter: EntityAdapter<FiftyFifty> = createEntityAdapter()

const initialState = adapter.getInitialState({
    status: LOADING.idle,
    error: null,
})

const headers = {
    'Content-Type': 'application/json',
}

export const loadFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/loadFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async () => {
        const result: any = await HttpUtils.get(
            '/api/v1/fifty-fifty/list',
            false,
            headers
        )
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return result.data
    }
)

const loadFiftyFiftyReducers = {
    [loadFiftyFifty.pending]: (state: any, action: any) => {
        state.status = LOADING.loading
    },
    [loadFiftyFifty.rejected]: (state: any, action: any) => {
        state.status = LOADING.error
        state.error = action.error.message
    },
    [loadFiftyFifty.fulfilled]: (state: any, action: any) => {
        state.status = LOADING.idle
        adapter.addMany(state, action.payload)
    },
}

export const addFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/addFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async (newFiftyFifty: any, thunkApi) => {
        const user = (thunkApi.getState() as any).userInfo.light;
        newFiftyFifty.user = user.id ?? null;
        const result: any = await HttpUtils.post(
            '/api/v1/fifty-fifty/create',
            newFiftyFifty,
            true,
            headers
        )
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return { id: result.data, ...newFiftyFifty }
    }
)

const addFiftyReducers = {
    [addFiftyFifty.pending]: (state: any, action: any) => {
        state.status = LOADING.loading
    },
    [addFiftyFifty.rejected]: (state: any, action: any) => {
        state.status = LOADING.error
        state.error = action.error.message
    },
    [addFiftyFifty.fulfilled]: (state: any, action: any) => {
        state.status = LOADING.idle
        adapter.addOne(state, action.payload)
    },
}

export const updateFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/updateFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async (fiftyFiftyToEdit: any) => {
        const result = await HttpUtils.put(
            '/api/v1/fifty-fifty/update',
            fiftyFiftyToEdit,
            false,
            headers
        )
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return fiftyFiftyToEdit
    }
)
const updateFiftyFiftyReducers: any = {
    [updateFiftyFifty.pending]: (state: any, action: any) => {
        state.status = LOADING.idle
    },
    [updateFiftyFifty.rejected]: (state: any, action: any) => {
        state.status = LOADING.error
        state.error = action.error.message
    },
    [updateFiftyFifty.fulfilled]: (state: any, action: any) => {
        state.status = LOADING.idle
        adapter.upsertOne(state, action.payload)
    },
}

export const deleteFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/deleteFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async (fiftyToRemove: any) => {
        const result = await HttpUtils.delete(
            '/api/v1/fifty-fifty/delete/' +
                fiftyToRemove.id,
            false,
            headers
        )
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return fiftyToRemove
    }
)
const deleteFiftyFiftyReducers: any = {
    [deleteFiftyFifty.pending]: (state: any, action: any) => {
        state.status = LOADING.idle
    },
    [deleteFiftyFifty.rejected]: (state: any, action: any) => {
        state.status = LOADING.error
        state.error = action.error.message
    },
    [deleteFiftyFifty.fulfilled]: (state: any, action: any) => {
        state.status = LOADING.idle
        adapter.removeOne(state, action.payload.id)
    },
}

const fiftyFiftySlice = createSlice({
    name: 'fiftyfifty',
    initialState,
    reducers: {},
    extraReducers: {
        ...deleteFiftyFiftyReducers,
        ...loadFiftyFiftyReducers,
        ...addFiftyReducers,
        ...updateFiftyFiftyReducers,
    },
})

export default fiftyFiftySlice.reducer

// Export the customized selectors for this adapter using `getSelectors`
export const {
    selectAll: getFiftyFiftyList,
    selectById: getFiftyFiftyById,
    selectIds: getFiftyFiftyByIds,
    // Pass in a selector that returns the posts slice of state
} = adapter.getSelectors((state: any) => state.fiftyfiftyList)

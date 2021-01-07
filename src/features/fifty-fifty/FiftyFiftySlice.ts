import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
    EntityAdapter,
    nanoid,
} from '@reduxjs/toolkit'
import { LOADING } from './../../common/common.const'
import { FiftyFifty } from './FiftyFifty'

const adapter: EntityAdapter<FiftyFifty> = createEntityAdapter()

const initialState = adapter.getInitialState({
    status: LOADING.idle,
    error: null,
})

export const addFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/addFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async (newFiftyFifty: any) => {
        console.log('Add Fifty', newFiftyFifty);
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return {id: nanoid(), ...newFiftyFifty}
    }
)

export const updateFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/updateFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async (fiftyFiftyToEdit: any) => {
        console.log('Edit Fifty', fiftyFiftyToEdit);
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return fiftyFiftyToEdit;
    }
)

const fiftyFiftySlice = createSlice({
    name: 'fiftyfifty',
    initialState,
    reducers: {},
    extraReducers: {
        [addFiftyFifty.rejected]: (state, action) => {
            state.status = LOADING.error
            state.error = action.error.message
        },
        [addFiftyFifty.fulfilled]: adapter.addOne,
        [updateFiftyFifty.fulfilled]: adapter.upsertOne
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

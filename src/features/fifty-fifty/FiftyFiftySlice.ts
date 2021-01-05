import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
    nanoid,
} from '@reduxjs/toolkit'
import { LOADING } from './../../common/common.const'

const adapter = createEntityAdapter()

const initialState = adapter.getInitialState({
    status: LOADING.idle,
    error: null,
})

export const addFiftyFifty: any = createAsyncThunk(
    'fiftyfifty/addNewFiftyFifty',
    // The payload creator receives the partial `{title, content, user}` object
    async (newFiftyFifty: any) => {
        console.log('Do I pass here ?', newFiftyFifty);
        // We send the initial data to the fake API server
        //const response = await client.post("/fakeApi/posts", { post: initialPost });
        // The response includes the complete post object, including unique ID
        return {id: nanoid(), ...newFiftyFifty}
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

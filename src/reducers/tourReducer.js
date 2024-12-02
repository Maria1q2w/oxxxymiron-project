import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '../components/utils/common';
import { tourItemCollectionQuery } from '../components/utils/queries';

const initialState =  {
    items: [],
    isLoading: false
}

export const getTourItems = createAsyncThunk("tourItems/getTourItems",
async (_, thunkAPI) => {
    try {
        console.log(thunkAPI, "thunkAPI");
    const data = await request(tourItemCollectionQuery) 
    const  { items } = data.tourItemCollection
    return items
    } catch(err) {
        return thunkAPI.rejectWithValue(err);
    }

}
) 

const tourItemsSlice = createSlice ({
    name: "tourItems",
    initialState,

    extraReducers: (builder) => {
        console.log(builder);
        builder.addCase(getTourItems.pending, (state) => {
            state.isLoading = true;
        }).addCase(getTourItems.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
        }).addCase(getTourItems.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default tourItemsSlice.reducer;
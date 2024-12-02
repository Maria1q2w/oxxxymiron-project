import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '../components/utils/common';
import { productItemCollectionQuery, productItemQuery } from '../components/utils/queries';

const initialState =  {
    items: [],
    item: null,
    isLoading: false,
    currentMaterial: null
}

export const getProductItems = createAsyncThunk("productItems/getProductItems",
async (material, thunkAPI) => {
    try {
    const data = await request(productItemCollectionQuery(material));
    console.log('Data fetched:', data);
    const items = data.productItemCollection?.items || [];
    return { items, material };
    } catch(err) {
        console.log('Error fetching products:', err); 
        return thunkAPI.rejectWithValue(err)
    }

}
) 

export const getProductItem = createAsyncThunk("productItems/getProductItem",
async (id, thunkAPI) => {
    try {
    const data = await request(productItemQuery(id));
    const items  = data.productItem;
    return items
    } catch(err) {
        return thunkAPI.rejectWithValue(err)
    }

}
)  

const productItemsSlice = createSlice ({
    name: "productItems",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getProductItems.pending, (state) => {
            state.isLoading = true;
        }).addCase(getProductItems.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = payload.items;
            state.currentMaterial = payload.material;
        }).addCase(getProductItems.rejected, (state) => {
            state.isLoading = false;
        }).addCase(getProductItem.pending, (state) => {
            state.isLoading = true;
        }).addCase(getProductItem.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.item = payload;
        }).addCase(getProductItem.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default productItemsSlice.reducer;
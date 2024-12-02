import { configureStore } from '@reduxjs/toolkit';
import basketSliceReducer from '../reducers/basketSliceReducer';
import newsReducer from '../reducers/newsReducer';
import shopReducer from '../reducers/shopReducer';
import tourReducer from '../reducers/tourReducer';
import tracksReducer from '../reducers/tracksReducer';

export const store = configureStore({
    reducer: {
        tour: tourReducer,
        news: newsReducer,
        tracks: tracksReducer,
        product: shopReducer,
        basket: basketSliceReducer
    },
    devTools: true,
});
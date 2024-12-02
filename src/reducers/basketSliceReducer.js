import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        items: [],
        clickBasket: null,
        clickBasketMinus: null,
    },
    reducers: {
        addItemToBasket: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.items.push({...action.payload, quantity: action.payload.quantity || 1})
            }
        }, 
        removeItemFromBasket: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload; 

            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (quantity === 0) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity = quantity;
                }
            }

            // const itemIndex = state.items.findIndex((item) => {
            // return item.id === id; 
            // });

            // if (itemIndex !== -1) {
            //     if (quantity === 0) {
            //         state.items.splice(itemIndex, 1);
            //     } else {
            //         state.items[itemIndex].quantity = quantity;
            //     }
            // } else if (quantity > 0) {
            //     state.items.push({ id, quantity });
            // }
        },
        clearBasket: (state) => {
            state.items = [];
        },
        setClickBasket(state, action) {
            console.log(state.clickBasket);
            state.clickBasket = action.payload;
        },
        setClickBasketMinus(state, action) {
            state.clickBasketMinus = action.payload;
        },
    },
});

export const { addItemToBasket, removeItemFromBasket, updateItemQuantity, clearBasket, setClickBasket, setClickBasketMinus } = basketSlice.actions;
export default basketSlice.reducer;
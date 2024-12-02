import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket, removeItemFromBasket, updateItemQuantity } from "../../reducers/basketSliceReducer";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const dispatch = useDispatch();
    const basketItems = useSelector((state) => state.basket.items);

    const handleAddToBasket = (item) => {
        dispatch(addItemToBasket({ id: item.id, title: item.title, sum: item.sum, quantity: 1 }));
    }
    const handleRemoveFromBasket = (id) => {
        const item = basketItems.find((item) => item.id === id);
        const quantity = item ? item.quantity : 0;

        console.log(item, "itemop");

        if (quantity > 1) {
            dispatch(updateItemQuantity({ id, quantity: quantity - 1 }));
        } else if (quantity === 1) {
            dispatch(removeItemFromBasket(id));
        }
    };

    const clickBasket = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        handleAddToBasket(item);
        console.log("plus");
    };

    const clickBasketMinus = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("ssss");
        handleRemoveFromBasket(id);
    };

    return (
        <BasketContext.Provider value={{ clickBasket, clickBasketMinus }}>
            {children}
        </BasketContext.Provider>
    );
}

export const useBasket = () => useContext(BasketContext);
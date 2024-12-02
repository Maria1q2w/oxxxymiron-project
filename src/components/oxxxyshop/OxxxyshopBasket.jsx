import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket, removeItemFromBasket } from '../../reducers/basketSliceReducer';
import s from '../styles/index.module.scss';
import PageTitle from '../Title/PageTitle';
import { useBasket } from './BasketContext';
import Quantity from './OxxxyshopBasketQuantity';

const OxxxyshopBasket = () => {
    const basketItems = useSelector((state) => state.basket.items);
    const dispatch = useDispatch();
    const result = [];
    const { clickBasket, clickBasketMinus } = useBasket();

    // const handleAddToBasket = (e, item) => {
    //     if (clickBasket) {
    //         clickBasket(e, item); 
    //     }
    // };
    
    // const handleRemoveFromBasket = (e, id) => {
    //     if (clickBasketMinus) {
    //         clickBasketMinus(e, id);
    //     }
    // };
    
    const handleRemoveItem = (id) => {
        dispatch(removeItemFromBasket(id));
    }

    const handleClearBasket = () => {
        dispatch(clearBasket());
    }

    const resultSumItem = (item) => {
        result.push(`${item.quantity * item.sum}`)
        return `${item.quantity * item.sum}`
    }

    const resultSum = () => {
        const finallySum = result.reduce((sum, num) => sum + Number(num), 0)
        return finallySum;
    }

    return (
        <section className={`${s.oxxxyshopBasket} ${s.page}`} >
        <div className={s.container}>
            <PageTitle text="Basket" />
            {basketItems.length === 0 ? (<p>Корзина пуста</p>) : (
                <ul className={s.oxxxyshopBasketList} >
                    {basketItems.map((item) => (
                        <li className={s.oxxxyshopBasketListItem} key={item.id}>
                            <span className={s.oxxxyshopBasketListItemTitle} >{item.title} </span> 
                            <div className={s.oxxxyshopBasketListItemSum} >
                                {item.quantity} шт. × {item.sum} ₽ = {resultSumItem(item)} ₽
                            </div>
                            <Quantity quantity={item.quantity}
                            clickBasket={clickBasket} 
                            clickBasketMinus={clickBasketMinus} 
                            //clickBasketMinus={(e) => handleRemoveFromBasket(item.id)}
                            id={item.id} title={item.title} sum={item.sum} />
                            <button className={s.oxxxyshopBasketListItemDelete} onClick={() => handleRemoveItem(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className={s.oxxxyshopBasketListFinally}>
                {basketItems.length !== 0 ? (<div className={s.oxxxyshopBasketListResult}>Итого: {resultSum()} ₽ </div>) : ""}
                <button className={s.oxxxyshopBasketListClearBasket} onClick={handleClearBasket}>Очистить корзину</button>
            </div>
            </div>
    </section>
    )
    
}
export default OxxxyshopBasket;
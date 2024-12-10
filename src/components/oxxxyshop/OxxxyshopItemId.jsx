import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductItem } from '../../reducers/shopReducer';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import { jsonToText } from '../utils/common';
import { useBasket } from './BasketContext';
import Quantity from './OxxxyshopBasketQuantity';

const OxxxyshopItemId = () => {
    const itemsId = useSelector((state) => state.basket.items)
    const { clickBasket, clickBasketMinus } = useBasket();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { item, isLoading } = useSelector(({ product }) => product);

    const title = item?.title;
    const sum = item?.sum;

    useEffect(() => {
        const initiaizeProduct = async () => {
            await dispatch(getProductItem(id))
        }
        initiaizeProduct();
    }, [dispatch, id])

    const currentBasketItem = itemsId.find((basketItem) => basketItem.id === id);
    const quantity = currentBasketItem ? currentBasketItem.quantity : 0;

    const resultSum = (item) => {
        return item.sum * quantity
    }

    return (
        <section className={`${s.page} ${s.oxxxyshopProduct}`}>
            <div className={s.container} >
                {isLoading || !item ? <Loader /> : (
                    <div className={s.oxxxyshopProductItemId}>
                        <div className={s.oxxxyshopProductItem} >
                            <h1 className={s.oxxxyshopProductTitle}>
                                {item.title}
                            </h1>
                            <img className={s.oxxxyshopProductImage} src={item.cover.url} />
                            <h2 className={s.oxxxyshopProductPrice}>
                                {item.sum}₽
                            {item.oldPrice != null ? (
                                    <span className={`${s.oxxxyshopListContainerItemOldPrice} ${s.oxxxyshopProductOldPrice}`}>
                                        {item.oldPrice}₽
                                    </span>) : ""}
                            </h2>
                            <div>
                                {jsonToText(item.description.json)}
                            </div>
                        </div>
                        <div className={s.oxxxyshopProductFooter}>
                            <div className={s.oxxxyshopProductFooterCount} >
                                <Quantity quantity={quantity} clickBasket={clickBasket}
                                    clickBasketMinus={clickBasketMinus}
                                    id={id} title={item.title} sum={item.sum}
                                />
                                {quantity != 0 ? (
                                    <div className={s.oxxxyshopProductFooterSum} >
                                        {quantity} шт. × {item.sum} ₽ = {resultSum(item)} ₽
                                    </div>) : ""}
                            </div>

                            <div type="button" onClick={(e) => { clickBasket(e, { id, title, sum }) }} className={`${s.oxxxyshopListContainerItemButton} ${s.oxxxyshopListContainerItemBasket}`} >
                                <Icon name="basket" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OxxxyshopItemId;
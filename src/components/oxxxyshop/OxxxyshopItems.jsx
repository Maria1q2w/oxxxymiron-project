import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToBasket, removeItemFromBasket, updateItemQuantity } from '../../reducers/basketSliceReducer';
import Icon from '../Icon/Icon';
import s from '../styles/index.module.scss';
import Quantity from './OxxxyshopBasketQuantity';

const OxxxyshopItems = ({ title, url, id, sum, i, oldPrice, quantity, clickBasketMinus, clickBasket }) => {
    return (<Link to={`/shop/${id}`}>
            <div key={id} className={s.oxxxyshopListContainerItem}>
                <h3 className={s.oxxxyshopListContainerTitle} >
                    {title}
                </h3>
                <img className={s.oxxxyshopListContainerItemImg} src={url} alt="card" />
                <h4 className={s.oxxxyshopListContainerItemSum}>
                    {oldPrice != null ? <div className={s.oxxxyshopListContainerItemOldPrice} >{oldPrice}₽</div> : "" }
                    {sum}₽
                    </h4>
                <Quantity title={title} 
                id={id} 
                sum={sum} 
                quantity={quantity} 
                clickBasketMinus={clickBasketMinus} 
                clickBasket={clickBasket} />
                <div type="button" onClick={(e) => {clickBasket(e, {id, title, sum})}} className={`${s.oxxxyshopListContainerItemButton} ${s.oxxxyshopListContainerItemBasket}`} >
                    <Icon name="basket" />
                </div>
            </div>
            </Link>
    )
}

export default OxxxyshopItems;
import React from 'react';
import Icon from '../Icon/Icon';
import s from '../styles/index.module.scss';

const Quantity = ({ quantity, clickBasketMinus, clickBasket, id, title, sum }) => (
    <div>
        {(quantity != 0) ? (<div className={s.oxxxyshopListContainerItemNumber}>
            <button onClick={(e) => { clickBasketMinus(e, id) }}>
                <Icon name="material" />
            </button>
            {quantity}
            <button onClick={(e) => { clickBasket(e, { id, title, sum }) }} >
                <Icon name="plus" />
            </button>
        </div>) : ''}
    </div>
)
export default Quantity;
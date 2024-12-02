import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductItem } from '../../reducers/shopReducer';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import { jsonToText } from '../utils/common';

const OxxxyshopItem = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const { item, isLoading } = useSelector(({ product }) => product );

    useEffect(() => {
        const initiaizeProduct = async () => {
            await dispatch(getProductItem(id))
        }
        initiaizeProduct();
    }, [dispatch, id])

    return (
        <section className={`${s.page} ${s.oxxxyshopProduct}`}>
            <div className={s.container} >
                {isLoading || !item ? <Loader /> : (
                    <div className={s.oxxxyshopProductItem}>
                        <h1 className={s.oxxxyshopProductTitle}>
                            {item.title}
                        </h1>
                        <img className={s.oxxxyshopProductImage} src={item.cover.url} />
                        <h2 className={s.oxxxyshopProductPrice}>
                            {item.sum}₽
                            <span className={`${item.oldPrice != null ? s.oxxxyshopListContainerItemOldPrice : s.oxxxyshopListContainerItemNotOldPrice}`}>
                                {item.oldPrice}₽
                            </span>
                        </h2>
                        <div>
                            {jsonToText(item.description.json)}
                        </div>
                </div>
                ) }
            </div>
        </section>
    )
}

export default OxxxyshopItem;
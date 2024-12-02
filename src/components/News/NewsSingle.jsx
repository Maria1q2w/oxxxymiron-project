import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNewsItem } from '../../reducers/newsReducer';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import { getLocalDateString, jsonToText } from '../utils/common';

const NewsSingle = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const { item, isLoading } = useSelector(({ news }) => news );

    useEffect(() => {
        const initiaizeNews = async () => {
            await dispatch(getNewsItem(id))
        }
        initiaizeNews();
    }, [dispatch, id])

    return(
        <section className={`${s.page} ${s.newsSingle}`} >
            <div className={s.container}>
                {isLoading || !item ? (<Loader />) : (
                    <div className={s.newsSingleItem}>
                        <h1 className={s.newsSingleItemTitle}>
                            {item.title}
                        </h1>
                        <p className={s.newsSingleItemDate}>
                            {getLocalDateString(item.date, {month: "long"})}
                        </p>
                        <div className={s.newsSingleItemContent}>
                            {jsonToText(item.description.json)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default NewsSingle;
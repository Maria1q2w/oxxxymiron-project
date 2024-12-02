import React from 'react';
import { Link } from 'react-router-dom';
import { useNewsItems } from '../hooks/useNewsItems';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import PageTitle from '../Title/PageTitle';
import { getLocalDateString } from '../utils/common';

const NewsPage = () => {
    const { items, isLoading } = useNewsItems();

    return (
        <section className={`${s.newsPage} ${s.page}`}>
            <div className={s.container}>
                <PageTitle text="Все новости" />
                {isLoading ? <Loader /> : (
                    <div className={s.newsList}>
                        {items.map(({ title, date, cover: {url}, sys: {id} }) => {

                            return (
                                <div className={s.newsListItem} key={id} >
                                    <div className={s.newsListItemImg} style={{backgroundImage: `url(${url})`}} />
                                    <div className={s.newsListItemInfo}>
                                        <p className={s.newsListItemDate}>
                                            {getLocalDateString(date, { month: "short"})}
                                        </p>
                                        <h2 className={s.newsListItemTitle}>
                                            {title}
                                        </h2>
                                        <Link className={s.newsListItemButton} to={`/news/${id}`}>
                                            <span>Читать</span>
                                            <Icon name="arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
export default NewsPage;
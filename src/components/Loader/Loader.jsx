import React from 'react';
import loader from '../images/loader.webp';
import s from '../styles/index.module.scss';

const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt="Loading..." />
        </div>
    )
}

export default Loader;
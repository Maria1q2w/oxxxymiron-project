import React from 'react';
import s from '../styles/index.module.scss';

const PageTitle = ({text}) => {
    return (
            <h1 className={s.pageTitle} >{text}</h1>
    )
}

export default PageTitle;
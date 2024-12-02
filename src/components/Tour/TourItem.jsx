import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Icon from '../Icon/Icon';
import s from '../styles/index.module.scss';
import { getLocalDateString } from '../utils/common';

const TourItem = ({date, city, place, ticketLink, videoLink, soldOut, i, offset = 260}) => {
    return (
        <li>
            <ScrollAnimation className={s.tourItem} animateIn="fadeInLeft" animateOut="fadeOutRight" delay={i * 100} offset={offset} >
                <div className={s.tourItemInfo} >
                    <div className={s.tourItemDate}>
                        {getLocalDateString(date, {})}
                    </div>
                    <p className={s.tourItemPlace} >
                        {place}
                    </p>
                </div>
                <p className={s.tourItemCity}>
                    {city}
                </p>
                {!soldOut ? (
                    <a href={ticketLink || videoLink} target="__black" className={s.tourItemButton}> 
                    {ticketLink ? (
                        <>
                            <span>Билеты</span>
                            <Icon name="arrow-right" width="16px" height="18px" />
                        </>
                    ) : (
                        <span>Видео</span>
                    )} </a>
                ) : (
                    <button className={`${s.tourItemButton} ${s.soldout}`} >
                        Sold out 
                    </button>
                ) }
            </ScrollAnimation>
        </li>
    )
}

export default TourItem;
import React from 'react';
import { getTourItems } from '../../reducers/tourReducer';
import Section from '../Section/Section';
import s from '../styles/index.module.scss';
import SectionTitle from '../Title/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import TourItem from './TourItem';
import { Link } from 'react-router-dom';
import { sortByDate } from '../utils/common';
import Loader from '../Loader/Loader';
import { useTourItems } from '../hooks/useTourItems';

const TourItems = () => {
    const { items = [], isLoading } = useTourItems();

    const filtered = sortByDate
    (items.filter(({ soldOut, ticketLink }) => !soldOut && ticketLink )
    .filter((_, i) => i < 5))

    return (
        <Section className={s.tour} >
            <div className={s.container}>
                <SectionTitle  text="Концерты" />
                {isLoading ? <Loader /> : (
                    <ul className={s.tourList}>
                        {filtered.map((item, i) => <TourItem {...item} key={item.sys.id} i={i} /> )}
                    </ul>
                )}

                <Link to="/tour" className={s.buttonMore} >
                    все концерты 
                </Link>
            </div>
        </Section> 
    )
}

export default TourItems;
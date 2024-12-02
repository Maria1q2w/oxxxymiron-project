import React, { useCallback, useEffect, useState } from 'react';
import { useTourItems } from '../hooks/useTourItems';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import PageTitle from '../Title/PageTitle';
import TourItem from './TourItem';
import BackPhoto from '../images/tour-bg.webp';

const TourPage = () => {
    const { items = [], isLoading } = useTourItems();
    const tabs = [...new Set(items.map(({country}) => country))];

    const [activeTab, setActiveTab] = useState(null);
    const [filtered, setFiltered] = useState([]);

    const toggleTab = useCallback((tab) => {
        console.log(tab, "tab");
        setActiveTab(tab);
        setFiltered(items.filter(({country}) => country === tab));
    }, [items])
    
    useEffect(() => {
        const initiaizeTab = async () => {
            console.log("tab2");
            if(tabs.length && !activeTab) await toggleTab(tabs[0]);
        }
        initiaizeTab();
    }, [tabs, toggleTab, activeTab]);

    return (
        <section className={`${s.tourPage} ${s.page}`} >
            <img src={BackPhoto} className={s.tourPageImg} />
            <div className={s.container}>
                <PageTitle text="Все концерты" />
                {isLoading ? <Loader /> : (<>
                        <ul className={s.tourTabs}>
                            {tabs.map((tab) => (
                                <li onClick={() => toggleTab(tab)} key={tab} className={`${s.tourTab} ${activeTab === tab ? s.active : "" }`}>
                                    {tab}
                                </li>
                            ))}
                        </ul>
                        <ul className={s.tourItems}>
                            {filtered.map((item, i) => (
                                <TourItem key={item.sys.id} offset={100} {...item} i={i} />
                            ))}
                        </ul>
                    </>
                ) }
            </div>
        </section>
    )
}

export default TourPage;
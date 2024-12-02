import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Section from '../Section/Section';
import s from '../styles/index.module.scss';
import SectionTitle from '../Title/SectionTitle';
import "swiper/css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { SLIDER_BUTTON_TYPES } from '../utils/constants';
import Loader from '../Loader/Loader';
import { useNewsItems } from '../hooks/useNewsItems';

const News = () => {

    const { PREV, NEXT } = SLIDER_BUTTON_TYPES;

    const sliderRef = useRef();
    const { items = [], isLoading } = useNewsItems();

    const handleButtonClick = useCallback((type) => {
        if (!sliderRef.current) return;

        const { swiper } = sliderRef.current
        console.log(swiper);

        type === NEXT ? swiper.slideNext() : swiper.slidePrev()
    }, [NEXT])

    return (
        <Section className={s.newsSection} >
            <div className={s.container}>
                <SectionTitle text="Новости" />
                {isLoading ? ( <Loader /> ) : ( 
                    <Swiper ref={sliderRef} spaceBetween={24} slidesPerView={4} className={s.news} navigation modules={[Navigation]} breakpoints={{1366:{
                        slidesPerView: 4,
                    },
                    720:{
                        slidesPerView: 3,
                    },
                    360:{
                        slidesPerView: 2,
                    }}} >
                        {items.map(({ title, sys: {id}, cover: {url}}, i) => (
                            <SwiperSlide key={id} >
                                <ScrollAnimation animateIn="fadeIneft" animateOut="fadeOutLeft" delay={i * 100} >
                                    <Link className={s.newsItem} to={`/news/${id}`} >
                                        <div className={s.newsItemImg} >
                                            <img src={url} alt={title} />
                                        </div>
                                        <h3 className={s.newsItemTitle}>
                                            {title}
                                        </h3>
                                    </Link>

                                </ScrollAnimation>
                            </SwiperSlide>
                        ))}
                        <div className={s.navigation}>
                            <div className={s.navigationButton + " " + s.navigationPrev} onClick={() => handleButtonClick(PREV)} >
                                <Icon name="slider-arrow" />
                            </div>
                            <div className={s.navigationButton + " " + s.navigationNext} onClick={() => handleButtonClick(NEXT)} >
                                <Icon name="slider-arrow" />
                            </div>
                        </div>

                    </Swiper>
                )}
            </div>

        </Section>
    )
}

export default News;
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import Section from '../Section/Section';
import s from '../styles/index.module.scss';
import logo from '../images/oxxxyshop.webp';
import bannerImg from '../images/banner.webp';

const ShopBanner = () => {
    return (
        <Section className={s.shopBannerSection} >
            <div className={s.container}>
                <div className={s.shopBannerWrapper}>
                    <Link to="/shop" className={s.shopBanner} >
                        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className={s.shopBannerText} >
                            <p className={s.shopBannerSubtitle}>
                                Обновленный мерч от оксимирона
                            </p>
                            <p className={s.shopBannerTitle}>
                                Oxxxyshop 2.0
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" className={s.shopBannerLogo} >
                            <img src={logo} alt="oxxxyshop" className={s.shopLogo} />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" className={s.shopBannerImage} >
                            <img src={bannerImg} alt="oxxxymiron" />
                        </ScrollAnimation>
                    </Link>
                </div>
            </div>
        </Section>
    )
}

export default ShopBanner;
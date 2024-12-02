import React from 'react';
import Section from '../Section/Section';
import s from '../styles/index.module.scss';
import video from '../images/oxxxytour.mp4';

const TourBanner = () => {
    return (
        <Section className={s.tourBanner}>
            <div className={s.container}>
                <video loop muted autoPlay>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

        </Section>
    )
}

export default TourBanner;
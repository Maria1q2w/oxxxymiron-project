import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '../Section/Section';
import s from '../styles/index.module.scss';

const SectionTitle = ({text}) => {
    return (
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" >
            <h2>{text}</h2>
        </ScrollAnimation>
    )
}

export default SectionTitle;
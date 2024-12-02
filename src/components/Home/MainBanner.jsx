import React from 'react'; 
import s from '../styles/index.module.scss';
import Section from '../Section/Section';
import ReactAnimations from '../images/text';
import oxxxyImg from '../images/oxxxyImg.png';

const MainBanner = ({name, width, height}) => (
            <div className={s.banner} >
                <img className={s.bannerImg} src={oxxxyImg} />
                <ReactAnimations />
            </div>
)


export default MainBanner;
import React from 'react';
import s from '../styles/index.module.scss';
import FooterForm from './FooterForm';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

const Footer = () => {

    const year = new Date(). getFullYear();
    return <footer className={s.footer} >
        <div className={s.container}>
            <div className={s.footerWrapper}>
                <FooterForm />
                <div className={s.footerInfo}>
                    <Logo />
                    <p>OXXXYMIRON, {year}</p>
                </div>
                <Socials width={24} height={24} />
            </div>
        </div>
    </footer>
}

export default Footer;
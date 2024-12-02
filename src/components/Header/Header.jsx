import React from 'react'; 
import Logo from '../Logo/Logo';
import s from '../styles/index.module.scss';
import { MENU } from '../utils/constants';
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from 'react-router-dom';
import Socials from '../Socials/Socials';
import Hamburger from './Hamburger';

const Header = () => (
    <section className={s.header} >
        <div className={s.container}>
            <header>
                <Logo />
                <nav className={s.menu}>
                    {MENU.map(({link, name}, i) => 
                    <ScrollAnimation key={link} className={s.menuItem} animateIn="fadeInDown" delay={i * 100} offset={0} >
                        <NavLink className={({ isActive }) => (isActive ? s.active : "") } to={`/${link}`} >{name}</NavLink>
                    </ScrollAnimation>
                    )}
                </nav>
                <Socials />
                <Hamburger />
            </header>
        </div>
    </section>
)

export default Header;
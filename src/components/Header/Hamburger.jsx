import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import s from '../styles/index.module.scss';
import { MENU } from '../utils/constants';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className={s.menuMobile} >
        <div className={s.menuMobileButton} onClick={toggleMenu} >
            <Icon name="menu" />
        </div>
        
        <nav className={`${s.menuMobileList} ${isOpen ? s.opened : "" }`}>
            <div onClick={toggleMenu} >
                <Logo />
            </div>
            <ul className={s.menuMobileItems} >
                {MENU.map(({link, name}, i) => 
                    <li key={name} className={s.menuMobileItem} >
                        <NavLink className={({ isActive }) => (isActive ? s.active : "") } to={`/${link}`} onClick={toggleMenu} >{name}</NavLink>
                    </li>
                    )}

                    <div className={s.menuMobileButton} onClick={toggleMenu} >
                        <Icon name="menu-close" />
                    </div>
            </ul>
        </nav>

        
    </div>
    )
}
export default Hamburger;
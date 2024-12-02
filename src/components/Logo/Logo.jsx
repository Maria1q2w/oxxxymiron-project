import React from 'react'; 
import { Link } from 'react-router-dom';
import s from '../styles/index.module.scss';
import logo from '../images/logo.png'

const Logo = () => {
    return (
        <div className={s.logo}>
            <Link to="/">
                <img src={logo} alt="oxxxy"></img>
            </Link>
        </div>
    )
}

export default Logo;
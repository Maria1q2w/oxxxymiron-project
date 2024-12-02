import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import s from '../styles/index.module.scss';

const FooterForm = () => {
    const [state, setState] = useState("");
    const handleChange = ({target: { value }}) => {
        setState(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState("")
    }

    return <form className={s.footerForm} onSubmit={handleSubmit} >
        <p>онлифанс оксимирона</p>
        <div className={s.footerFormEmail}>
            <input onChange={handleChange} type="Email" name="email" value={state} placeholder="Email" />
        </div>

        <button className={s.footerFormButton} type="submit" >
            <span>Подписаться</span>
            <Icon name="arrow-right" />
        </button>
    </form>
}

export default FooterForm;
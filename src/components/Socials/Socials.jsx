import React from 'react'; 
import Icon from '../Icon/Icon';
import s from '../styles/index.module.scss';
import { SOCIALS } from '../utils/constants';

const Socials = ({...rest}) => (
    <ul className={s.socials} >
        {SOCIALS.map(({icon, link}) => (
            <li title={icon} className={s.socialsItem} key={icon} >
                <a href={link} target="_blank">
                    <div className={s.icon} >
                        <Icon name={icon} {...rest} />
                    </div>
                </a>
            </li>
        ))}
    </ul>
)

export default Socials;
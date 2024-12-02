import React from 'react'; 
import s from '../styles/index.module.scss';
import Icons from '../images/sprite.svg';

const Icon = ({name, width, height}) => (
    <svg className={s.icon} style={{width, height}} >
        <use href={Icons + "#" + name} ></use>
    </svg>
)


export default Icon;
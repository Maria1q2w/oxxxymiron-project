import React, { Component } from 'react';
import s from '../styles/index.module.scss';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite ease `;

export default class ReactAnimations extends Component {
    render() {
        return (
                <Bounce className={s.container2} ><h1 className={s.text}>OXXXYMIRON</h1></Bounce>
        );
    }
}
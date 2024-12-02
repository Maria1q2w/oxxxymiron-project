import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AppRoutes from './AppRoutes';
import s from '../styles/index.module.scss';
import "animate.css/animate.compat.css";

const App = () => (
    <div className={s.app} >
        <Header />
        <AppRoutes />
        <Footer />
    </div>
)
export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import NewsPage from '../News/NewsPage';
import NewsSingle from '../News/NewsSingle';
import OxxxyshopPage from '../oxxxyshop/Oxxxyshop';
import OxxxyshopBasket from '../oxxxyshop/OxxxyshopBasket';
import OxxxyshopItemId from '../oxxxyshop/OxxxyshopItemId';
import TourPage from '../Tour/TourPage';
import TracksPage from '../Tracks/TracksPage';

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsSingle />} />
        <Route path="/shop" element={<OxxxyshopPage />} />
        <Route path="/shop/basket" element={<OxxxyshopBasket />} />
        <Route path="/shop/:id" element={<OxxxyshopItemId />} />
    </Routes>
)

export default AppRoutes;
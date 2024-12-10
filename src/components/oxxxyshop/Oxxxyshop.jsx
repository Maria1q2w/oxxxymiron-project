import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToBasket, removeItemFromBasket, setClickBasket, setClickBasketMinus, updateItemQuantity } from '../../reducers/basketSliceReducer';
import { useProductItems } from '../hooks/useProductItems';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import PageTitle from '../Title/PageTitle';
import { sortByPopular, sortByPriceBig, sortByPriceSmall, getOldItems, sortBySearch } from '../utils/common';
import { FILTER_MENU, FILTER_CATEGORY } from '../utils/constants';
import { useBasket } from './BasketContext';
import OxxxyshopItem from './OxxxyshopItem';

const OxxxyshopPage = () => {
    const [material, setMaterial] = useState("all");
    let { items = [], isLoading } = useProductItems(material);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [value, setValue] = useState("");
    const [filteredItem, setFilteredItem] = useState("");
    const [filteredItems, setFilteredItems] = useState(items);
    const [isSearchActive, setIsSearchActive] = useState(true);
    const [quantities, setQuantities] = useState({});

    const dispatch = useDispatch();
    const basketItems = useSelector((state) => state.basket.items);

    const { clickBasketMinus, clickBasket } = useBasket();

    const handleQuantityChange = (id, amount) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + amount
        }));
    };

    dispatch(setClickBasket(clickBasket));
    dispatch(setClickBasketMinus(clickBasketMinus));

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleMenuCategory = () => setIsOpenCategory((prev) => !prev);


    const setValueName = (value) => {
        setIsSearchActive(true)
        setValue(value);
    }

    const forClickFilter = (name) => {
        setMaterial(name === "cancel" ? "all" : name)
        toggleMenuCategory();
    }

    const forClick = (name) => {
        setFilteredItem(name);
        toggleMenu();
    }

    const clickFilter = () => {
        if (isOpenCategory) {
            toggleMenuCategory();
            toggleMenu();
        } else {
            toggleMenu();
        }
    }

    const clickCategory = () => {
        if (isOpen) {
            toggleMenuCategory();
            toggleMenu();
        } else {
            toggleMenuCategory();
        }
    }

    const applyFilters = () => {
        let filteredData = [...items];

        if (material !== "all") {
            filteredData = filteredData.filter(item => item.material === material);
        }

        filteredData = filteredData.map(item => ({
            ...item,
            quantity: quantities[item.id] || 0,
        }));

        if (filteredItem === "smallPrice") {
            filteredData = sortByPriceSmall(filteredData);
        } else if (filteredItem === "bigPrice") {
            filteredData = sortByPriceBig(filteredData);
        } else if (filteredItem === "popular") {
            filteredData = sortByPopular(filteredData);
        } else if (filteredItem === "sale") {
            filteredData = getOldItems(filteredData);
        }
        if (isSearchActive) {
            filteredData = sortBySearch(filteredData, value);
        }
        return filteredData;
    };


    useEffect(() => {
        setFilteredItems(applyFilters());
    }, [items, value, filteredItem, isSearchActive, material]);

    useEffect(() => {
        const data = { items: filteredItems, quantities };
        localStorage.setItem("basketData", JSON.stringify(data));
    }, [filteredItems, quantities]);

    return (
        <section className={`${s.oxxxyshopPage} ${s.page}`}>
            <div className={s.container} >
                <PageTitle text="oxxxyshop" />
                {isLoading ? <Loader /> : (
                    <div className={s.oxxxyshopList} >
                        <div className={s.oxxxyshopListHeader}>
                            <div className={`${s.oxxxyshopListButton} ${s.oxxxyshopListFilter}`} onClick={clickFilter} >
                                <Icon name="filter" />
                            </div>
                            <div className={`${s.oxxxyshopListFilterItems} ${isOpen ? s.oxxxyshopListFilterItemsOpened : ""}`} >
                                <ul className={s.oxxxyshopListMenuItems} >
                                    {FILTER_MENU.map(({ name, icon }, i) =>
                                        <li className={s.oxxxyshopListMenuItem} key={i}>
                                            <div className={s.oxxxyshopListMenuLine} onClick={() => forClick(name)} >
                                                <Icon name={icon} />{name}
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className={`${s.oxxxyshopListButton} ${s.oxxxyshopListCategory}`} onClick={clickCategory} >
                                <Icon name="category" />
                            </div>
                            <div className={`${s.oxxxyshopListFilterItems} ${isOpenCategory ? s.oxxxyshopListFilterItemsOpened : ""}`} >
                                <ul className={s.oxxxyshopListMenuItems} >
                                    {FILTER_CATEGORY.map(({ name, icon }, i) =>
                                        <li className={s.oxxxyshopListMenuItem} key={i}>
                                            <div className={s.oxxxyshopListMenuLine} onClick={() => forClickFilter(name)} >
                                                <Icon name={icon} />{name}
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <input className={s.oxxxyshopListInput} type="Search" value={value} onChange={(e) => { setValueName(e.target.value) }} name="search" placeholder="search"></input>
                            <Link className={s.oxxxyshopListButton} to="/shop/basket">
                                <Icon name="basket" />
                            </Link>
                        </div>
                        <div className={s.oxxxyshopListContainer} >
                            {items && filteredItems.map(({ title, cover: { url }, sys: { id }, sum, oldPrice }, i) => {
                                return (
                                    <span key={`${i}-${id}`}>
                                        <OxxxyshopItem key={`${id}-${i}`}
                                            oldPrice={oldPrice}
                                            title={title}
                                            url={url}
                                            id={id}
                                            sum={sum}
                                            i={i}
                                            quantity={basketItems.find((item) => item.id === id)?.quantity || 0}
                                            onQuantityChange={(amount) => handleQuantityChange(id, amount)} clickBasketMinus={(e) => clickBasketMinus(e, id)}
                                            clickBasket={(e) => clickBasket(e, { id, title, sum })} />
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OxxxyshopPage;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductItems } from "../../reducers/shopReducer";

export const useProductItems = (material) => {
    const dispatch = useDispatch();

    const { items = [], isLoading, currentMaterial } = useSelector(({ product }) => product )

    useEffect (() => {
        const fetchProductItems = async () => {
            if(material &&  material !== currentMaterial) {
                await dispatch(getProductItems(material))
            }
        }

    fetchProductItems();
    }, [items, material, currentMaterial, dispatch])


    return { items, isLoading };
}
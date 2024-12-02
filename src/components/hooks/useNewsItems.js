import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsItems } from "../../reducers/newsReducer";

export const useNewsItems = () => {
    const dispatch = useDispatch();

    const { items = [], isLoading } = useSelector(({ news }) => news )

    useEffect(() => {
        const fetchNewsItems = async() => {
            if(!items.length) {
                await dispatch(getNewsItems())
            }
        }
        fetchNewsItems();
    }, [items, dispatch])

    return { items, isLoading };
}
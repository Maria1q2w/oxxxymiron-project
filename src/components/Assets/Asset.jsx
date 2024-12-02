import React, { useEffect, useState } from 'react';
import s from '../styles/index.module.scss';
import { getAsset } from '../utils/common';

const Asset = ({ id }) => { 
    const [asset, setAsset] = useState(null);

    useEffect(() => {
        const fetchAsset = async () => {
            const item = await getAsset(id);
            setAsset(item)
        }
        fetchAsset();
    }, [id])
return (
    asset ? <img src={asset} alt="" /> : <></>
)}



export default Asset;
import React from 'react';
import s from '../styles/index.module.scss';
import { renderNode } from '../utils/common';

const AssetHeading = ({content}) => { 
return (<h3 className={s.heading3}>
    {content && content.map(renderNode)}
</h3>
)}



export default AssetHeading;
import React from 'react';
import s from '../styles/index.module.scss';
import { renderNode } from '../utils/common';

const AssetLink = ({uri, content}) => { 
return (<a href={uri} target="_blank" rel="noopener noreferrer" >
    { content && content.map(renderNode) } 
</a>
)}



export default AssetLink;
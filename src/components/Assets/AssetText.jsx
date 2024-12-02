import React from 'react';
import s from '../styles/index.module.scss';

const AssetText = ({value}) => { 
return (<span dangerouslySetInnerHTML={{ __html: value.replaceAll("\n\n", "<br />")}}></span>
)}



export default AssetText;
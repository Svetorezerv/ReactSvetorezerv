import React from 'react'
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'

const AdsItem = (props) => {
    const router = useNavigate();
    return (
        <a onClick={() => router(`/`)} className="subcategories__item">
            <img className="subcategories__image" src={props.subCategory.image} alt={props.subCategory.name} />
            <p className='subcategorise__text'>{props.subCategory.name}</p>
        </a>
    )
}

export default AdsItem;
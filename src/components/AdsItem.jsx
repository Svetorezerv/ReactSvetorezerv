import React from 'react'
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'

const AdsItem = (props) => {
    const router = useNavigate();
    return (
        <div onClick={() => router(`/posts/${props.subCategory.category.slug}/${props.subCategory.slug}/${props.subCategory.id}`)} className="subcategories__item">
            <img className="subcategories__image" src={props.subCategory.image} alt={props.subCategory.name} />
            <p className='subcategorise__text'>{props.subCategory.name}</p>
            <p className='subcategorise__text'>{props.subCategory.created}</p>
        </div>
    )
}

export default AdsItem;
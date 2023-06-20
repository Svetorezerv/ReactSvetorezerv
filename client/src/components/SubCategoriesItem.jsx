import React from 'react'
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'

const SubCategoriesItem = (props) => {
    const router = useNavigate();
    return (
        <div onClick={() => router(`/posts/${props.subCategory.slug}/ads`)} className="subcategories__item">
            <img className="subcategories__image" src={props.subCategory.image} alt={props.subCategory.name} />
            <span className='subcategorise__text'>{props.subCategory.name}</span>
        </div>
    )
}

export default SubCategoriesItem;
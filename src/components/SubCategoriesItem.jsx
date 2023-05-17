import React from 'react'
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'

const SubCategoriesItem = (props) => {
    const router = useNavigate();
    console.log(props);
    return (
        <a onClick={() => router(`/posts/category/${props.subCategory.slug}/ads`)} className="subcategories__item">
            <img className="subcategories__image" src={props.subCategory.image} alt={props.subCategory.name} />
            <p className='subcategorise__text'>{props.subCategory.name}</p>
        </a>
    )
}

export default SubCategoriesItem;
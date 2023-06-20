import React from 'react'
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'
import Button from './UI/button/Button';

const CategoriesItem = (props) => {
    const router = useNavigate(); 
    return (
        <Button onClick={() => router(`/posts/${props.category.slug}`)} className="categories__item">
            <img className="categories__image" src={props.category.image} alt={props.category.name} />
            <p>{props.category.name}</p>
        </Button>
    )
}

export default CategoriesItem;
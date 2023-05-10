import React from 'react'
import "../styles/App.css";

const CategoriesItem = (props) => {
    return (
        <div className="categories__item">
            <img className="categories__image" src={props.category.image} alt={props.category.name} />
        </div>
    )
}

export default CategoriesItem;
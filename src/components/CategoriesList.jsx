import React from 'react';
import CategoriesItem from './CategoriesItem';
import "../styles/App.css";

const CategoriesList = ({ categories }) => {
    if (!categories.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Категории не найдены!
            </h1>
        )
    }

    return (
        <div className='categories__list'>
            {categories.map((category, index) =>
                <CategoriesItem number={index + 1} category={category} key={category.id} />
            )}
        </div>
    );
};

export default CategoriesList;
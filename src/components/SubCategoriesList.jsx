import React from 'react';
import SubCategoriesItem from './SubCategoriesItem';
import "../styles/App.css";

const SubCategoriesList = ({ subCategories }) => {
    if (!subCategories.length) {
        return (
            <h1 className='heading'>
                Подкатегории не найдены!
            </h1>
        )
    }

    return (
        <div className='container subcategories__list'>
            {subCategories.map((subCategory, index) =>
                <SubCategoriesItem number={index + 1} subCategory={subCategory} key={subCategory.id} />
            )}
        </div>
    );
};

export default SubCategoriesList;
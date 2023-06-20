import React from 'react';
import AdsItem from './AdsItem';
import "../styles/App.css";

const AdsList = ({ subCategories }) => {
    if (!subCategories.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Подкатегории не найдены!
            </h1>
        )
    }
   
    return (
        <div className='container subcategories__list'>
            {subCategories.map((subCategory, index) =>
                <AdsItem number={index + 1} subCategory={subCategory} key={subCategory.id} />
            )}
        </div>
    );
};

export default AdsList;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import "../styles/App.css";
import Loader from '../components/UI/loader/Loader';
import CategoriesList from '../components/CategoriesList';

const Categories = () => {
    const params = useParams();
    const [categoriesChild, setCategoriesChild] = useState({});
    const [fetchCategoriesChilds, isCategoriesLoading, error] = useFetching(async (categories) => {
        const response = await PostService.getСategoriesChild(categories)
        console.log(response);
        setCategoriesChild(response.results)
    })

    useEffect(() => {
        fetchCategoriesChilds(params.categories.toLowerCase());
    }, []);

    return (
        <div>
            {isCategoriesLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <div>
                    <h1>Вы открыли страницу категории: {params.categories}</h1>
                    <CategoriesList categories={categoriesChild} />
                </div>
            }
        </div>
    );
};

export default Categories;
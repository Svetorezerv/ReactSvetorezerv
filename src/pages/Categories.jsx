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
    const [fetchCategoriesChilds, isLoading, error] = useFetching(async (categories) => {
        const response = await PostService.getСategoriesChild(categories)
        console.log(response);
        setCategoriesChild(response.results)
    })

    useEffect(() => {
        fetchCategoriesChilds(params.categories.toLowerCase());
    }, []);

    return (
        <div>
              <h1>Вы открыли страницу категории: {params.categories}</h1>
        </div>
    );
};

export default Categories;
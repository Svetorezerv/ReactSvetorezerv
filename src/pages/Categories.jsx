import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import "../styles/App.css";
import { getPageCount } from '../utils/pages';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import CategoriesList from '../components/CategoriesList';

const Categories = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(5);
    const [page, setPage] = useState(1);

    const params = useParams();
    console.log(params);
    const [categoriesChild, setCategoriesChild] = useState({});
    const [fetchCategoriesChilds, isCategoriesLoading] = useFetching(async (categories) => {
        const response = await PostService.getСategoriesChild(categories, page, limit);
        console.log(response);
        setCategoriesChild(response.results)
        const totalPages = response.count;
        setTotalPages(getPageCount(totalPages, limit));
    })

    useEffect(() => {
        fetchCategoriesChilds(params.categories.toLowerCase());
    }, [page]);

    const changePage = (page) => {
        setPage(page)
    }

    let pagesArray = [];

    return (
        <div>
            {isCategoriesLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <div>
                    <h1>Вы открыли страницу категории: {params.categories}</h1>
                    <CategoriesList categories={categoriesChild} />
                    <Pagination
                        pagesArray={pagesArray}
                        totalPages={totalPages}
                        currentPage={page}
                        changePage={changePage}
                    />
                </div>
            }
        </div>
    );
};

export default Categories;
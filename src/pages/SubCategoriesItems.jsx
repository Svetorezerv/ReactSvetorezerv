import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import "../styles/App.css";
import { getPageCount } from '../utils/pages';

const SubCategoriesItems = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(15);
    const [page, setPage] = useState(1);

    const params = useParams();
    const [subCategories, setSubCategories] = useState({});
    const [fetchsubCategories, isCategoriesLoading] = useFetching(async (subCategories) => {
        const response = await PostService.getsSubСategoriesItems(subCategories, page, limit);
        setSubCategories(response.results)
        const totalPages = response.count;
        setTotalPages(getPageCount(totalPages, limit));
        console.log(response);
    })


    useEffect(() => {
        fetchsubCategories(params.subcategories.toLowerCase());
    }, [page]);

    console.log(params);
    return (
        <div>
          id
        </div>
    );
};

export default SubCategoriesItems;

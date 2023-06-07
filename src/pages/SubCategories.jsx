import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostAPI';
import "../styles/App.css";
import { getPageCount } from '../utils/pages';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import SubCategoriesList from '../components/SubCategoriesList';

const SubCategories = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(15);
    const [page, setPage] = useState(1);

    const params = useParams();
    const [subCategories, setSubCategories] = useState({});
    const [fetchSubCategories, isSubategoriesLoading] = useFetching(async (subCategories) => {
        const response = await PostService.getСategoriesChild(subCategories, page, limit);
        setSubCategories(response.results)
        const totalPages = response.count;
        setTotalPages(getPageCount(totalPages, limit));
    })

    useEffect(() => {
        fetchSubCategories(params.subcategories.toLowerCase());
    }, [page]);

    const changePage = (page) => {
        setPage(page)
    }

    let pagesArray = [];
    return (
        <div className='container subcategories'>
            {isSubategoriesLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <div>
                    <h1 className='heading'>Вы открыли страницу категории: {params.subcategories}</h1>
                    <SubCategoriesList subCategories={subCategories} />
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

export default SubCategories;
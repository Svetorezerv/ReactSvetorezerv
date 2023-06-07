import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostAPI';
import "../styles/App.css";
import { getPageCount } from '../utils/pages';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import AdsList from '../components/AdsList';

const AdsItems = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(15);
    const [page, setPage] = useState(1);

    const params = useParams();
    const [adsItem, setAdsItem] = useState({});
    const [fetchAdsItem, isAdsItemLoading] = useFetching(async (adsItem) => {
        const response = await PostService.getsSubСategoriesItems(adsItem, page, limit);
        setAdsItem(response.results)
        const totalPages = response.count;
        setTotalPages(getPageCount(totalPages, limit));
    })


    useEffect(() => {
        fetchAdsItem(params.subcategories.toLowerCase());
    }, [page]);

    const changePage = (page) => {
        setPage(page)
    }

    let pagesArray = [];

    return (
        <div className='adsitems'>
          <div className='container'>
            {isAdsItemLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <div>
                    <h1 className='heading'>Вы открыли страницу категории: {params.subcategories}</h1>
                    <AdsList subCategories={adsItem} />
                    <Pagination
                        pagesArray={pagesArray}
                        totalPages={totalPages}
                        currentPage={page}
                        changePage={changePage}
                    />
                </div>
            }
        </div>
        </div>
    );
};

export default AdsItems;

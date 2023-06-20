import React, { useState, useEffect, useContext } from 'react'
import "../styles/App.css";
import PostList from '../components/PostList';
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostAPI';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import CategoriesList from '../components/CategoriesList';
import { observer } from 'mobx-react-lite';
import Loader from '../components/UI/loader/Loader';
import { Context } from '../index';

const Posts = observer(() => {
    const { search } = useContext(Context);
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(16);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [categories, setCategories] = useState([]);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        if (search.data !== null && search.data !== '') {
            const name = search.data;
            const result = await PostService.getByName(name, page, limit);
            console.log('searchdata');
            setPosts(result.results);
            const totalPages = result.count;
            setTotalPages(getPageCount(totalPages, limit));
        } else {
            const result = await PostService.getAll(limit, page);
            console.log('standart');
            setPosts(result.results);
            const totalPages = result.count;
            setTotalPages(getPageCount(totalPages, limit));
        }
    })

    const [fetchCategories, isCategoriesLoading, categoriesError] = useFetching(async () => {
        const result = await PostService.getParentСategories();
        setCategories(result.results);
    })

    useEffect(() => {
        fetchPosts();
    }, [search.data, page])

    useEffect(() => {
        fetchCategories();
    }, [])

    const changePage = (page) => {
        setPage(page)
    }

    let pagesArray = [];

    return (
        <div className="posts container">
            {categoriesError &&
                <h1>Произошла ошибка ${categoriesError}</h1>
            }
            {isCategoriesLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <CategoriesList categories={categories} />
            }
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, minHeight: 1000 }}><Loader /></div>
                :
                <div className='posts-filtered-content'>
                    {search.data !== null && search.data !== ''
                        ? <h1>Результат поиска по запросу: {search.data}</h1>
                        : <h1>Список постов</h1>
                    }
                    <PostList posts={sortedAndSearchedPosts} filter={filter} setFilter={setFilter} />
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
});

export default Posts;

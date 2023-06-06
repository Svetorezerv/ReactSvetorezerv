import React, { useState, useEffect } from 'react'
import "../styles/App.css";
import PostList from '../components/PostList';
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import CategoriesList from '../components/CategoriesList';
// import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const Posts = observer(() => {
    // const { user } = useContext(Context);
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(16);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [categories, setCategories] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const result = await PostService.getAll(limit, page);
        setPosts(result.results);
        const totalPages = result.count;
        setTotalPages(getPageCount(totalPages, limit));
    })

    const [fetchCategories, isCategoriesLoading, categoriesError] = useFetching(async () => {
        const result = await PostService.getParentСategories();
        setCategories(result.results);
    })

    useEffect(() => {
        fetchPosts();
    }, [page])

    useEffect(() => {
        fetchCategories();
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

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
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                :
                <div className='posts-filtered-content'>
                    <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список товаров" filter={filter} setFilter={setFilter} />
                </div>
            }
            <Pagination
                pagesArray={pagesArray}
                totalPages={totalPages}
                currentPage={page}
                changePage={changePage}
            />
        </div>
    );
});

export default Posts;

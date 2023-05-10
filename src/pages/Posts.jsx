import React, { useState, useEffect } from 'react'
import "../styles/App.css";
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Modal from '../components/UI/modal/Modal';
import Button from '../components/UI/button/Button';
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import CategoriesList from '../components/CategoriesList';

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
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

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    let pagesArray = [];

    return (
        <div className="App">
            <Button style={{ marginTop: 50 }} onClick={() => setModal(true)}>
                Открыть модальное окно
            </Button>
            <Modal visisble={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
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
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
            }
            <Pagination
                pagesArray={pagesArray}
                totalPages={totalPages}
                currentPage={page}
                changePage={changePage}
            />
        </div>
    );
}

export default App;

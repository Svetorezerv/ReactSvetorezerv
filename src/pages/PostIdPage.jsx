import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import "../styles/App.css";
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.results)
    })

    useEffect(() => {
        fetchPostById(params.id.toLowerCase());
    }, []);

    function loading() {
        if (post[0] === undefined) {
            return true;
        }
    }

    return (
        <div>
            <h1>Вы открыли страницу товара: {params.id}</h1>
            {loading()
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <div>
                    <p>
                        ID товара:{post[0].id}
                    </p>
                    <p>
                        Наименование товара:  {post[0].name}
                    </p>
                    <img className='image' src={post[0].image} alt={post[0].name} />
                </div>
            }
        </div>
    );
};

export default PostIdPage;
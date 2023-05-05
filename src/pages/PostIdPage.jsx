import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [postId, setPostId] = useState();
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        console.log(response.results);
        setPostId(response.results[0].name)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, []);

    console.log(postId);

    return (
        <div>
            <h1>Вы открыли страницу товара: {params.id}</h1>
            {isLoading 
            ? <Loader/> 
            : <div>
                Название товара: {postId}
            </div>
            }
        </div>
    );
};

export default PostIdPage;
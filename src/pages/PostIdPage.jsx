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
        console.log(response);
        setPostId(response)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, []);

    return (
        <div>
            <h1>Вы открыли страницу товара: {params.id}</h1>
            {isLoading 
            ? <Loader/> 
            : <div>{postId.results[0].name}</div>
            }
        </div>
    );
};

export default PostIdPage;
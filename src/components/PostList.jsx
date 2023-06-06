import React from 'react';
import PostItem from './PostItem';
import "../styles/App.css";
import PostFilter from './PostFilter';

const PostList = ({ posts, title, remove, filter, setFilter }) => {

    if (!posts.length) {
        return (
            <div className='post-top-content'>
            <h1 className='heading'>Посты не найдены</h1>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
        </div>
        )
    }

    return (
        <div>
            <div className='post-top-content'>
                <h1 className='heading'>{title}</h1>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            <div className='post-container'>
                {posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                )}
            </div>
        </div>
    );
};

export default PostList;
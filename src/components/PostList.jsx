import React from 'react';
import PostItem from './PostItem';
import "../styles/App.css";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 className='heading heading-margin'>{title}</h1>
            <div className='post-container'>
                {posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                )}
            </div>
        </div>
    );
};

export default PostList;
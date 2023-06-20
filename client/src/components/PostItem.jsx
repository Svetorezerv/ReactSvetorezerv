import React from 'react'
import Button from './UI/button/Button';
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post">
            <img src={props.post.image} alt={props.post.name} className='post-image'/>
            <div className="post__content">
                <strong>{props.post.id}. {props.post.name}</strong>
                {props.post.description
                    ? <div>
                        {props.post.description}
                    </div>
                    : null
                }
                {props.post.price
                    ? <p>
                        {props.post.price}
                    </p>
                    : null
                }
            </div>
            <div className="post__buttons">
                <Button onClick={() => router(`/posts/${props.post.category.slug}/${props.post.slug}/${props.post.id}`)}>Открыть</Button>
            </div>
        </div>
    )
}

export default PostItem;
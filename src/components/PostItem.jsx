import React from 'react'
import Button from './UI/button/Button';
import "../styles/App.css";
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post">
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
                <Button onClick={() => router(`/posts/${props.post.slug}/${props.post.name}`)}>Открыть</Button>
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
            </div>
        </div>
    )
}

export default PostItem;
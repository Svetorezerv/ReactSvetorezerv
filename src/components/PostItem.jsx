import React from 'react'
import Button from './UI/button/Button';

const PostItem = (props) => {
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
            </div>
            <Button onClick={() => props.remove(props.post)}>Удалить</Button>
        </div>
    )
}

export default PostItem;
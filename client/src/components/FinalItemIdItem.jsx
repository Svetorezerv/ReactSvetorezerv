import React from 'react'
import "../styles/App.css";

const FinalItemIdItem = ({ finalItemId }) => {
    return (
        <div className="final-id-item">
            <h1 className='heading'>{finalItemId.name}</h1>
            <img src={finalItemId.image} alt={finalItemId.name} />
            <p>{finalItemId.description}</p>
            <p>{finalItemId.price}</p>
            <p>{finalItemId.slug}</p>
            <p>{finalItemId.created}</p>
            <p>{finalItemId.updated}</p>
            <p>{finalItemId.status}</p>
        </div>
    )
}

export default FinalItemIdItem;
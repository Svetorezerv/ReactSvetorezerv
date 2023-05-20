import React from 'react'
import "../styles/App.css";
// import { useNavigate } from 'react-router-dom'

const FinalItemIdItem = ({ finalItemId }) => {
    console.log(finalItemId);
    const IDobject = finalItemId;
    return (
        <div className="">
            <p>{IDobject.name}</p>
            <img src={IDobject.image} alt={IDobject.name} />
            <p>{IDobject.description}</p>
            <p>{IDobject.category.name}</p>
            <p>{IDobject.price}</p>
        </div>
    )
}

export default FinalItemIdItem;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import FinalItemIdItem from '../components/FinalItemIdItem';
import PostService from '../API/PostAPI';
import "../styles/App.css";
import Loader from '../components/UI/loader/Loader';

const FinalItemId = () => {

    const params = useParams();
    const [finalItemId, setFinalItemId] = useState({});
    const [fetchFinalItemId, isFinalItemIdLoading] = useFetching(async (finalItemCategory, finalItemSubCategory, finalItemId) => {
        const response = await PostService.getsFinalItemId(finalItemCategory, finalItemSubCategory, finalItemId);
        setFinalItemId(response);
    })

    useEffect(() => {
        fetchFinalItemId(params.category, params.subcategory, params.id);
    }, []);

    return (
        <div>
            {isFinalItemIdLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <div>
                    <FinalItemIdItem finalItemId={finalItemId} />
                </div>
            }
        </div>
    );
};

export default FinalItemId;
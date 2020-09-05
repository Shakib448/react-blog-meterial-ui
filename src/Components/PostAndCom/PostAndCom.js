import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const PostAndCom = () => {

    let {id} = useParams();

    const [fetchDetail, setFetchDetail] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
            const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = res.data;
            console.log(data);
            setFetchDetail(data);
            
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    return (
        <div>
            <h1> Here is the {fetchDetail.length} </h1>
        </div>
    );
}

export default PostAndCom;

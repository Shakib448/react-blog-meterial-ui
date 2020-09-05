import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const PostAndCom = () => {

    let {id} = useParams();

    const [fetchDetail, setFetchDetail] = useState([]);

    console.log(fetchDetail)

    const {title, body} = fetchDetail;

    useEffect(() => {

        const fetchData = async () => {
            try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(res);
            const data = res.data;
            console.log(data);
            setFetchDetail(data);
            
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    console.log(fetchDetail[0])

    return (
        <div>
            <h1> Here is the {title} </h1>
            <h1> Here is the {body} </h1>
        </div>
    );
}

export default PostAndCom;

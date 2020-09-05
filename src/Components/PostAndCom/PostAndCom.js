import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const PostAndCom = ( ) => {

    let { id } = useParams();
    let { postId } = useParams();

    const [fetchDetail, setFetchDetail] = useState([]);

    const [comments, setComments] = useState([]);


    const { title, body } = fetchDetail;

    const { email, name } = comments;

    useEffect(() => {
        const comFatchData = async () => {
            try {
                const comRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`); //postId
                const comData = comRes.data;
                setComments(comData);
                console.log(comData);
            
        } catch (error) {
            console.log(error)
        }
        }
        comFatchData();
    }, [setComments])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const post = `posts/${id}/`
                const idRes = await axios.get(`https://jsonplaceholder.typicode.com/${post}`);
                const idData = idRes.data;
                console.log(idData)
                setFetchDetail(idData);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])


    return (
        <div>
            <h1>  {title} </h1>
            <h1>  {body} </h1>
            {
                comments.map((comment) => <h1 key={comment.id}> {comment.email} </h1>).slice(0,4)
            }
        </div>
    );
}

export default PostAndCom;

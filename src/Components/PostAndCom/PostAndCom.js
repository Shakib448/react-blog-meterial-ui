import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent, Button } from '@material-ui/core';
import style from './PostAndCom.module.css'



const PostAndCom = () => {

    let { id } = useParams();

    const [fetchDetail, setFetchDetail] = useState([]);

    const [comments, setComments] = useState([]);

    const [loading, setLoading] = useState(true);


    const { title, body } = fetchDetail;


    useEffect(() => {
        const comFatchData = async () => {
            try {
                const comRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`); //postId
                const comData = comRes.data;
                setComments(comData);
                setLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        comFatchData();
    }, [setComments])

    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const post = `posts/${id}/`
                const idRes = await axios.get(`https://jsonplaceholder.typicode.com/${post}`);
                const idData = idRes.data;
                setFetchDetail(idData);
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])


    return (
      !loading ? (   
        <Card>
            <Typography className={style.center} variant='h4'>  {title} </Typography>
            <Typography className={style.center_body} variant='h5'>  {body} </Typography>
            <hr className={style.hr} />
            <Typography className={style.center_body} variant='h3'>  Comments </Typography>

            {
                comments.map((comment) => (
                    <CardContent key={comment.id}>
                        <Typography variant='h4'> {comment.email} </Typography>
                        <Typography variant='h6' > {comment.title} </Typography>
                        <Typography variant='h6' > {comment.body} </Typography>
                        {/* This post.id use for map */}
                    </CardContent>
                )).slice(0, 4)
            }
            <Button className= {style.btn} color="secondary" onClick={() => handleBack()}>Go Back</Button>
        </Card> ) : <h1>Loading...</h1>
    );
}

export default PostAndCom;

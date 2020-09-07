import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import style from './PostAndCom.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const PostAndCom = () => {

    let { id } = useParams();

    const [fetchDetail, setFetchDetail] = useState([]);

    const [comments, setComments] = useState([]);

    const [photos, setPhotos] = useState([]);

    const [loading, setLoading] = useState(true);

    const { title, body } = fetchDetail;

    //Image data

    useEffect(() => {
        const photoFatchData = async () => {
            try {
                //Photo Data
                const photoRes = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
                const photoData = photoRes.data;
                setPhotos(photoData);
                //Post Data
                const post = `posts/${id}/`
                const idRes = await axios.get(`https://jsonplaceholder.typicode.com/${post}`);
                const idData = idRes.data;
                setFetchDetail(idData);
                //Comments Data
                const comRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`); //postId
                const comData = comRes.data;
                setComments(comData);

                setLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        photoFatchData();
    }, [id])

    
    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
        },
        paper: {
            padding: theme.spacing(2),
            maxWidth: 800,
            height: 140,
            margin: `${theme.spacing(1)}px auto`,

        },
        image: {
            width: 128,
            height: 128,

        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '100px',
            float: 'right'
        },

    }));

    const classes = useStyles();

    return (

        !loading ? (<Box>
            <Typography className={style.center} variant='h4'>  {title} </Typography>
            <Typography className={style.center_body} variant='h5'>  {body} </Typography>
            <hr className={style.hr} />
            <Typography className={style.center_body} variant='h3' gutterBottom>  Comments </Typography>

            <Box className={classes.root}>
                <Grid container >

                    <Grid item xs={3}>
                        {
                            photos.map((photo) => (
                                <Paper key={photo.id} className={classes.paper}>
                                    <img className={classes.img} alt={photo.title} src={photo.thumbnailUrl} />
                                </Paper>
                            )).slice(0, 4)
                        }
                    </Grid>
                    <Grid item xs={9}>
                        {
                            comments.map((comment) => (
                                <Paper key={comment.id} className={classes.paper}>
                                    <Typography gutterBottom  variant='h3'>
                                        {comment.email}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {comment.body}
                                    </Typography>
                                </Paper>
                            )).slice(0, 4)
                        }

                    </Grid>
                </Grid>
            </Box>

            <Box className={style.btn}>
                <Button color="secondary" onClick={() => handleBack()}>Go Back</Button>
            </Box>

        </Box>) : <Typography className={style.center} variant='h1'>  Loading..... </Typography>

    );
}

export default PostAndCom;

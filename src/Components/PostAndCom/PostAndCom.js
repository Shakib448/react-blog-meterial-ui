import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import style from './PostAndCom.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';



const PostAndCom = () => {

    let { id } = useParams();

    const [fetchDetail, setFetchDetail] = useState([]);

    const [comments, setComments] = useState([]);

    const [loading, setLoading] = useState(true);

    const [photos, setPhotos] = useState([]);

    const { title, body } = fetchDetail;

    //Image data

    useEffect(() => {
        const photoFatchData = async () => {
            try {
                const photoRes = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
                const photoData = photoRes.data;
                setPhotos(photoData);
                setLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        photoFatchData();
    }, [])

    // Comments data
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
    }, [])

    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }

    //Post data
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


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 800,
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
            borderRadius: '100px'
        },
    }));

    const classes = useStyles();

    return (

        !loading ? (<Box className={classes.root}>
            <Typography className={style.center} variant='h4'>  {title} </Typography>
            <Typography className={style.center_body} variant='h5'>  {body} </Typography>
            <hr className={style.hr} />
            <Typography className={style.center_body} variant='h3'>  Comments </Typography>

            {
                comments.map((comment) => (
                    <Paper key={comment.id} className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    {
                                        photos.map((photo) => <img key={photo.id} className={classes.img} alt="complex" src={photo.thumbnailUrl} />).slice(0, 1)
                                    }
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {comment.title}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            {comment.email}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {comment.body}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                )).slice(0, 4)
            }
            <Box className={style.btn}>
                <Button color="secondary" onClick={() => handleBack()}>Go Back</Button>
            </Box>

        </Box>) :  <Typography className={style.center} variant='h1'>  Loading..... </Typography>

    );
}

export default PostAndCom;

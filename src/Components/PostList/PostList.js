import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const PostList = ({ posts, loading  }) => {

    if(loading){
        return <h2>Loading.......</h2>
    }

    function truncate(str, n){
        return str?.length> n ? str.substr(0, n - 1) + "..." : str;
    };


    return (
        <>
                {
                    posts.map(post =>(
                        <Typography variant='span'>   
                        <Typography  key={post.id} variant='h4'> {truncate(post.title, 50)} </Typography>
                        <Typography variant='h6'> {truncate(post.body, 130)} </Typography>
                        <Button color="secondary" href="#contained-buttons">See More</Button>
                        <hr/> 
                        </Typography>
                    ))
                }
        </>
    );
}

export default PostList;

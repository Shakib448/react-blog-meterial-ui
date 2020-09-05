import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const PostList = ({ posts, loading, handlePost  }) => {

    if(loading){
        return <h2>Loading.......</h2>
    }

    function truncate(str, n){
        return str?.length> n ? str.substr(0, n - 1) + "..." : str;
    };


    return (
        <>
                {
                    posts.map((post) => 
                    // this div used for key issue solved
                        <div key={post.id}> 
                        <Typography variant='h4'> {truncate(post.title, 50)} </Typography>
                        <Typography variant='h6' > {truncate(post.body, 130)} </Typography>
                        <Button color="secondary" onClick={() => handlePost(post)}>See More</Button>
                        </div>
                    )
                }
        </>
    );
}

export default PostList;

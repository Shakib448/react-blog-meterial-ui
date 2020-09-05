import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const PostList = ({ posts, loading }) => {

    let history = useHistory();

    const hadlePostDetail = (id) => {
        const idUrl = `/blog/details/${id}`
        history.push(idUrl);
    }

    if (loading) {
        return <h2>Loading.......</h2>
    }


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <Typography variant='h4'> {truncate(post.title, 50)} </Typography>
                        <Typography variant='h6' > {truncate(post.body, 130)} </Typography>
                        {/* This post.id use for map */}
                        <Button color="secondary" onClick={() => hadlePostDetail(post.id)}>See More</Button>
                        <hr />
                    </div>
                ))
            }

        </>
    );
}

export default PostList;

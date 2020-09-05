import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Style from './Posts.module.css'
import PostList from '../PostList/PostList';
import { CardContent } from '@material-ui/core';
import Pagination from '../Pagination/Pagination';

const Posts = () => {


    const [posts , setPosts] = useState([]);

    const [loading , setLoading] = useState(true);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const [postsPerPage] = useState(10); // Here is the 10 data executed

    
    useEffect(() => {

        const fetchPost = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = res.data;
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();

    }, [])

      // Get current posts

    const indexOfLastPost = currentPage * postsPerPage;

    // console.log(indexOfLastPost);
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // console.log(indexOfFirstPost);

    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    // console.log(currentPost);

    //Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
     <Card >
            <Typography className={Style.center} variant='h3' gutterBottom>Welcome to my Blog Page</Typography>
            <hr className={Style.hr}/>
            <CardContent>

            <PostList posts={currentPost} loading={loading}/>

             <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>

             </CardContent>
        </Card>         
    );
}

export default Posts;

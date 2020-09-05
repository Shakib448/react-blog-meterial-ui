import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import style from './Pagination.module.css'



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }




    return (
        <Box className={style.center}>

            {pageNumbers.map(pageNumber => (
                    <Button color='secondary' key={pageNumber} onClick={() => paginate(pageNumber)} >
                        {pageNumber}
                    </Button>
            ))}

        </Box>
    );
}

export default Pagination;

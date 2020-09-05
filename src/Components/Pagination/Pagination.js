import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <>
        
            {pageNumbers.map(pageNumber =>(
                <Typography alignItems='center' variant='span' key={pageNumber} className="page-item">
                    <Button onClick={() => paginate(pageNumber)}  className="page-link">
                        {pageNumber}
                    </Button>
                </Typography>
            ))}
            
        </>
    );
}

export default Pagination;

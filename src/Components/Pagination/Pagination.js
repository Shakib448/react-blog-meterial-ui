import React from 'react';
import Button from '@material-ui/core/Button';



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }




    return (
        <>

            {pageNumbers.map(pageNumber => (
                    <Button color='secondary' key={pageNumber} onClick={() => paginate(pageNumber)} >
                        {pageNumber}
                    </Button>
            ))}

        </>
    );
}

export default Pagination;

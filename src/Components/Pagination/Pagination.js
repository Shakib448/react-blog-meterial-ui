import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
    }));

    const classes = useStyles();


    return (
        <>

            {pageNumbers.map(pageNumber => (
                    <Button key={pageNumber} onClick={() => paginate(pageNumber)} >
                        {pageNumber}
                    </Button>
            ))}

        </>
    );
}

export default Pagination;

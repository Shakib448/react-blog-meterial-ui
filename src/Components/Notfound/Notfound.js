import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';




const Notfound = () => {

    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }
    return (
        <>
            <Typography variant='h3'>
                This page is not found
            </Typography>
            <Button color="secondary" onClick={() => handleBack()}>Back -;)</Button>
        </>
    );
}

export default Notfound;

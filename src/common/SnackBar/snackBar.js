import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SnackBar = (props) => {
    const {open, severity, message, handleBarClose} = props;
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        handleBarClose();
      };
    
    return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
        {message}
        </Alert>
    </Snackbar>);
};

export default SnackBar;

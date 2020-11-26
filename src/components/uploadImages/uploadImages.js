import React, { useState } from 'react';
import {styles} from './style';
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {httpPostDataAsForm} from '../../utils/httpFetch';
import {urls, snackBarStatus} from '../../utils/globalContants';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '../../common/SnackBar/snackBar';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(styles);

const UploadImages = (props) => {

    const classes = useStyles();
    const [catImage, setCatImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [snackBarInfo, setSnakbarInfo] = React.useState({
        open: false,
        severity: '',
        message: ''
    });

    const handleUploadClick = event => {
      setCatImage(event.target.files[0]);         
    };
  
    const handleUploadImage = () => {
      const formData = new FormData();
      formData.append('file', catImage);
      setIsLoading(true);
      httpPostDataAsForm(urls.uploadCatImage, formData).then((data) => {
        if (data.approved > 0) {
          props.history.push('/')
        } else {
          setSnakbarInfo({
            open: true,
            severity: snackBarStatus.error,
            message: `Image upload failed - ${data.message} `
        });
        }
        setIsLoading(false);
      }).catch(err => {        
        setIsLoading(false);
      })
    };

    const handleBarClose = () => {
      setSnakbarInfo({
        open: false,
        severity: '',
        message: ''
    });
    }
  
    return (
      <div className={classes.container}>
          <div><span>Choose an image to view and upload</span>
          <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUploadClick}
                className={classes.input}
                data-testid="openImage" 
          />
          <label htmlFor="contained-button-file">
                <Fab component="span" className={classes.button}>
                  <AddPhotoAlternateIcon />
                </Fab>
          </label>
          </div>
          {catImage && <><img className={classes.image} src={URL.createObjectURL(catImage)}/>
          <Button variant="contained" color="primary" onClick={handleUploadImage}> Upload Image </Button>
          {isLoading && <CircularProgress size={18} />} </>}
          <SnackBar handleBarClose={handleBarClose} open={snackBarInfo.open} severity={snackBarInfo.severity} message={snackBarInfo.message}></SnackBar>
      </div>
    );
  }
  
export default UploadImages;
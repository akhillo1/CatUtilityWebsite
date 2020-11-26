import React, { useEffect, useState } from 'react';
import {getFavouriteImages} from './service';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {styles} from './style';
const useStyles = makeStyles(styles);

const FavouriteImages = (props) => {

    const classes = useStyles();
    const [images, setImages] = useState([]); 

    useEffect(() => {
        getFavouriteImages().then(result => {
            setImages(result);
        });
    }, [])


    return (
        <Grid container item xs={12} spacing={3}>
            {images.map(item => {
                return <Grid key={item.id} container item sm={6} md={3} >
                    <img alt='Cat Image' src={item.url} className={classes.img}/>
                </Grid>
            })}
        </Grid>
    )
};

export default FavouriteImages;
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CatImage from './catImage/catImage';
import {getCatData} from './service';

const useStyles = makeStyles((theme) => ({
    container:{
        padding: '25px'
    }
}));

const ImageContainer = () => {

    const classes = useStyles();
    const [catData, setCatData] = useState({});
    useEffect(() => {
        getCatData().then(data => {
            setCatData(data);
        })
    }, []);

    const getVoteInfoForSpecificCat = (id) => {
       return catData.votes.filter(item => item.image_id === id && item.value === 1).length - catData.votes.filter(item => item.image_id === id && item.value === 0).length;
    }

    const getFavouriteInfoForSpecificCat = (id) => {
        return catData.favourites.find(item => item.image_id === id);
     }

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        {catData.images && catData.images.map(item => {
                            return <CatImage key={item.id} favInfo={getFavouriteInfoForSpecificCat(item.id)} votes={getVoteInfoForSpecificCat(item.id)} catInfo={item}/>
                        })}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ImageContainer;
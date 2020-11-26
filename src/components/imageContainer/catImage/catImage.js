import React, { useReducer, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {reducer} from './reducer';
import {setVoteChange, setFavourite, setUnfavuorite} from './service';
import {styles} from './style';

const useStyles = makeStyles(styles);

const CatImage = (props) => {

    const initialState = {
        vote: null,
        favourite: props.favInfo ? true : false
    };
    const {catInfo} = props;
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [votes, setVotes] = useState(props.votes); 
    const [favId, setFavId] = useState(props.favInfo ? props.favInfo.id : '');
    
    const handleVoteUpOrDown = (vote) => {
        dispatch({ type: 'voteChange', payload: vote });
        if (state.vote !== vote) {
            setVoteChange(props.catInfo.id, vote).then(data => {
                if (data.message === 'SUCCESS') {
                    setVotes(vote ? votes+1 : votes-1);
                }
            })
        }  
    }

    const handlefavouriteClick = () => {
        dispatch({ type: 'favouriteChange', payload: !state.favourite});
        if (!state.favourite) {
            setFavourite(props.catInfo.id).then(data => {
                if (data.message === 'SUCCESS') {
                    setFavId(data.id); 
                }
            });
        } else if (favId) {
            setUnfavuorite(favId).then(data => {
                if (data.message === 'SUCCESS') {
                    setFavId('');    
                }
            }) 
        } 
    }

    return (
        <Grid container item sm={6} md={3} >
            <Card className={classes.root}>
                <IconButton data-testid="favouriteButton" style={state.favourite === true ? {color: 'red'} : {color:''}} onClick={handlefavouriteClick}  aria-label="add to favorites" className={classes.favIcon}>
                    <FavoriteIcon />
                </IconButton>
                <img alt='test' src={catInfo.url} className={classes.img}/>
                <CardActions disableSpacing>
                    <IconButton data-testid="voteupButton" style={state.vote === true ? {color: 'blue'} : {color:''}} onClick={() => handleVoteUpOrDown(true)} aria-label="ThumbUp">
                        <ThumbUp />
                    </IconButton>
                    <IconButton data-testid="votedownButton" style={state.vote === false ? {color: 'blue'} : {color:''}} onClick={() => handleVoteUpOrDown(false)} aria-label="ThumbDown">
                        <ThumbDown />
                    </IconButton>        
                    Votes : {votes || 0 }            
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CatImage;

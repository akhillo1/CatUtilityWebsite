import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import {styles} from './style';
import './header.css';

const useStyles = makeStyles(styles);
  
const HeaderComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                CAT Lovers 
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <Container>
          <p className={classes.innerText}>If you're a cat lover, you likely think every part of your feline friend is adorable — from his fuzzy paws to his tiny pink nose. But while we may exclaim over their furry ears and darling whiskers, these parts all serve a remarkable purpose that may go unnoticed at first glance.
          Get up close and personal with tiny kitty paws, noses and tongues through these macro photos and learn more about your adorable furry friend.</p>
          <p className={classes.innerText}> You can upload cat images, like/dislike and select your favourite cat images </p>
          </Container>
        </div>
      );
    
}

export default HeaderComponent;
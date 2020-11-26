import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import { Switch, Route } from "react-router-dom";
import NavTabs from './common/NavigationTab/NavigationTab';
import ImageContainer from './components/imageContainer/imageContainer';
import UploadImages from './components/uploadImages/uploadImages';
import FavouriteImages from './components/favouriteImages/favouriteImages';
import { withRouter } from 'react-router-dom';

function App(props) {
  
  return (
    <React.Fragment>
      <div className="App-header">
        <HeaderComponent className='App-header'></HeaderComponent>
      </div>
      <div className="content">
        <NavTabs {...props}></NavTabs>
        <Switch>
            <Route path="/" component={ImageContainer} exact />
            <Route path="/upload" component={UploadImages} />
            <Route path="/favourites" component={FavouriteImages} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default withRouter(App);

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    color: 'black'
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function NavTabs(props) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const routeCollection = ['/', '/upload', '/favourites'];
  const pathname = props.history.location.pathname;

  useEffect(() => {
    const tabIndex = routeCollection.findIndex(item => pathname === item);
    setValue(tabIndex === -1 ? 0 : tabIndex);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabs}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab component={Link} label="Image Gallery" to="/" {...a11yProps(0)} />
          <Tab component={Link} label="Upload an Image" to="/upload" {...a11yProps(1)} />
          <Tab component={Link} label="Favourite Images" to="/favourites" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
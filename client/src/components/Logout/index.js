//Imports
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
// import Api from "../../utils/API"
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';

//styling 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#00355F",
    fontFamily: 'serif',
  },
  links: {
    color: "#00355F",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'serif',
  },
  home: {
    color: "#00355F",
    fontSize: 30,
    fontFamily: 'serif',
  },
  navBar: {
    background: "#F5c71a"
  }
}));

//Nav bar component
export default function SearchAppBar() {
  const classes = useStyles();

  const [redirect, setRedirect] = useState("")

  //If yu click logout, redirect the page, if not show the current page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
            U-BREAK-WE-FIX
          </Typography>
            <IconButton>
              <Tooltip title="Home"><Link to="/home" > <HomeIcon className={classes.home} />  </Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="View Request"><Link className={classes.links} to="/viewRequest" > viewRequest </Link></Tooltip>
            </IconButton>
            <IconButton>
            <Tooltip title="Log Out"><Link className={classes.links} to="/">Logout</Link></Tooltip>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
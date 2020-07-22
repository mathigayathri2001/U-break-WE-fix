//Imports
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import Api from "../../utils/API"
//import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Container from '@material-ui/core/Container';
import {cyan, teal } from '@material-ui/core/colors'
import "./style.css"

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
    // color: "#00355F",
    color: "white",
    fontFamily: 'serif',
  },
  links: {
    color: "white",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'serif',
  },
  home: {
    color: "white",
    fontSize: 30,
    fontFamily: 'serif',
  },
  navBar: {
     background: "#00796b",
     padding:10,
     width:"100%"
    // background:"#b60040;",
  }
}));

//Nav bar component
export default function SearchAppBar() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              U-BREAK-WE-FIX
          </Typography>
            <IconButton>
              <Tooltip title="Home"><Link to="/" > <HomeIcon className={classes.home} /> </Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Are-U-A-HandyMan"><Link className={classes.links} to="/handysignup"  >Are-U-A-HandyMan?</Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Sign-Up"><Link className={classes.links} to="/signup"  > Sign-Up </Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Log-In"><Link className={classes.links} to="/login"  > Log-In</Link></Tooltip>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
// }
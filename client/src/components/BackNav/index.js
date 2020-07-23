//Imports
import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { AuthContext } from '../../utils/auth-context'

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
    color: "#fdd835",
    fontFamily: 'Acme, sans-serif'
  },
  links: {
    color: "white",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'serif',
    '&:hover': {
      color:'#fdd835'
    },
  },
  menulinks:{
    color: "black",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'serif',
  },
  back: {
    color: "white",
    fontSize: 30,
    fontFamily: 'serif',
    '&:hover': {
      color:'#fdd835'
    },
  },
  navBar: {
    background: "#263238",    
    padding:10,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

//Nav bar component
export default function SearchAppBar() {
  const classes = useStyles();
  const auth = useContext(AuthContext);

  const [redirect, setRedirect] = useState("")
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log("Logout functionality");
    auth.ulogout();
    setRedirect('/login')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    console.log("Hello click")
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    > 
    <MenuItem>
        <IconButton>
        <Tooltip title="Back"><Link to="/handysearch" > <ArrowBackIcon className={classes.back} /> </Link></Tooltip>
            </IconButton>
        </MenuItem>
        <MenuItem>
        <IconButton>
            <Tooltip title="Log Out" onClick={handleSubmit}><Link className={classes.menulinks} to="/">Logout</Link></Tooltip>
            </IconButton>
        </MenuItem> 
        </Menu>
  );

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
          <div className={classes.sectionDesktop}>
            <IconButton>
            <Tooltip title="Back"><Link to="/handysearch" > <ArrowBackIcon className={classes.back} /> </Link></Tooltip>
            </IconButton>
            <IconButton>
            <Tooltip title="Log Out" onClick={handleSubmit}><Link className={classes.links} to="/">Logout</Link></Tooltip>
            </IconButton>
            </div>
            <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}
//Imports
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Icon, InlineIcon } from '@iconify/react';
import mdConstruct from '@iconify/icons-ion/md-construct';
import "./style.css";

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
    color: "#F7F8FB",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'Acme, sans-serif',
    '&:hover': {
      color:'#fdd835'
    },

  },
  menulinks:{
    color: "black",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'Acme, sans-serif',
  },
  home: {
    color: "#F7F8FB",
    fontSize: 30,
    fontFamily: 'Acme, sans-serif',
    '&:hover': {
      color:'#fdd835'
    },
  },
  navBar: {
    background: "#263238",
     padding:10,
     borderTop: '2px solid #fdd835 '
    //  width:"100%"
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
        <Tooltip title="Are-U-A-HandyMan"><Link className={classes.menulinks} to="/handysignup"  >Are-U-A-HandyMan?</Link></Tooltip>
        </IconButton>
        </MenuItem>
        <MenuItem>
        <IconButton>
          <Tooltip title="Sign-Up"><Link className={classes.menulinks} to="/signup"  > Sign-Up </Link></Tooltip>
        </IconButton>
        </MenuItem>
        <MenuItem>
        <IconButton>
           <Tooltip title="Log-In"><Link className={classes.menulinks} to="/login"  > Log-In</Link></Tooltip>
        </IconButton>
      </MenuItem>
    </Menu>
  );
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
          <Typography variant="h4" className={classes.title}><InlineIcon icon={mdConstruct} color="#fdd835" textalign="center"/>
            U-BREAK-WE-FIX<i className="fa fa-cog fa-spin fa-1x fa-fw"></i><span className="sr-only">Loading...</span>
          </Typography>
            <IconButton>
              <Tooltip title="Home"><Link to="/" > <HomeIcon className={classes.home} /> </Link></Tooltip>
            </IconButton>
            <div className={classes.sectionDesktop}>
            <IconButton>
              <Tooltip title="Are-U-A-HandyMan"><Link className={classes.links} to="/handysignup"  >Are-U-A-HandyMan?</Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Sign-Up"><Link className={classes.links} to="/signup"  > Client Signup </Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Log-In"><Link className={classes.links} to="/login"  > Login</Link></Tooltip>
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



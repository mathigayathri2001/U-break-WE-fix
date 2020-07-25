//Imports
import React, { useState, useContext } from 'react';
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
import { AuthContext } from '../../utils/auth-context'
import { Icon, InlineIcon } from '@iconify/react';
import mdConstruct from '@iconify/icons-ion/md-construct';

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
  home: {
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
  }
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

  //If yu click logout, redirect the page, if not show the current page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
          <Typography variant="h4" className={classes.title}><InlineIcon icon={mdConstruct} color="#fdd835" textAlign="center"/>
            U-BREAK-WE-FIX<i className="fa fa-cog fa-spin fa-1x fa-fw"></i><span className="sr-only">Loading...</span>
          </Typography>
            {/* <IconButton>
              <Tooltip title="Home"><Link to="/" > <HomeIcon className={classes.home} />  </Link></Tooltip>
            </IconButton> */}
            {/* <IconButton>
              <Tooltip title="View Request"><Link className={classes.links} to="/viewRequest" > My Requests </Link></Tooltip>
            </IconButton> */}
            <IconButton>
            <Tooltip title="Log Out" onClick={handleSubmit}><Link className={classes.links} to="/">Logout</Link></Tooltip>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
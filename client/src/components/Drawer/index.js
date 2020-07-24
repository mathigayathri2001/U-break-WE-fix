
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Icon, InlineIcon } from '@iconify/react';
import mdConstruct from '@iconify/icons-ion/md-construct';
import Tooltip from '@material-ui/core/Tooltip';
import { AuthContext } from '../../utils/auth-context'
import { Link, Redirect } from "react-router-dom"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#263238"
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#263238"
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  links: {
    color: "white",
    textDecoration: "none",
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'Acme, sans-serif',
    '&:hover': {
      color:'#fdd835'
    },
  }
}));



function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const auth = useContext(AuthContext);

  const [redirect, setRedirect] = useState("")
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log("Logout functionality");
    auth.ulogout();
    setRedirect('/login')
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider/>
      <List>
      <InlineIcon icon={mdConstruct} width="200" height="200" color="#fdd835" textAlign="center"/>
      </List>
      <div className={classes.links}>
       U-BREAK-WE-FIX

      </div>

      
      <Divider />
      <List>
        {/* {['My Requests'].map((text, index) => (
          <ListItem button key={text}> */}
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            {/* <ListItemText primary={text} />
          </ListItem>
        ))} */}
          <IconButton>
              <Tooltip title="View Request"><Link className={classes.links} to="/viewhandyrequest" > My Requests </Link></Tooltip>
            </IconButton>
      </List>
      <Divider />
      <List>
        {/* {['Logout'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            {/* <ListItemText primary={text} />
          </ListItem> */}
        {/* ))} */}

        <IconButton>
            <Tooltip title="Log Out" onClick={handleSubmit}><Link className={classes.links} to="/">Logout</Link></Tooltip>
            </IconButton>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <h2>U-BREAK-WE-FIX</h2>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};


export default ResponsiveDrawer;
//Imports
import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper'
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Redirect } from 'react-router-dom'
import Nav from '../components/Navbar'
import BothLogin from '../components/Login'
import Image from '../components/Login/background.jpg'
import Footer from '../components/Footer'

// import API from '../utils/API';
// import { AuthContext } from '../utils/auth-context';

//Styling
const useStyles = makeStyles(theme => ({
  root: {
    // height: '100vh'
  },
  image: {
    backgroundImage:
      'url(https://www.onlinemarketplaces.com/ext/resources/-1GOMS/Jobs/Misc/handyman.png?1551388685?1551388685)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  links: {
    '&:hover': {
      color: 'black'
    },
    color: 'black',
    textDecoration: 'none'
  },
  background:{
    backgroundImage: `url(${Image})`,
    minHeight: '100vh'
  },
}))

//Signin component
export default function Login (props) {
  const classes = useStyles()

  

  //If redirect is true , redirect to the path name or else show the sign in component
  // if (redirect) {
  //   return <Redirect to={{ pathname: redirect }} />
  // } else if(wrongInfo){
  return (
    <div>
      <Nav/>
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.background} >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Login
          </Typography><BothLogin/>

          {/* <Box component="span" visibility="visible" p={1} m={1} bgcolor="background.paper">
      Invalid user name and password combination!
    </Box> */}

          <Typography
            visibility='hidden'
            component='h1'
            variant='h5'
          ></Typography>

          {/* <form className={classes.form} noValidate>
            <Grid>
              <Button>
                <Link className={classes.links} to='/handylogin'>
                  {' '}
                  Handyman login
                </Link>
              </Button>
            </Grid>

            <Grid>
              <Button>
                <Link className={classes.links} to='/userlogin'>
                  {' '}
                  User login
                </Link>
              </Button>
            </Grid>
          </form>*/}
        </div>
      </Grid>
    </Grid> 
    <Footer />
    </div>
  )
}

//Imports
import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Redirect } from 'react-router-dom'
import Nav from '../components/Navbar'
import BothLogin from '../components/Login'
import Image from '../components/Login/background.jpg'

//Styling
const useStyles = makeStyles(theme => ({
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
    width: '100%', 
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
          <Typography
            visibility='hidden'
            component='h1'
            variant='h5'
          ></Typography>
        </div>
      </Grid>
    </Grid> 
    </div>
  )
}

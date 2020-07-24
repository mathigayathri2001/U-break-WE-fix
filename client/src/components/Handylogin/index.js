//Imports
import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'
import API from '../../utils/API'
import { AuthContext } from '../../utils/auth-context'
import Navbar from '../Navbar'
import Image from '../Login/background.jpg'
import Footer from '../Footer'

//Styling
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#fdd835',
    '&:hover': {
      backgroundColor: '#263238',
      color:'white'
    },
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
  }
}))

//Signin component
export default function SignInSide (props) {
  const classes = useStyles()

  //Copyright
  function Copyright () {
    return (
      <Typography
        className={classes.links}
        variant='body2'
        color='textSecondary'
        align='center'
      >
        {'Copyright © '}
        <Link color='inherit' href='https://material-ui.com/'>
          U-BREAK-WE-FIX
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  //Username hook
  const [usernameText, setUsernameText] = useState('')

  //Setting the state of username
  const handleInputChangeUserName = event => {
    setUsernameText(event.target.value)
    console.log(usernameText)
  }

  const auth = useContext(AuthContext)

  //Password Hook
  const [passwordText, setPasswordText] = useState('')

  //Setting the state of password
  const handleInputChangePassword = event => {
    setPasswordText(event.target.value)
    console.log(passwordText)
  }

  //Redirect hook
  const [redirect, setRedirect] = useState('')

  const [wrongInfo, setWrongInfo] = useState(false)

  // Called when we click our signIn button
  const handleSignIn = event => {
    event.preventDefault()
    console.log('handleSubmit')

    API.handymanLogin({
      email: usernameText,
      password: passwordText
    })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          auth.hlogin(response.data.handymanId, response.data.token)
          // update the state to redirect to home
          setRedirect('/viewHandyRequest')
        }
      })
      .catch(error => {
        console.log('login error: ')
        console.log(error)
        setWrongInfo(true)
      })
  }

  //If redirect is true , redirect to the path name or else show the login component
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else if (wrongInfo) {
    return (
      <div >
        <Navbar/>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.background}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              login
            </Typography>
            <Box
              component='span'
              visibility='visible'
              p={1}
              m={1}
              bgcolor='background.paper'
            >
              Invalid user name and password combination!
            </Box>
            <Typography
              visibility='hidden'
              component='h1'
              variant='h5'
            ></Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='User Name'
                name='username'
                autoComplete='username'
                autoFocus
                onChange={handleInputChangeUserName}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleInputChangePassword}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
                onClick={handleSignIn}
              >
                 Handyman Login
              </Button>
              <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <Link
                    href='/handysignUp'
                    variant='body2'
                    className={classes.links}
                  >
                    {"Don't have a handyman account? Sign Up here "}
                  </Link>                
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      </div>
    )
  } else {
    return (
      <div >
      <Navbar/>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.background}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Handyman Login
            </Typography>
            <Box
              component='span'
              visibility='hidden'
              p={1}
              m={1}
              bgcolor='background.paper'
            >
              Invalid user name and password combination!
            </Box>
            <Typography
              visibility='hidden'
              component='h1'
              variant='h5'
            ></Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Email'
                name='username'
                autoComplete='username'
                autoFocus
                onChange={handleInputChangeUserName}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleInputChangePassword}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
                onClick={handleSignIn}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <Link
                    href='/handysignUp'
                    variant='body2'
                    className={classes.links}
                  >
                    {
                      "Don't have a handyman account? Sign Up here to be a handyman"
                    }
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      <Footer />
      </div>
    )
  }
}

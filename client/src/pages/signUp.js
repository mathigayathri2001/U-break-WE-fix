//Imports
import React, { useEffect, useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Api from '../utils/API'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../utils/auth-context'
import Nav from '../components/Navbar'
import Image from '../components/Login/background.jpg'

//Styling
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3)
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

//SignUp component
export default function SignUp () {
  const classes = useStyles()
  const auth = useContext(AuthContext);

  //Redirect hook
  const [redirect, setRedirect] = useState('')

  //Hook for username
  const [email, setEmail] = useState('')

  //handle input change for user email
  const handleInputChangeE = event => {
    setEmail(event.target.value)
    console.log(email)
  }

  //Password hook
  const [password, setPassword] = useState('')

  //Handle input change for password
  const handleInputChangeP = event => {
    setPassword(event.target.value)
    console.log(password)
  }

  //firstName hook
  const [name, setName] = useState('')

  //Handle input change for first name
  const handleInputChangename = event => {
    setName(event.target.value)
    console.log(name)
  }

  //Saving person in database
  const handleSubmit = event => {
    event.preventDefault()
    console.log('clicked')
    Api.saveUser({
      name,
      email,
      password
    })
      .then(res => {
        console.log('user created')
        console.log(res.data.token)
        auth.ulogin(res.data.userId, res.data.token)
        setRedirect('/userlogin')
      })
      .catch(error => {
        console.log(error)
      })
  }

  //If redirect is true redirect, or else show signup page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    return (
      <div className={classes.background}>
        <Nav />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Client Signup
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='name'
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  id='name'
                  label=' Name'
                  onChange={handleInputChangename}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email'
                  name='email'
                  onChange={handleInputChangeE}
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={handleInputChangeP}
                  autoComplete='current-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              // color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Signup
            </Button>
            <Grid container justify='space-around'>
              <Grid item>
                <Link
                  href='/userlogin'
                  variant='body2'
                  className={classes.links}
                >
                  Already have an account? Login here
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </div>
    )
  }
}

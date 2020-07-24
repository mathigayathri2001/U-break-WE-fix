//Imports
import React, { useEffect, useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Api from '../utils/API'
import { Redirect } from 'react-router-dom'
import GoogleMaps from '../components/Location/index'
import { AuthContext } from '../utils/auth-context'
import SearchBar from '../components/Searchbar'
import Navbar from '../components/Navbar'
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
    width: '100%', // Fix IE 11 issue.
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
  const auth = useContext(AuthContext)
  // const accent = pink['200'];

  //Redirect hook
  const [redirect, setRedirect] = useState('')

  //Hook for username
  const [email, setEmail] = useState('')

  //handle input change for username
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

  //phoneNumber hook
  const [phoneNumber, setPhone] = useState('')

  //Handle input change for phoneNumber
  const handleInputChangePhone = event => {
    setPhone(event.target.value)
    console.log(phoneNumber)
  }

  //location hook
  const [location, setLocation] = useState('')

  //Handle input change for location
  const handleInputChangeLocation = event => {
    //console.log(event);
    setLocation(event);
    console.log(location)
  }

  const [servicelist, setService] = useState([])

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    Api.getService().then(res => {
      setService(res.data)
      console.log(res.data)
      console.log('service list:')
    })
  }, [])
//const service = [];
  const [service, setServiceN] = React.useState([]);

  const onServiceChange = event => {
      setServiceN(event);
  }

  //Saving person in database
  const handleSubmit = event => {
    event.preventDefault()
    console.log('clicked')
    console.log(name + ' ' + email + ' ' + phoneNumber)
    console.log(service)
    Api.saveHandyman({
      name,
      email,
      password,
      phoneNumber,
      location,
      service
    })
      .then(res => {
        console.log('handyman created')
        console.log(res.data.token)
        auth.hlogin(res.data.handymanId, res.data.token)
        setRedirect('/handylogin')
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
         <Navbar />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Are you a Handyman? Join our family!
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
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='phoneNumber'
                  label='PhoneNumber'
                  type='phoneNumber'
                  id='phoneNumber'
                  onChange={handleInputChangePhone}
                  autoComplete='current-phoneNumber'
                />
              </Grid>
              <Grid item xs={12}>
                <GoogleMaps
                  items={location}
                  onChange={handleInputChangeLocation}
                />
              </Grid>
              <Grid item xs={12}>
                <p>Choose the services you can provide:</p>
                <SearchBar items={servicelist} onChange={onServiceChange} />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              // color='primary'
              color='accent'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify='space-around'>
              <Grid item>
                <Link
                  href='/handylogin'
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

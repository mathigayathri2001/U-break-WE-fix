import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { List } from '../components/List'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../utils/auth-context'
import Api from '../utils/API'

import Logout from '../components/Logout'

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
    // width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    minWidth: 395,
    maxWidth: 500 ,
    [theme.breakpoints.down('sm')]: {
      minWidth:300,
      maxWidth:350
    },

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
  title: {
    fontSize: 14
  },
  style:{
    minWidth: 395,
    maxWidth: 500 ,
    [theme.breakpoints.down('sm')]: {
      minWidth:300,
      maxWidth:400
    },
  }
}))

export default function ServiceRequestForm () {
  const classes = useStyles();
  const auth = useContext(AuthContext);

  //Redirect hook
  const [redirect, setRedirect] = useState('')

  //firstName hook
  const [service, setSname] = useState('');

  //Handle input change for first name
  const handleInputChangesname = event => {
    setSname(event.target.value)
    console.log(service)
  }

  //phoneNumber hook
  const [phoneNumber, setPhone] = useState('')

  //Handle input change for phoneNumber
  const handleInputChangePhone = event => {
    setPhone(event.target.value)
    console.log(phoneNumber)
  }

  //ServiceDescription hook
  const [description, setSD] = useState('')

  //Handle input change for service description
  const handleInputChangeSD = event => {
    setSD(event.target.value)
    console.log(description)
  }
 
  let uid,hid,location;

  //Saving person in database
  const handleSubmit = event => {
    event.preventDefault()
    //console.log('clicked')

    uid = auth.userId;
    console.log(auth.servicehid);
    hid = auth.servicehid;
    //hid = auth.handymanId;
    // console.log(uid);
    // console.log(location)
    location = auth.location;
    // console.log(service);
    // console.log(phoneNumber);
    // console.log(description)
    // console.log(auth.location);

    Api.saveserviceRequest({
      uid,
      hid,
      phoneNumber,
      location,
      service,
      description
    })
      .then(resp => {
        console.log('service request created');
        setRedirect('/handysearch')
      })
      .catch(error => {
        console.log(error)
      })
  }

  //If redirect is true redirect, or else show signup page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    if(!auth.isLoggedIn) {
      setRedirect('/login');
    }
  return (
    <div>
      <Logout />
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Grid>
            {/* <Grid item xs={12} style={{ width: 500 }}> */}
            <Grid item xs={12}sm={12}>
              <Card className={classes.root} variant='outlined'>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom
                  >
                    Service Request
                  </Typography>
                </CardContent>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}sm={12}>
                    <TextField
                  name='ServiceName'
                  variant='outlined'
                  required
                  fullWidth
                  id='sname'
                  label=' Service Name'
                  className={classes.style}
                  onChange={handleInputChangesname}
                  autoFocus
                />
                </Grid>
                <Grid item xs={12}sm={12}>
                      <TextField
                        id='phoneNumber'
                        name='phoneNumber'
                        type='phoneNumber'
                        label='Your Phone Number'
                        className={classes.style}
                        variant='outlined'
                        required
                        fullWidth
                        onChange={handleInputChangePhone}
                        autoComplete='current-phoneNumber'
                      />
                    </Grid>
                    <Grid item xs={12}sm={12}>
                      <TextField
                        id='outlined-multiline-static'
                        label='Service Description'
                        multiline
                        rows={4}
                        className={classes.style}
                        // defaultValue='Default Value'
                        variant='outlined'
                        required
                        fullWidth
                        onChange={handleInputChangeSD}
                      />
                    </Grid>
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      color='primary'
                      className={classes.submit}
                      onClick={handleSubmit}
                    >
                      Submit Request
                    </Button>
                  </Grid>
                </form>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
  }
}

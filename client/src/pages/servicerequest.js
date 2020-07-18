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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
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
  }
}))

export default function ServiceRequestForm () {
  const classes = useStyles()
  const auth = useContext(AuthContext)

  //Redirect hook
  const [redirect, setRedirect] = useState('')

  //firstName hook
  const [service, setSname] = useState('')

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

  // const [uname, setUname] = useState();
  // const [uemail, setUemail] = useState();


  //Saving person in database
  const handleSubmit = event => {
    event.preventDefault()
    console.log('clicked')

    let location,uname,uemail;

    location = auth.location;
    console.log(service)
    console.log(phoneNumber)
    console.log(description)
    console.log(auth.location)
    console.log(auth.slist)
    console.log(auth.userId);

    Api.getUserById(auth.userId)
    .then( res => {
        // setUname(res.data.name);
        // setUemail(res.data.email);
        uname = res.data.name;
        uemail = res.data.email;
        console.log(uname + ' ' + uemail); 

        Api.saveserviceRequest({
          uname,
          uemail,
          phoneNumber,
          location,
          service,
          description
        })
          .then(resp => {
            console.log('service request created')
            //console.log(res.data)
            //auth.ulogin(res.data.userId, res.data.token)
            //setRedirect('/handysearch')
          })
          .catch(error => {
            console.log(error)
          })
    })
    .catch(error => {
        console.log(error);
    })

    //setRedirect('/handysearch')
    // Api.saveHandyman({
    //   name,
    //   email,
    //   password,
    //   phoneNumber,
    //   location,
    //   service
    // })
    //   .then(res => {
    //     console.log('handyman created')
    //     console.log(res.data.token)
    //     auth.login(res.data.handymanId, res.data.token)
    //     setRedirect('/handylogin')
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

  return (
    <div>
      <Logout />
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Grid>
            <Grid item xs={12} style={{ width: 500 }}>
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
                    <Grid item xs={12}>
                    <TextField
                  name='ServiceName'
                  variant='outlined'
                  required
                  fullWidth
                  id='sname'
                  label=' Service Name'
                  onChange={handleInputChangesname}
                  autoFocus
                />
                </Grid>
                <Grid item xs={12}>
                      <TextField
                        id='phoneNumber'
                        name='phoneNumber'
                        type='phoneNumber'
                        label='Your Phone Number'
                        style={{ width: 498 }}
                        variant='outlined'
                        onChange={handleInputChangePhone}
                        autoComplete='current-phoneNumber'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id='outlined-multiline-static'
                        label='Service Description'
                        multiline
                        rows={4}
                        style={{ width: 498 }}
                        // defaultValue='Default Value'
                        variant='outlined'
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

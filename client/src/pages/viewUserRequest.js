//Imports
import React, { useEffect, useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Api from '../utils/API'
import { Link, Redirect } from 'react-router-dom'
import GoogleMaps from '../components/Location/index'
import { AuthContext } from '../utils/auth-context'
import SearchBar from '../components/Searchbar'
import ViewRequest from '../components/ViewRequest'
import { List } from '../components/List'
import Card from '../components/Card'
import Logout from '../components/Logout'

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
    margin: theme.spacing(3, 0, 2)
  },
  links: {
    '&:hover': {
      color: 'black'
    },
    color: 'black',
    textDecoration: 'none'
  }
}))

//SignUp component
export default function ViewUserRequest () {
  const classes = useStyles()
  const auth = useContext(AuthContext)

  //Redirect hook
  const [redirect, setRedirect] = useState('')
  const [userReqLists, setUserReqLists] = useState([])
  const [userHandyLists, setHandyReqLists] = useState([])
  const [message, setMessage] = useState('No request made')

  // let uname,uemail;
  let uid = auth.userId
  console.log(uid)
  let hid
  let hname, hemail
  let result
  let service
  let phoneNumber

  useEffect(() => {
    Api.getuserview({uid : uid})
      .then(res => {
        //console.log(res.data)
        result = res.data
        //console.log(result[0].hid)
        hid = result[0].hid
        //console.log(result)
        if (res.data.length !== 0) {
          setUserReqLists(res.data)
        } else {
          console.log('no user request found')
        }
        //console.log(hid)
        Api.getHandymanById(hid)
          .then(res => {
            console.log(res.data)
            setHandyReqLists(res.data)
          })
          .catch(error => {
            console.log(error)
          })
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log(userHandyLists)
  //If redirect is true redirect, or else show signup page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    return (
      <div>
        <Logout />
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} noValidate></form>
            <Grid>
              <Grid item xs={12} style={{ width: 1000 }}>
                <Card>
                  {userReqLists.length ? (
                    <List>
                      {userReqLists.map(userReqList => (
                        <ViewRequest
                          // key={handymanlist.id}
                          service={userReqList.service}
                          description={userReqList.description}
                          status={userReqList.status}
                          hname={userHandyLists.name}
                          hemail={userHandyLists.email}
                          phoneNumber={userHandyLists.phoneNumber}
                        />
                      ))}
                    </List>
                  ) : (
                    <h2 className='text-center'>{message}</h2>
                  )}
                </Card>
              </Grid>
            </Grid>
          </div>
          <Box mt={8}>{/* <Copyright /> */}</Box>
        </Container>
      </div>
    )
  }
}

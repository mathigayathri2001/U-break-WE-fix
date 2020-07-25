//Imports
import React, { useEffect, useState, useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Api from '../utils/API'
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../utils/auth-context'
import ViewRequest from '../components/ViewRequest'
import { List } from '../components/List'
import Card from '../components/Card'
// import BackNav from '../components/BackNav'
import Drawer from '../components/Drawerback'

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
    margin: theme.spacing(3, 0, 2)
  },
  links: {
    '&:hover': {
      color: 'black'
    },
    color: 'black',
    textDecoration: 'none'
  },
  text:{
    textAlign:"center"
  }
}))

//SignUp component
export default function ViewUserRequest () {
  const classes = useStyles()
  const auth = useContext(AuthContext)

  //Redirect hook
  const [redirect, setRedirect] = useState('')
  const [userReqLists, setUserReqLists] = useState([])
  const [message, setMessage] = useState('')
  const [flag, setFlag] = useState(false)

  let uid = auth.userId
  let location = auth.location
  console.log(uid)

  // if (!auth.userId){
  //   // localStorage.getItem('handymanData')
  //   const user=JSON.parse (localStorage.getItem('userData'))
  //   uid=user.userId
  // }

  let hid
  let hname, hemail
  let result = []
  let service
  let phoneNumber;

  useEffect(() => {
    const fetchData = async () => {
      try {
      result = await Api.getuserview({uid : uid});
      setUserReqLists(result.data)
      } catch(err) {
         console.log("Error getting service request data");
      }
      if(result.data.length === 0) {
        setMessage('No requests found');
        setFlag(true)
      }
    };
    fetchData();
  }, []);

  //If redirect is true redirect, or else show signup page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    let show;
    if(flag === true) {
        show = <h2 className='text-center'>{message}</h2>;
    }
    return (
      <div>
        {/* <BackNav /> */}
        <Drawer/>
        <div className={classes.text}>
          <h2> Requests submitted </h2>
        </div>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Grid>
              <Grid item xs={12} >
                <Card>
                  {userReqLists.length ? (
                    <List>
                      {userReqLists.map(userReqList => (
                        <ViewRequest
                          key={userReqList._id}
                          service={userReqList.service}
                          description={userReqList.description}
                          status={userReqList.status}
                          location={userReqList.location}
                          hname={userReqList.uid}
                          hemail={userReqList.hid}
                          phoneNumber={userReqList.phoneNumber}
                        />
                      ))}
                    </List>
                  ) : (
                    show
                  )}
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    )
  }
}

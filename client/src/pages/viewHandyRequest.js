//Imports
import React, { useEffect, useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Api from '../utils/API'
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../utils/auth-context'
import ViewHandyRequest from '../components/ViewHandyRequest'
import { List } from '../components/List'
import Card from '../components/Card'
// import Logout from '../components/Logout'
import Drawer from '../components/Drawer'
// import Footer from '../components/Footer1'

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
    background: "#a5d6a7"
  },
  submit1: {
    margin: theme.spacing(3, 0, 2),
    background: "#ef9a9a"
  },
  submit2: {
    margin: theme.spacing(3, 0, 2),
    background: "#bdbdbd"
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
export default function ViewHRequest () {
  const classes = useStyles()
  const auth = useContext(AuthContext)

  //Redirect hook
  const [redirect, setRedirect] = useState('')
  const [userReqLists, setUserReqLists] = useState([])
  const [userHandyLists, setHandyReqLists] = useState([])
  const [message, setMessage] = useState('')
  const [flag, setFlag] = useState(false);

  let hid = auth.handymanId
  console.log(hid)
  if (!auth.handymanId){
    const handyman=JSON.parse (localStorage.getItem('handymanData'))
    hid=handyman.handymanId
  }
  let uid
  let result
  let location = auth.location

  useEffect(() => {
    const fetchData = async () => {
      try {
      result = await Api.gethandyview({hid : hid});
      setHandyReqLists(result.data)
      } catch(err) {
         console.log("Error getting service request data");
      }
      if(result.data.length === 0) {
        setMessage('No requests found');
        setFlag(true);
      }
    };
    fetchData();
  }, []);

  const setReqStatus = (uid, reqstatus) => {
   // event.preventDefault()
    console.log(uid)
    console.log(reqstatus)
    Api.setReqStatus({
      uid,
      reqstatus
    })
      .then(res => {
        console.log(res.data)
        const request=userHandyLists.find(r=>r._id===uid)
        request.status=reqstatus
        const newList=userHandyLists.filter(r=>r._id!==uid)
        setHandyReqLists([...newList, request])
        // setUserReqLists(res.data)
        //setRedirect('/viewhandyrequest')        
      })
      .catch(error => {
        console.log(error)
      })
  }
  //If redirect is true redirect, or else show signup page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    let show;
    if(flag) {
        show = <h2 className='text-center'>{message}</h2>;
    }
    return (
      <div>
        {/* <Logout /> */}
        <Drawer/>
        <div className={classes.text}>
          <h2> Client Requests</h2>
        </div>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Grid>
              <Grid item xs={12}>
                <Card>
                  {userHandyLists.length ? (
                    <List>
                      {userHandyLists.map(userHandyList => (
                        <ViewHandyRequest
                          key={userHandyList._id}
                          service={userHandyList.service}
                          description={userHandyList.description}
                          status={userHandyList.status}
                          location={userHandyList.location}
                          uname={userHandyList.uid}
                          uemail={userHandyList.hid}
                          phoneNumber={userHandyList.phoneNumber}
                          Button={() => (
                            <ButtonGroup>                              
                              <Button  
                               type='submit'
                               variant="contained" 
                               className={classes.submit}
                                onClick={() =>
                                  setReqStatus(userHandyList._id, 'ACCEPTED')
                                }
                              >
                                Accept
                              </Button>
                              <Button
                              type='submit'
                              variant="contained" 
                              className={classes.submit1}
                                onClick={() =>
                                  setReqStatus(userHandyList._id, 'REJECTED')
                                }
                              >
                                Reject
                              </Button>
                              <Button
                              type='submit'
                              variant="contained" 
                              className={classes.submit2}
                                onClick={() =>
                                  setReqStatus(userHandyList._id, 'CLOSED')
                                }
                              >
                                Close
                              </Button>                            
                            </ButtonGroup>
                          )}
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

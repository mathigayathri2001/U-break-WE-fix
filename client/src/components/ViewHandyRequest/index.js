import React from 'react'
import { ListItem } from '../List'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { lightBlue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
    color: 'black',
    backgroundColor: '#dcedc8'
  },
  button: {
    padding: 50
  }
}))

function ViewHandyRequest ({
  service,
  description,
  status,
  location,
  uname,
  uemail,
  phoneNumber,
  Button
}) {
  const classes = useStyles()
  return (
    <ListItem>
      <Grid>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item md={8}>
              {/* <Paper className={classes.paper}> */}
              <Grid><label><strong>Name:</strong> {uname}</label></Grid>
              <Grid><label><strong>Email:</strong> {uemail}</label></Grid>
              <Grid><label><strong>PhoneNumber:</strong> {phoneNumber}</label></Grid>
              <Grid><label><strong>Service: </strong>{service}</label></Grid>
              <Grid><label><strong>Description:</strong> {description}</label></Grid>
              <Grid><label><strong>Location: </strong>{location}</label></Grid>
              <Grid><label><strong>Status: </strong>{status}</label></Grid> 
              <Grid>
              <Button className={classes.button}></Button>               
              </Grid>              
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ListItem>
  )
}

export default ViewHandyRequest

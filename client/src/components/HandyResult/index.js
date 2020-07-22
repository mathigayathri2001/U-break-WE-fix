import React from 'react'
import { ListItem } from '../List'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { lightGreen} from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
    color: 'black',
    backgroundColor: '#dcedc8',
    width:700,
    [theme.breakpoints.down('sm')]: {
      width:400
    },
    // [theme.breakpoints.up('sm')]: {
    //   width:500
    // },
    [theme.breakpoints.up('sm')]: {
      width:600
    },
    [theme.breakpoints.up('md')]: {
      width:700
    },
  },
  button: {
    padding: 50
  }
}))

function HandyResult ({ email, location, name, phoneNumber, service, Button }) {
  const classes = useStyles()
  return (
    <ListItem>
      {/* <Grid> */}
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item md={8}>
              {/* <Paper className={classes.paper}> */}
              <Grid><label><strong>Name :</strong> {name}</label></Grid>
              <Grid><label><strong>Email :</strong> {email}</label></Grid>
              <Grid><label><strong>PhoneNumber :</strong> {phoneNumber}</label></Grid>
              <Grid><label><strong>Location :</strong> {location}</label></Grid>
              <Grid><label><strong>Service :</strong> {service}</label></Grid>
              {/* </Paper> */}
            </Grid>
            <Grid item md={4}>
              {/* <Paper className={classes.paper}> */}
              <Button className={classes.button} />
              {/* </Paper> */}
            </Grid>
          </Grid>
        </Paper>
      {/* </Grid> */}
    </ListItem>
  )
}

export default HandyResult

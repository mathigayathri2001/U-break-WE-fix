import React from 'react'
import { ListItem } from '../List'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Image from "../Login/background2.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
    color: 'black',
    // backgroundColor: '#cfd8dc',
    backgroundImage: `url(${Image})`,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      width: 300
    },
    [theme.breakpoints.up('sm')]: {
      width: 600
    },
    [theme.breakpoints.up('md')]: {
      width: 700
    }
  },
  button: {
    padding: 50
  }
}))

function HandyResult ({ email, location, name, phoneNumber, service, Button }) {
  const classes = useStyles()
  return (
    <ListItem>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Grid>
              <label>
                <strong>Name :</strong> {name}
              </label>
            </Grid>
            <Grid>
              <label>
                <strong>Email :</strong> {email}
              </label>
            </Grid>
            <Grid>
              <label>
                <strong>PhoneNumber :</strong> {phoneNumber}
              </label>
            </Grid>
            <Grid>
              <label>
                <strong>Location :</strong> {location}
              </label>
            </Grid>
            <Grid>
              <label>
                <strong>Service :</strong> {service}
              </label>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Button className={classes.button} />
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  )
}

export default HandyResult

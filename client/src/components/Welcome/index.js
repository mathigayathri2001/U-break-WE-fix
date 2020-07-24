import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Image from './background.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#263238",
    backgroundImage: `url(${Image})`,
    fontFamily: 'Acme, sans-serif'
  }
}))

export default function FullWidthGrid () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>
              <Zoom right cascade>
                <div>WELCOME TO U BREAK WE FIX!!</div>
              </Zoom>
            </h1>
            <h3>
              <Fade right cascade delay={2000}>
                <div>Your One Stop Destination To All Your Household Problems!</div>
              </Fade>
            </h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

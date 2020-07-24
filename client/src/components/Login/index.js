import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Image from './background2.jpg'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px auto',
    maxWidth: 500,
    backgroundImage: `url(${Image})`,
  },
  image: {
    width: 290,
    height: 250
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}))

export default function ComplexGrid () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={() => (window.location.href = '/userlogin')}>
              <Grid>
              <img
                className={classes.img}
                alt='Client'
                src='images/clients.jpg'
              />
              </Grid>
              <Grid>
              <Button variant="contained" color="secondary" >Login</Button>
              </Grid>              
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={() => (window.location.href = '/handylogin')}>
              <img
                className={classes.img}
                alt='Handyman'
                src='images/handyman.jpg'
              />
              <Button variant="contained" color="secondary" >Login</Button>
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      </div>
  )
}
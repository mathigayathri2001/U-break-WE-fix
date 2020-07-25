import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Image from './background.jpg'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px auto',
    maxWidth: 500,
    backgroundImage: `url(${Image})`
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
  },
  button: {
    alignItems:"center",
  }
}))

export default function ComplexGrid () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              className={classes.image}
              onClick={() => (window.location.href = '/userlogin')}
            >
              <img
                className={classes.img}
                alt='Client'
                src='images/clients.jpg'
              />
            </ButtonBase>
          </Grid>
        </Grid>
        <Button className={classes.button} onClick={() => (window.location.href = '/userlogin')} variant='contained' color='secondary'>
          Client Login
        </Button>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              className={classes.image}
              onClick={() => (window.location.href = '/handylogin')}
            >
              <img
                className={classes.img}
                alt='Handyman'
                src='images/handyman.jpg'
              />
            </ButtonBase>
          </Grid>
        </Grid>
        <Button className={classes.button}  onClick={() => (window.location.href = '/handylogin')} variant='contained' color='secondary'>
          Handyman Login
        </Button>
      </Paper>
    </div>
  )
}

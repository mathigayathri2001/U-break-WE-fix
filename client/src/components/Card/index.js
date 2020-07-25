import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    //  minWidth: 275,
    // backgroundColor:'lightgreen',
    // [theme.breakpoints.down('sm')]: {
    //   width:200
    backgroundColor: "#F7F8FB"
    // }, 
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  color: {
    color: 'black',
    backgroundColor: 'rgb(189, 182, 147)',
    padding: 30,
    fontSize: 50
  },
  list: {
    color: 'black'
  }
}))

export default function SimpleCard ({ children }) {
  const classes = useStyles()
  // const bull = <span className={classes.bullet}>•</span>

  return (
    <Grid item xs={12}sm={12} md={12}lg={12} >
    <Card className={classes.root} spacing={6}>
      {/* <CardHeader className={classes.color} title='Results'></CardHeader> */}
      <CardContent>
        <Typography variant='h6' component='h5' className={classes.list}>
          {children}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  )
}

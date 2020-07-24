import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Image from './background.jpg'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
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
            <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Plumbing Works'
                src='images/Plumber.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Plumbing Works
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Whether you’re looking at plumbing replacement or
                  installation, or need emergency plumbing repair, you can count
                  on us.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Appliance Repair'
                src='images/Appliance.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Appliance Repair
                </Typography>
                <Typography variant='body2' gutterBottom>
                  All our appliance repair technicians are insured, trained and
                  licensed.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Carpet Cleaning'
                src='images/Carpet.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Carpet Cleaning
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Our technology involves carbonation to extract the dirt from
                  the source.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Deck and Fence Installation'
                src='images/Deck.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Deck & Fence Installation
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Choose between our various wood or composite materials and
                  layout to build your dream deck.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Duct Cleaning'
                src='images/Duct.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Duct Cleaning
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We use state-of-the-art equipment brushes and high pressured
                  compressed air whips to dislodge the dirt and debris inside
                  the duct.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Electrical Works'
                src='images/Electrical.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Electrical Works
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We can perform all types of electrical installation and
                  repair.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Flooring & Tiling'
                src='images/Flooring.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Flooring & Tiling Works
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We provide the right flooring solution for your home.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Garage Door Installation'
                src='images/Garage.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Garage Door Installation
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We provide all kinds of Garage Door Installations and
                  Maintenances.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Heating & Cooling'
                src='images/Heater.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Heating & Cooling
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We provide services and repairs to all makes and models of
                  existing heating & air conditioning systems
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Junk Removal'
                src='images/Junk.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Junk Removal
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We strive to ensure a professional, clean, and organized
                  removal or recycling of all your unwanted items safely.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='LAwn & Landscaping'
                src='images/Lawn.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Landscaping & Lawn Maintenance
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Our approach involves an enjoyable landscape environment,
                  which enhances the overall curb appeal
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Moving and Delivery'
                src='images/Mover.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Moving & Delivery
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We specializes in professional moving, home delivery, and
                  packing services
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Door and Wall Painting'
                src='images/Painting.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Door & Wall Painting
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Our painting contractors can take care of all your interior
                  and exterior painting needs.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Patio Works'
                src='images/Patio.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Patio Maintenance
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Our services include fixing splintering wood, water damage, or
                  other issues with your patio.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
             <ButtonBase className={classes.image} onClick={() => (window.location.href = '/signup')}>
              <img
                className={classes.img}
                alt='Pest Control'
                src='images/Pest.jpg'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Our Services: Pest Control
                </Typography>
                <Typography variant='body2' gutterBottom>
                  We offer various services such as prevention, intervention and
                  control of pests.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/signup')}>
                  <Button variant="contained" color="secondary" >More Details</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { List } from '../components/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Logout from '../components/Logout'

const useStyles = makeStyles((theme) => ({
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
        width: '100%', // Fix IE 11 issue.
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
      title: {
        fontSize: 14,
      },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
         <Logout />
         <Container component='main' maxWidth='xs'>
         <div className={classes.paper}>
         <Grid>
              <Grid item xs={12} style={{ width: 1000 }}>
              <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Service Request
               </Typography>
               </CardContent>
                    <List>
                      <h1>Hello</h1>
                      <h2>how are you</h2>
                    </List>
                    <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="outlined"
            />
            </Grid>
              <Grid item xs={12}>
              <TextField 
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          style={{ width: 394}}
          defaultValue="Default Value"
          variant="outlined"
        />
              </Grid>
              </Grid>
              </form>              
                </Card>
              </Grid>
            </Grid>
            </div>     
    </Container>
    </div>
  );
  }
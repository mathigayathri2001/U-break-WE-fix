// import React from "react";

// const header= {
//   background:"cadetblue",

// };

// function Card({ icon, title, children }) {
//   return (
//     <div className="card mt-4">
//       <div className="card-header" style={header}>
//         <h3>
//           <strong>
//             <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
//           </strong>
//         </h3>
//       </div>
//       <div className="card-body">{children}</div>
//     </div>
//   );
// }

// export default Card;

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { lightGreen, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    minWidth: 275
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
})

export default function SimpleCard ({ children }) {
  const classes = useStyles()
  // const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root} spacing={6}>
      {/* <CardHeader className={classes.color} title='Results'></CardHeader> */}
      <CardContent>
        <Typography variant='h6' component='h5' className={classes.list}>
          {children}
        </Typography>
      </CardContent>
    </Card>
  )
}

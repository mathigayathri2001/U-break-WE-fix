import React, { useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 395,
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
      maxWidth: 400
    }
  }
}))

function getStyles (name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

export default function MultipleSelect ({ items, onChange }) {
  const classes = useStyles()
  const theme = useTheme()
  const [serviceName, setServiceName] = React.useState([])

  const handleChange = event => {
    //console.log(event.target.value);
    setServiceName(event.target.value)
  }

  useEffect(() => {
    console.log(serviceName)
    onChange(serviceName)
  })

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-mutiple-checkbox-label'>ServiceList</InputLabel>
        <Select
          labelId='demo-mutiple-checkbox-label'
          id='demo-mutiple-checkbox'
          multiple
          value={serviceName}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
        >
          {items.map(item => (
            <MenuItem key={item._id} value={item.name}>
              <Checkbox checked={serviceName.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

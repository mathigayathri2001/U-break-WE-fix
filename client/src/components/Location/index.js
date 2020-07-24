import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'

function loadScript (src, position, id) {
  if (!position) {
    return
  }

  const script = document.createElement('script')
  script.setAttribute('async', '')
  script.setAttribute('id', id)
  script.src = src
  position.appendChild(script)
}

const autocompleteService = { current: null }

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  },
  style: {
    minWidth: 395,
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
      maxWidth: 400
    }
  }
}))

export default function GoogleMaps ({ onChange }) {
  // export default function GoogleMaps(onChange) {
  const classes = useStyles()
  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState([])
  const loaded = React.useRef(false)

  require('dotenv').config();
  console.log(process.env.REACT_APP_APIKEY);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        // 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqYqXhGCOhBR81giDtW815Xj4fRF5Ps40&libraries=places',
        // 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ3Po_WqtwTu9Q0ITpztj8stUZZBgQd7Y&libraries=places',
         `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_APIKEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps'
      )
    }
    loaded.current = true
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback)
      }, 200),
    []
  )

  React.useEffect(() => {
    let active = true

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService()
    }
    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === '') {
      setOptions(value ? [value] : [])
      return undefined
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        let newOptions = []

        if (value) {
          newOptions = [value]
        }

        if (results) {
          newOptions = [...newOptions, ...results]
        }

        setOptions(newOptions)
      }
    })

    return () => {
      active = false
    }
  }, [value, inputValue, fetch])
  console.log(value)
  console.log(inputValue)
  return (
    <Autocomplete
      id='google-map-demo'
      className={classes.style}
      getOptionLabel={option =>
        typeof option === 'string' ? option : option.description
      }
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      //  onChange={onChange}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options)
        // onChange(event)
        setValue(newValue)
      }}
      onInputChange={(event, newInputValue) => {
        console.log('google')
        //console.log(newInputValue)
        onChange(newInputValue)
        setInputValue(newInputValue)
      }}
      renderInput={params => (
        <TextField
          {...params}
          label='Add a location'
          variant='outlined'
          fullWidth
        />
      )}
      renderOption={option => {
        const matches =
          option.structured_formatting.main_text_matched_substrings
        // console.log(matches)
        // console.log (option.structured_formatting.main_text)
        const parts = parse(
          option.structured_formatting.main_text,
          // matches.map((match) => [match.offset, match.offset + match.length]),
          matches.map(match => [match.offset, match.offset])
        )

        return (
          <Grid container alignItems='center'>
            <Grid item xs={12}>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs={12}>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
              <Typography variant='body2' color='textSecondary'>
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        )
      }}
    />
  )
}

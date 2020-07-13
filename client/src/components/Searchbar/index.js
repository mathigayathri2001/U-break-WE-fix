/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import service from './service.json';
// import Button from '@material-ui/core/Button';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;





export default function CheckboxesTags({items, onChange}) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={items}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            // value={option["_id"]}
            value={option["rsn"]}
            onChange={onChange}
          />
          {option.name}
       
        </React.Fragment>
        
      )}
     
     
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}

import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


const useStyles = makeStyles(theme => ({
  root: {
   backgroundColor: "#F7F8FB",
  }
}));

// const options = [
//   // 'Show some love to Material-UI',
//   "Show all notification content",
//   "Hide sensitive notification content",
//   "Hide all notification content"
// ];

export default function SimpleListMenu({options, onChange}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(options[index]);
    setAnchorEl(null);
    onChange(options[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   useEffect(() => {
//     console.log(options[selectedIndex])
//     onChange(options[selectedIndex])
//   })

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Service Name"
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Service Name"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

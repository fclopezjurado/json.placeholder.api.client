import React, {Component} from 'react'
import {TABLE_ROW_STYLES} from "../config";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import LocalPostOffice from '@material-ui/icons/LocalPostOffice';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import MenuItem from '@material-ui/core/MenuItem';

class ImprovedMenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItemText: props.listItemText,
      classes: props.classes
    }
  }

  render() {
    const {listItemText, classes} = this.state;
    return (<MenuItem className={classes.menuItem} style={TABLE_ROW_STYLES}>
      <ListItemIcon className={classes.icon} style={TABLE_ROW_STYLES}>
        <LocalPostOffice/>
      </ListItemIcon>
      <ListItemText classes={{primary: classes.primary}} style={TABLE_ROW_STYLES} inset primary={listItemText}/>
    </MenuItem>);
  }
}

export default ImprovedMenuItem;
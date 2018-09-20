import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {TABLE_STYLES} from "../config";
import ImprovedMenuItem from "./ImprovedMenuItem";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Posts from "./Posts";
import Comments from "./Comments";
import Albums from "./Albums";
import Photos from "./Photos";
import Todos from "./Todos";
import Users from "./Users";

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

const POSTS_LIST_ITEM_TEXT = "Get posts";
const COMMENTS_LIST_ITEM_TEXT = "Get comments";
const ALBUMS_LIST_ITEM_TEXT = "Get albums";
const PHOTOS_LIST_ITEM_TEXT = "Get photos";
const TODOS_LIST_ITEM_TEXT = "Get todos";
const USERS_LIST_ITEM_TEXT = "Get users";

function listItemComposition(props) {
  const {classes} = props;
  return (<Router>
    <div>
      <Paper style={TABLE_STYLES}>
        <MenuList>
          <Link to="/posts">
            <ImprovedMenuItem listItemText={POSTS_LIST_ITEM_TEXT} classes={classes}/>
          </Link>
          <Link to="/comments">
            <ImprovedMenuItem listItemText={COMMENTS_LIST_ITEM_TEXT} classes={classes}/>
          </Link>
          <Link to="/albums">
            <ImprovedMenuItem listItemText={ALBUMS_LIST_ITEM_TEXT} classes={classes}/>
          </Link>
          <Link to="/photos">
            <ImprovedMenuItem listItemText={PHOTOS_LIST_ITEM_TEXT} classes={classes}/>
          </Link>
          <Link to="/todos">
            <ImprovedMenuItem listItemText={TODOS_LIST_ITEM_TEXT} classes={classes}/>
          </Link>
          <Link to="/users">
            <ImprovedMenuItem listItemText={USERS_LIST_ITEM_TEXT} classes={classes}/>
          </Link>
        </MenuList>
      </Paper>
      <br/>
      <Route exact path="/" component={Posts}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/comments" component={Comments}/>
      <Route path="/albums" component={Albums}/>
      <Route path="/photos" component={Photos}/>
      <Route path="/todos" component={Todos}/>
      <Route path="/users" component={Users}/>
    </div>
  </Router>);
}

export default withStyles(styles)(listItemComposition);

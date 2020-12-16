import React, {useState, useEffect} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
/* 
import AddTodoList from     './todolistboard/AddTodoList'
import Lists from     './todolistboard/Lists' */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";


export default function Sidebar() {
return (
  <div>

      <ListItem button component={NavLink} to="/newsfeed" activeClassName="Mui-selected">
      <ListItemIcon>
        <DashboardIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Newsfeed" />
    </ListItem>
  

    <ListItem button component={NavLink} to="/TodoApp" activeClassName="Mui-selected">
      <ListItemIcon>
        <BarChartIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="TodoApp" />
    </ListItem>

      <ListItem button component={NavLink} to="/Team" activeClassName="Mui-selected">
      <ListItemIcon>
        <PeopleIcon color="primary"/>
      </ListItemIcon>
      <ListItemText color="primary" primary="Team" />
    </ListItem>



    <ListItem button component={NavLink} to="/lists" activeClassName="Mui-selected">
      <ListItemIcon>
        <LayersIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Lists" />
    </ListItem>


  </div>

)
};


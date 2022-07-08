import React from 'react';
import { Link } from "react-router-dom";
import {TbTruckDelivery} from "react-icons/tb";
import {IoTime} from "react-icons/io5";
import {BsBagCheck} from "react-icons/bs";

import {
  List,
  ListItem,
  ListItemText,
}
from '@material-ui/core';

class DriverBar extends React.Component {
  render() {
    return (
      <div style = {{height: "600px"}}>
        <List component="nav" style={{backgroundColor:"#292C33", left: "-20px", top: "-29px", width: "350px", height: "2460px"}}>
        <img src="p1-removebg-preview.png" style={{width:180, marginTop: 20}} alt="" />
          <Link to={"/driver/home"} className="link">
            <ListItem style={{left: "70px", marginTop: "19px"}}>
              <IoTime className="homeIcon"></IoTime>
              <ListItemText style= {{marginLeft: 18}} primary={"All Pending Orders"} />
            </ListItem>
          </Link>
          <Link to={"/driver/order"} className="link">
            <ListItem style={{left: "70px"}}>
              <TbTruckDelivery className="homeIcon"></TbTruckDelivery>
              <ListItemText  style= {{marginLeft: 18}} primary={"My Active Orders"} />
            </ListItem>
          </Link >
          <Link to={"/driver/history"} className="link">
            <ListItem style={{left: "70px"}}>
              <BsBagCheck className="homeIcon"></BsBagCheck>
              <ListItemText style= {{marginLeft: 18}} primary={"My Order History"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default DriverBar;
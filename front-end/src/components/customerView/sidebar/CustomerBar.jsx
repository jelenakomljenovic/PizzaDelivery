import React from 'react';
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {BsBagCheck} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";


import {
  List,
  ListItem,
  ListItemText,
}
from '@material-ui/core';

class CustomerBar extends React.Component {
  render() {
    return (
      <div id="div1" style = {{height: "600px"}}>
        <List component="nav" style={{backgroundColor:"#292C33", left: "-20px", top: "-29px", width: "350px", height: "2460px"}}>
        <img src="p1-removebg-preview.png" style={{width:180, marginTop: 20}} alt="" />
          <Link to={"/customer/home"} className="link">
            <ListItem  style={{left: "70px", marginTop: "19px"}}>
              <FaHome className="homeIcon"></FaHome>
              <ListItemText style= {{marginLeft: 18}} primary={"Home Page"}/>
            </ListItem >
          </Link>
          <Link to={"/customer/cart"} className="link">
            <ListItem style={{left: "70px"}}>
            <FaShoppingCart className="homeIcon"></FaShoppingCart>
              <ListItemText style= {{marginLeft: 18}}  primary={"Shopping Cart"}/>
            </ListItem >
          </Link>
          <Link to={"/customer/orders"} className="link">
            <ListItem style={{left: "70px"}}>
              <TbTruckDelivery className="homeIcon"></TbTruckDelivery>
              <ListItemText style= {{marginLeft: 18}} primary={"Active Orders"} />
            </ListItem>
          </Link>
          <Link to={"/customer/history"} className="link">
            <ListItem style={{left: "70px"}}>
              <BsBagCheck className="homeIcon"></BsBagCheck>
              <ListItemText style= {{marginLeft: 18}}  primary={"Order History"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default CustomerBar;
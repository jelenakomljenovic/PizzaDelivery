import React from 'react';
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {FaInfoCircle} from "react-icons/fa";
import { BsPlusCircleFill} from "react-icons/bs";
import {BsBagCheck} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";
import {
  List,
  ListItem,
  ListItemText
}
from '@material-ui/core';

class RestaurantBar extends React.Component {
  render() {
    return (
      <div style = {{height: "600px"}}>
        <List component="nav" style={{backgroundColor:"#292C33", left: "-20px", top: "-29px", width: "350px", height: "2460px"}}>
          <img src="p1-removebg-preview.png" style={{width:180, marginTop: 20}} alt="" />
          <Link to={"/restaurant/home"} className="link">
            <ListItem style={{left: "70px", marginTop: "19px"}}>
              <FaHome className="homeIcon"></FaHome>
              <ListItemText  style= {{marginLeft: 18}} primary={"Home Page"} className = "list" />
            </ListItem>
          </Link>
          <Link to={"/restaurant/menu"} className="link">
            <ListItem style={{left: "70px"}}>
              <BsPlusCircleFill className="homeIcon"></BsPlusCircleFill>
              <ListItemText style= {{marginLeft: 18}} primary={"Update Menu"} />
            </ListItem>
          </Link>
          <Link to={"/restaurant/information"} className="link">
            <ListItem style={{left: "70px"}}>
              <FaInfoCircle className="homeIcon"></FaInfoCircle>
              <ListItemText style= {{marginLeft: 18}} primary={"Restaurant Info"} />
            </ListItem>
          </Link>
          <Link to={"/restaurant/order"} className="link">
            <ListItem style={{left: "70px"}}>
              <TbTruckDelivery className="homeIcon"></TbTruckDelivery>
              <ListItemText style= {{marginLeft: 18}} primary={"Active Orders"} />
            </ListItem>
          </Link>
          <Link to={"/restaurant/history"} className="link">
            <ListItem style={{left: "70px"}}>
              <BsBagCheck className="homeIcon"></BsBagCheck>
              <ListItemText style= {{marginLeft: 18}} primary={"Order History"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default RestaurantBar;
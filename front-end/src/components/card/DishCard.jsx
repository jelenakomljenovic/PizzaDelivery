import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  IconButton,
  CardActions,
  Grid
      } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Card.css";
const axios = require('axios').default;

class DishCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.removeDish = this.removeDish.bind(this);
  }

  handleAdd() {
    this.setState({number: this.state.number + 1});
    this.props.addDish("add", this.props.dish);
  }

  handleMinus() {
    this.setState({number: this.state.number - 1});
    this.props.addDish("minus", this.props.dish);
  }

  removeDish() {
    axios.post("/api/restaurant/removeDish", {
      restaurantId : this.props.currentUser.id,
      dish : this.props.dish
    }).then(
      response => {
        this.props.getAllDishes();
      }
    ).catch(err => console.log(err));
  }

  render() {
    return this.props.dish && this.props.currentUser ? (
      <Card style={{ border: "none", boxShadow: "none" }}>
        <img className="dishCardImage" src= {this.props.dish.imageUrl} alt={this.props.dish.dishName} />
        <CardHeader
          style={{backgroundColor: "white", height: "30px"}}
          titleTypographyProps={{variant:'body1'}}
          title={this.props.dish.dishName}
          
        />
        <p style={{ color: "#ff8c00", marginTop: -10 }}>{this.props.dish.description}</p>
        <CardActions style={{backgroundColor: "white"}}>
          {this.props.currentUser.type !== "restaurant" ?
          <Grid container justify="center" alignItems="center">
             <Typography style={{ color: "#C10A28", marginLeft: 18 }} variant="h6"> {this.props.dish.price + "$ " }</Typography>
            <IconButton style={{marginLeft: 86, color: "#C10A28", width: 3 }} disabled={this.state.number === 0} onClick={this.handleMinus}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6" style={{marginLeft: 10, color: "#C10A28" }}>{this.state.number}</Typography>
            <IconButton style={{color: "#C10A28", width: 3, height: 3, marginLeft: 5}} onClick={this.handleAdd}>
              <AddIcon />
            </IconButton>
          </Grid> : 
          <Grid container justify="center" alignItems="center">
            <IconButton onClick={this.removeDish}>
              <DeleteIcon />
            </IconButton>
          </Grid>
          }
        </CardActions>
      </Card>
    ) : <div />;
  }
}

export default DishCard;
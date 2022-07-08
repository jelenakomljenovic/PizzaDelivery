import React from 'react';
import {
  Grid, Typography
} from '@material-ui/core';
import ShowCard from "../../card/ShowCard";
import "./Restaurant.css";
const axios = require('axios').default;

class RestaurantHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      restaurants: undefined
    }
    this.handleChange = this.handleChange.bind(this);
    this.findRestaurants = this.findRestaurants.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.findRestaurants(this.searchText);
  }

  findRestaurants(query) {
    if (query !== undefined && query !== "") {
      axios.get("/api/restaurant/search/" + query).then(
        response => {
          this.setState({restaurants: response.data})
        }
      ).catch(err => console.log(err));
    } else {
      axios.get("/api/restaurant/all").then(
        response => {
          let temp = response.data.filter(restaurant => restaurant.information != null && restaurant.menu != null);
          this.setState({searchText: "", restaurants: temp});
        }
      ).catch(err => console.log(err));
    }
  }

  handleChange(content) {
    this.setState(content);
  }

  handleSearch(event) {
    event.preventDefault();
    this.findRestaurants(this.state.searchText);
  }

  render() {
    return this.props.currentUser ? (
      <div>
        <Typography variant="h5">
        <i>Hello Admin, Welcome to the Pizza Shop!</i>
        </Typography>
         <Grid container justify="center" style={{left: "70px"}}>     
          <Grid item xs={12}>
            <div className="cardbody">
              <Grid container justify="space-evenly" spacing={2}>
                {this.state.restaurants && this.state.restaurants.length !== 0 ? this.state.restaurants.map(restaurant => (
                  <Grid item xs={5} key={restaurant.id}>
                    <ShowCard userId={this.props.currentUser.id} restaurantId={restaurant.id} restaurantInfo={restaurant.information} />
                  </Grid>
                )) : <Typography variant="h5"><i>No result matches your search, please try again...</i></Typography>}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    ) : <div />;
  }
}

export default RestaurantHome;
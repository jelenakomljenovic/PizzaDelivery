import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './TopBar.css';
import UserMenu from "./UserMenu"
import {FaPizzaSlice} from "react-icons/fa";
const axios = require('axios').default;

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#C10A28'
    }
  },
});

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidUpdate() {
    if (this.state.view !== this.props.view) {
      this.setState({ view: this.props.view });
    }
  }

  logoutUser() {
    let type = this.props.currentUser.type;
    this.props.changeUser(undefined, "logout");
    axios.post("/api/" + type + "/logout", {}).then(
      () => {
        console.log("Successfully log out");
      }
    ).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar className="topbar" position="absolute" color="secondary">
          <Toolbar>
            {this.props.currentUser ?
            (<Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item> 
                <Typography variant="h5" color="inherit">
                <FaPizzaSlice className="icon"/> Pizza Shop
                </Typography>
              </Grid>
              <Grid item>
                <UserMenu currentUser={this.props.currentUser} logoutUser={this.logoutUser} />
              </Grid>
            </Grid>) : (<Typography variant="h5" color="inherit">
                <FaPizzaSlice className="icon"/> Pizza Shop
                </Typography>)}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default Topbar;
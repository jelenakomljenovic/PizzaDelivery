import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {
  Grid
} from '@material-ui/core';
import SellerBar from "./sidebar/SellerBar";
import SellerOrder from "./mainpage/SellerOrder";
import SellerHome from "./mainpage/SellerHome";
import SellerHistory from "./mainpage/SellerHistory";

class SellerView extends React.Component {
  constructor(props) {
    super(props);
    this.props.changeView("Driver")
  }
  render() {
    return this.props.currentUser ? (
      <Router>
        <Grid container justify="flex-start">
          <Grid item sm={3}>
            <SellerBar />
          </Grid>
          <Grid item sm={9}>
            <div className="grid-item">
              <Switch>
                <Route path="/driver/home" render={props => <SellerHome {...props} currentUser={this.props.currentUser} />} />
                <Route path="/driver/order" render={props => <SellerOrder {...props} currentUser={this.props.currentUser} />} />
                <Route path="/driver/history" render={props => <SellerHistory {...props} currentUser={this.props.currentUser} />} />
                <Redirect path="/driver" to="/driver/home" />
              </Switch>
            </div>
          </Grid>
        </Grid>
      </Router>
    ) : <div />;
  }
}

export default SellerView;
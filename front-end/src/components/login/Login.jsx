import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import {withStyles} from '@material-ui/core/styles';


import './Login.css';
const axios = require('axios').default;


const StyledInput = styled(TextField)`
width: 100%;
 & .MuiInput-underline::before {
   border-color: white !important;
   border-width: medium;
   

 }
 & .MuiInput-underline::after {
   border-color: white;
   border-width: medium;
 }
`;

const MyRadio = withStyles({
  root: {
      color: "#a9a9a9",
      '&$checked': {
          color: "red",
      },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userType: "customer",
      loginFailed: "",

    }
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }


 

  handleChange(content) {
    this.setState(content);
  }

  loginUser(event) {
    event.preventDefault();
    axios.post("/api/" +this.state.userType + "/login", {userName: this.state.userName, password: this.state.password}).then(
      response => {
        this.props.changeUser(response.data, "login");
      }
    ).catch(err => {
      console.log(err.response.data);
      this.setState({userName: "", password: "", loginFailed: err.response.data});
    });
  }

  render() {
    return (
      <Grid container>
         <Grid item xs={7}>
          <img className="image" alt="black" src='ppp.jpg' />
        </Grid>
        <Grid item xs={4}>
          <div className="container">
            <Typography component="h1" variant="h5" style={{color: "#ffffff"}}>
              Sign in
            </Typography><br></br><br></br>
            <Typography variant="body1" color="error">
              {this.state.loginFailed}
            </Typography>
            <form onSubmit={this.loginUser}>
            <StyledInput
                id="standard-username-input"
                variant="standard"
                margin="normal"
                required
                fullWidth
                label="Enter your username: "
                type="text"
                InputLabelProps={{
                  style: { color: '#a9a9a9' },
                }}
                value={this.state.userName}
                autoFocus
                onChange={event => this.handleChange({userName: event.target.value})}
              />
              <StyledInput
                id="standard-password-input"
                variant="standard"
                margin="normal"
                required
                fullWidth
                InputLabelProps={{
                  style: { color: '#a9a9a9' },
                }}
                label="Enter your password: "
                type="password"
                value={this.state.password}
                onChange={event => this.handleChange({password: event.target.value})}
              />
          
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{color: "red", fontWeight: "bold"}}><br></br><br></br>Login as a </FormLabel><br></br>
                <RadioGroup row aria-label="UserType" name="userType"  value={this.state.userType} onChange={event => this.handleChange({userType: event.target.value})}>
                  <FormControlLabel value="customer" control={<MyRadio/>}  label="Customer" style={{color: "#a9a9a9"}}/>
                  <FormControlLabel value="driver" control={<MyRadio />} label="Seller" style={{color: "#a9a9a9"}} />
                  <FormControlLabel value="restaurant" control={<MyRadio />} label="Admin"  style={{color: "#a9a9a9"}}/>
                </RadioGroup><br></br><br></br>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ width: "150px", height: "40px", backgroundColor: "#C10A28", borderRadius: "150px" }}
              >
                Sign In
              </Button>
              <br/>
              <br/>
              <Link to={"/register"} className="link">
                Don't have an account? Sign Up
              </Link>

              
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
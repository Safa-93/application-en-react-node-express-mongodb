import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utiles/Api";

export class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
  };
  send = async () => {
    const { email, password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email, password });
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    const { email, password, cpassword } = this.state;
    return (
      <div className='Login'>
        <FormGroup controlId='email'>
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type='email'
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type='password'
          />
        </FormGroup>
        <FormGroup controlId='cpassword'>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type='password'
          />
        </FormGroup>
        <Button onClick={this.send} type='submit'>
          Inscription
        </Button>
      </div>
    );
  }
}

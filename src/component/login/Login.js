import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utiles/Api";

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='login'>
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
            type='password'
            value={password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={this.send} type='submit'>
            Connexion
          </Button>
        </FormGroup>
      </div>
    );
  }
}

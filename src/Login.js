import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    phone: "",
    password: "",
    email: ""
  };

  onLogin = (phone, password) => {
    axios
      .post("http://localhost:3001/auth/sign-in", {
        phone,
        password
      })
      .then((response) => {
        this.setState({ email: response.data.email });
      });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <>
        <label>
          Tel:
          <input
            type="tel"
            maxLength="12"
            onChange={this.onChangePhone}
            value={this.state.phone}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={this.onChangePassword}
            value={this.state.password}
          ></input>
        </label>
        <button onClick={this.onLogin}>Sign in </button>
        <span>{this.state.email}</span>
      </>
    );
  }
}

export default Login;

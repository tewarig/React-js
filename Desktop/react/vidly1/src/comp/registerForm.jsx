import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/common";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: { username: " ", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name", "name")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;

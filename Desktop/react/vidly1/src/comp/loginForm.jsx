import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/common";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: " ", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  username = React.createRef();
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = () => {
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

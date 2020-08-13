import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./comp/movies";
import Customer from "./comp/customers";
import Rental from "./comp/rentals";
import NotFound from "./comp/notFound";
import NavBar from "./comp/common/navBAr";
import MovieForm from "./comp/moviesForms";
import LoginForm from "./comp/loginForm";
import Register from "./comp/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <main className="container">
        <NavBar />

        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customer}></Route>
          <Route path="/rentals" component={Rental}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./comp/movies";
import Customer from "./comp/customers";

import Rental from "./comp/rentals";
import NotFound from "./comp/notFound";
import NavBar from "./comp/common/navBAr";
import MovieForm from "./comp/moviesForms";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customer}></Route>
        <Route path="/rentals" component={Rental}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;

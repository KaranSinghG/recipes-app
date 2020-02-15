import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Recipes></Recipes>
        <SingleRecipe></SingleRecipe>
        <Default></Default>
      </div>
    );
  }
}

export default App;

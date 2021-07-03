import "./App.css";
import "tailwindcss/dist/tailwind.css";
import React from "react";
import { AppNav, AppHome, AppAbout, AppRecipes, AppChef } from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNav />
      </div>
      <Switch>
        <Route exact path="/" component={AppHome} />
        <Route path="/about" component={AppAbout} />
        <Route path={"/chef"} component={AppChef} />
        <Route path="/recipes" component={AppRecipes} />
      </Switch>
    </Router>
  );
}

export default App;

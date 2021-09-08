import "./App.css";
import "tailwindcss/dist/tailwind.css";
import React,{useEffect} from "react";
import {
  AppNav,
  AppHome,
  AppAbout,
  AppRecipes,
  AppChef,
  AppNutrition,
  AppCocktail,
  AppFooter,
  AppLogin,
  AppLogout,
  UserRecipes,
  // AppPrivateRoute as PrivateRoute,
} from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {checkUserAuth} from "./state/actionCreators";
import {connect} from "react-redux";
function App(props) {
  const {checkUserAuth} = props;
  useEffect(()=>{
    checkUserAuth();
  },[checkUserAuth]);
  return (
    <Router>
      <div className="App">
        <AppNav />
      </div>

      <Switch>
        <Route exact path={"/"} component={AppHome} />
        <Route path={"/about"} component={AppAbout} />
        <Route path={"/chef"} component={AppChef} />
        {/* redux */}
        <Route exact path={"/recipes"} component={AppRecipes} />
        <Route exact path={"/nutrition"} component={AppNutrition} />
        <Route exact path={"/cocktails"} component={AppCocktail} />
        {/* redux */}
        <Route exact path={"/login"} component={AppLogin} />
        {/* redux */}
        <Route exact path={"/logout"} component={AppLogout} />
        {/* redux */}
        <Route exact path={"/userrecipes"} component={UserRecipes}/>
      </Switch>
      <div className={"flex flex-col h-auto"}>
        <AppFooter />
      </div>
    </Router>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return {
    checkUserAuth:()=>dispatch(checkUserAuth())
  };
};
export default connect(null,mapDispatchToProps)(App);

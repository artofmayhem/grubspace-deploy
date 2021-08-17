import React from "react";
import { connect } from "react-redux";
import { searchValue, getRecipe } from "../state/ReducerState/Actions";
import { AppRecipeCards } from "./index";
import { Button } from "@material-ui/core";
import ScrollToTop from "react-scroll-to-top";

const initialState = {
searchValue: "",
number: 10,
}

const Recipes = (props) => {
  //initialize the recipes list
  const [searchValues, setSearchValue] = React.useState(initialState.searchValue);
  // const [numbers, setNumber] = React.useState(initialState.number);


  const handleChange = (event) => {
    //console.log("Incoming event target value in recipe", event.target.value);
    setSearchValue(event.target.value);
  };

  // const handleNumber = (event) => {
  //   //console.log("Incoming event number in recipe", event.target.value);
  //   setNumber(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchValue(searchValues);
    props.getRecipe(searchValues);
    // props.number(numbers);
    setSearchValue('')
  };



  return (
    <div className={"flex flex-col text-center"}>
      <ScrollToTop smooth />
      <div className={"recipes-container bg-black w-screen h-screen"}>
        <form onSubmit={handleSubmit}>
          <h2 className={"mt-64 text-white text-8xl"}>Recipes</h2>
          <h3 className={"mx-auto mt-3 text-white text-xl "}>
            Thousands of ideas await
          </h3>
          <input
            name={"searchBar"}
            className={
              "mx-auto mt-3 border-solid border-2 border-white h-12 w-60 text-center mb-20 mt-10 mr-5"
            }
            type="text"
            value={searchValues}
            style={{boxShadow: "0 0 1.5rem #444"}}
            onChange={handleChange}
            placeholder="Find your next meal here!"
          />{" "}
          {/* <input
            name={"numberOfRecipes"}
            className={
              "mx-auto mt-3 border-solid border-2 border-white h-12  text-center mb-20 mt-10 mr-5"
            }
            type="text"
            value={numbers}
            style={{boxShadow: "0 0 1.5rem #444"}}
            onChange={handleNumber}
          />{" "} */}
          <button
            type="submit"

            className={"border-2 bg-gray-400 text-white px-10 py-3 m-1.5 w-60"}
            onClick={handleSubmit}
          >
            Enter
          </button>{" "}
        </form>
      </div>
      <div className={"self-center bg-white text-white mt-32"}>
        <AppRecipeCards />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  getRecipe(state.searchValue);
  // console.log("searchValue being sent into getRecipes from recipe input", state.searchValue, state.number);
  return {
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = {
  searchValue,
  getRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);

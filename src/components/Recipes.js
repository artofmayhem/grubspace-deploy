import React from "react";
import { connect } from "react-redux";
import { searchValue, getRecipe } from "../state/ReducerState/Actions";
import { AppRecipeCards } from "./index";
import { Button } from "@material-ui/core";

const Recipes = (props) => {
  //initialize the recipes list
  const [searchValues, setSearchValue] = React.useState("");

  const handleChange = (event) => {
    //console.log("Incoming event target value in recipe", event.target.value);
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchValue(searchValues);
    props.getRecipe(searchValues);
  };

  React.useEffect(() => {
    props.getRecipe(props.searchValues);
    //console.log("Search Value from Recipes", searchValues);
  }, [props.searchValues]);

  return (
    <div className={"flex flex-col text-center"}>
      <div className={"recipes-container bg-black w-screen h-screen"}>
        <form onSubmit={handleSubmit}>
          <h2 className={"mt-64 text-black text-6xl"}>Recipes</h2>
          <h3 className={"mx-auto mt-3 text-black "}>
            Thousands of ideas await
          </h3>
          <input
            name={"searchBar"}
            className={
              "mx-auto mt-3 border-solid border-2 border-white shadow-xl h-12 text-center mb-20 mt-10 mr-5"
            }
            type="text"
            value={searchValues}
            onChange={handleChange}
          />{" "}
          <Button
            type="submit"
            variant="outlined"
            className={"shadow-xl"}
            onclick={handleSubmit}
          >
            Enter
          </Button>{" "}
        </form>
      </div>
      <div className={"self-center bg-black text-white mt-10"}>
        <AppRecipeCards />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  getRecipe(state.searchValue);
  //console.log("searchValue being sent into getRecipes from recipe input", state.searchValue)
  return {
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = {
  searchValue,
  getRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);

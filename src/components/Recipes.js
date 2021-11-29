import React from "react";
import { AppRecipeCards } from "./index";
import {
  RecipesOneImg,
  RecipesTwoImg,
  RecipesThreeImg,
  RecipesFourImg,
  RecipesSixImg,
} from "../assets/index";
import ScrollToTop from "react-scroll-to-top";

const initialState = {
  searchValue: "",
  number: 10,
};

const Recipes = () => {

  //initialize the recipes list
  const [searchValues, setSearchValue] = React.useState(
    initialState.searchValue
  );
  // const [numbers, setNumber] = React.useState(initialState.number);

  const handleChange = (event) => {
    //console.log("Incoming event target value in recipe", event.target.value);
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchValue(searchValues);
    // getRecipes(searchValues);
    // props.number(numbers);
    setSearchValue("");
  };

  return (
    <div className={"flex flex-col text-center"}>
      <ScrollToTop smooth />
      <div
        className={"recipes-container bg-black w-screen"}
        style={{ height: "39rem" }}
      >
        <h2 className={"animate-fade-in-down mt-64 text-white text-6xl"}>
          Recipes
        </h2>
      </div>
      <form
        className={"bg-gray-800 justify-center p-10 border-b-2"}
        style={{ height: "auto" }}
        onSubmit={handleSubmit}
      >
        <h3
          className={
            "animate-fade-in-1 mx-auto mt-3 text-white text-3xl mt-20 "
          }
        >
          Thousands of ideas await
        </h3>
        <input
          name={"searchBar"}
          className={
            "animate-fade-in-1 border-solid border-2 border-white p-4 w-60 text-center  mb-20 mt-10 m-auto"
          }
          type="text"
          value={searchValues}
          style={{ boxShadow: "0 0 1.5rem #444" }}
          onChange={handleChange}
          placeholder="Find your next meal here!"
        />{" "}
        <button
          type="submit"
          className={
            "animate-fade-in-2 border-2 bg-gray-400 text-white px-10 py-4 m-1.5 w-60"
          }
          onClick={handleSubmit}
        >
          Enter
        </button>{" "}
      </form>
      <AppRecipeCards />
      <div className="flex flex-row flex-wrap justify-center py-20 h-auto bg-yellow-600 border-t-2">
        <img src={RecipesOneImg} alt="Recipes One" className="h-80 p-2" />
        <img src={RecipesTwoImg} alt="Recipes Two" className="h-80 p-2" />
        <img src={RecipesThreeImg} alt="Recipes Three" className="h-80 p-2" />
        <img src={RecipesFourImg} alt="Recipes Four" className="h-80 p-2" />
        <img src={RecipesSixImg} alt="Recipes Six" className="h-80 p-2" />
      </div>
    </div>
  );
};

export default Recipes;

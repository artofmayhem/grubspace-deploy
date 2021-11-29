import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../styles/styles";
import axiosWithAuth from "../api/api";
import { RecipeBox } from "./index";
import {
  RecipesOneImg,
  RecipesTwoImg,
  RecipesThreeImg,
  RecipesFourImg,
  RecipesSixImg,
} from "../assets/index";
import initialRecipeFormValues from "../state/initial-states/initialRecipeFormState";

const UserRecipes = (props) => {
  const classes = useStyles();
  let history = useHistory();
  //const isDisabled = false;

  const [recipe, setRecipe] = useState({});
  const [formValues, setFormValues] = useState(initialRecipeFormValues);
  //const [disabled, setDisabled] = useState(isDisabled);

  //console.log(recipe, disabled, history, formValues)

  //FORM CONSTRUCTORS

  const addIngredientInputs = () => {
    return formValues.ingredients.map((item, idx) => {
      return (
        <div className="flex flex-row flex-wrap justify-evenly" key={idx}>
          <TextField
            name="ingredient"
            value={item.ingredient_name}
            key={idx}
            placeholder={`Ingredient ${idx + 1}`}
            onChange={(e) =>
              updateIngredients(e, { idx, key: "ingredient_name" })
            }
            margin="dense"
            className={classes.input}
            style={{ margin: "auto 5px" }}
          />
          <TextField
            name="ingredient"
            value={item.quantity}
            key={`quantity-${idx}`}
            placeholder="Quantity"
            onChange={(e) => updateIngredients(e, { idx, key: "quantity" })}
            margin="dense"
            className={classes.input}
            style={{ margin: "auto 5px" }}
          />
        </div>
      );
    });
  };

  const updateIngredients = (e, { idx, key }) => {
    const formCopy = { ...formValues };
    formCopy.ingredients[idx] = {
      ...formCopy.ingredients[idx],
      [key]: e.target.value,
    };
    setFormValues(formCopy);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    setFormValues(() => {
      return {
        ...formValues,
        ingredients: [...formValues.ingredients, ""],
      };
    });
  };

  const createInstructionsInputs = () => {
    return formValues.instructions.map((item, idx) => {
      return (
        <div key={idx}>
          <TextField
            value={formValues.instruction}
            placeholder={`Step ${idx + 1}`}
            onChange={(e) => updateInstructions(e, idx)}
            margin="dense"
            className={classes.input}
          />
        </div>
      );
    });
  };

  const updateInstructions = (e, idx) => {
    const formCopyInstructions = { ...formValues };
    formCopyInstructions.instructions[idx] = {
      instruction: e.target.value,
      step_number: idx + 1,
    };
    setFormValues(formCopyInstructions);
  };

  const addStep = (e) => {
    e.preventDefault();
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      instructions: [...formValues.instructions, formValues],
    }));
  };

  //CHANGE HANDLERS

  const postNewRecipe = (newRecipe) => {
    axiosWithAuth()
      .post("/recipes", newRecipe)
      .then((res) => {
        setRecipe(res.data);
        console.log(recipe);
        console.log("API USAGE SUCCESSFUL", res.data);
        setFormValues(initialRecipeFormValues);
        history.push("/user_recipes");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    const newRecipe = {
      recipe_name: formValues.recipe_name,
      recipe_description: formValues.recipe_description,
      recipe_source: formValues.recipe_source,
      user_id: 0,
      image_source: formValues.image_source,
      category_id: formValues.category_id,
      ingredients: formValues.ingredients,
      instructions: formValues.instructions,
    };

    postNewRecipe(newRecipe);
    alert("Your Recipe Has Been Added To YOur Recipe Box");
    setFormValues(initialRecipeFormValues);
  };

  return (
    <>
      <div
        className={
          "vault-container bg-black  w-screen flex flex-col justify-center align-center"
        }
      >
        <h2
          className={"animate-fade-in-down text-white mx-auto -mt-10 text-5xl"}
        >
          Recipe Vault
        </h2>
      </div>
      <div
        className={
          "bg-gray-800 text-white text-center flex flex-row flex-wrap py-20"
        }
        name="outerDivContainer"
      >
        <div className="flex justify-start flex-col border-r-2 py-32 px-10">
          <div
            className="flex justify-center flex-col"
            style={{
              margin: "5vh auto",
              minWidth: 375,
              width: "48vw",
              textSelf: "center",
            }}
          >
            <h4 className="self-center text-5xl">
              Welcome to your recipe box!
            </h4>
            <h5 className="py-6 text-2xl">
              Add your favorite recipes and get started collecting today.
            </h5>
          </div>
          <form
            className="flex items-center justify-center flex-col"
            id="recipeForm"
            onSubmit={handleSubmit}
          >
            <div
              className={
                "flex flex-row flex-wrap justify-evenly bg-yellow-600 border-2 py-16 px-5"
              }
              style={{ width: "40vw" }}
            >
              <TextField
                type="text"
                name="recipe_name"
                id="recipe_name"
                value={formValues.recipe_name}
                onChange={handleChange}
                label="Recipe Name"
                placeholder="Recipe Name"
                margin="dense"
                variant="outlined"
                className={classes.input}
              />
              <TextField
                type="text"
                name="recipe_description"
                id="recipe_description"
                value={formValues.recipe_description}
                onChange={handleChange}
                label="Description"
                placeholder="Description"
                margin="dense"
                variant="outlined"
                className={classes.input}
              />
              <TextField
                type="text"
                name="image_source"
                id="image_source"
                value={formValues.image_source}
                onChange={handleChange}
                label="Image Source"
                placeholder="Image Source"
                margin="dense"
                variant="outlined"
                className={classes.input}
              />
              <TextField
                type="text"
                name="recipe_source"
                id="recipe_source"
                value={formValues.recipe_source}
                onChange={handleChange}
                label="Recipe Source"
                placeholder="Recipe Name"
                margin="dense"
                variant="outlined"
                className={classes.input}
              />
            </div>
            <div
              className="flex justify-center items-center flex-column"
              style={{
                padding: "2vh 4vw",
                color: "white",
                fontSize: "3.5vh",
                margin: "2vh auto",
              }}
            >
              <label htmlFor="category_id">Meal Type</label>
            </div>
            <select onChange={handleChange} name="category_id">
              <option>---Select category---</option>
              <option value="">--Meal Period--</option>
              <option value={1}>Breakfast</option>
              <option value={2}>Lunch</option>
              <option value={14}>Desserts</option>
              <option value="">--Dishes--</option>
              <option value={5}>Soup</option>
              <option value={6}>Salad</option>
              <option value={4}>Appetizers</option>
              <option value={7}>Main Dishes: Beef</option>
              <option value={8}>Main Dishes: Poultry</option>
              <option value={9}>Main Dishes: Pork</option>
              <option value={10}>Main Dishes: Seafood</option>
              <option value={11}>Main Dishes: Vegetarian/ Vegan</option>
              <option value={12}>Side Dishes: Vegetables</option>
              <option value={13}>Side Dishes: Other</option>
              <option value="">--Other/ Misc--</option>
              <option value={15}>Canning and Freezing</option>
              <option value={16}>Breads</option>
              <option value={17}>Holidays/ Events</option>
              <option value={18}>Get Togethers</option>
              <option value={3}>Beverages</option>
            </select>
            <div
              className="flex flex-col justify-center"
              style={{
                margin: "5vh 1vw",
                border: "1px solid white",
                boxShadow: "0 0 2vh #333",
                width: "100%",
              }}
            >
              <div
                className="flex flex-col justify-start items-center bg-yellow-600"
                style={{ border: ".5px solid white" }}
              >
                <label
                  className={"text-3xl"}
                  htmlFor="ingredients"
                  style={{ color: "white", margin: "25px" }}
                >
                  -Ingredients-
                </label>
                {addIngredientInputs()}
                <button
                  onClick={addIngredient}
                  type="submit"
                  className={
                    "animate-fade-in-2 border-2 bg-gray-400 text-white py-3 m-1.5 my-6 w-48"
                  }
                >
                  + Ingredient
                </button>{" "}
              </div>
              <div
                className="flex flex-col justify-center items-center bg-yellow-600"
                style={{ border: ".5px solid white" }}
              >
                <label
                  className={"text-3xl"}
                  htmlFor="directions"
                  style={{ color: "white", margin: "3vh 0" }}
                >
                  -Instructions-
                </label>
                {createInstructionsInputs()}
                <button
                  onClick={addStep}
                  type="submit"
                  className={
                    "animate-fade-in-2 border-2 bg-gray-400 text-white py-3 m-1.5 my-6 w-48"
                  }
                >
                  + Instruction
                </button>{" "}
              </div>
            </div>
            <button
              type="submit"
              className={
                "animate-fade-in-2 border-2 bg-gray-400 text-white px-10 py-4 m-1.5 w-60 text-xl"
              }
              // onClick={handleSubmit}
            >
              Add Recipe
            </button>{" "}
          </form>
        </div>
        <div
          className="recipe-form bg-gray-800  text-white"
          style={{
            width: "47vw",
            minWidth: 375,
            height: "auto",
            textAlign: "center",
          }}
        >
          <div
            className="flex justify-center flex-col"
            style={{
              opacity: "0.8",
              width: "50vw",
              minWidth: 375,
              margin: "5vh auto",
              padding: "2vh 0",
            }}
          >
            <h5 className="text-5xl mt-24">Recipe Box</h5>
          </div>

          <RecipeBox />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center py-20 h-auto bg-yellow-600 border-t-2">
        <img src={RecipesOneImg} alt="Recipes One" className="h-80 p-2" />
        <img src={RecipesTwoImg} alt="Recipes Two" className="h-80 p-2" />
        <img src={RecipesThreeImg} alt="Recipes Three" className="h-80 p-2" />
        <img src={RecipesFourImg} alt="Recipes Four" className="h-80 p-2" />
        <img src={RecipesSixImg} alt="Recipes Six" className="h-80 p-2" />
      </div>
    </>
  );
};

export default UserRecipes;

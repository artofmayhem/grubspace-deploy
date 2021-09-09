import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  // const classes = useStyles();
  let history = useHistory();
  //const isDisabled = false;
  const [localUser, setLocalUser] = useState();
  // console.log("localUser from user recipes", Number( localUser ));
  const [recipe, setRecipe] = useState({});
  const [formValues, setFormValues] = useState(initialRecipeFormValues);
  //const [disabled, setDisabled] = useState(isDisabled);

  //console.log(recipe, disabled, history, formValues)

  //FORM CONSTRUCTORS

  const addIngredientInputs = () => {
    const username = localStorage.getItem("username");
    console.log("username", username);
    return formValues.ingredients.map((item, idx) => {
      return (
        <div
          className="flex flex-row flex-wrap justify-evenly items-center "
          key={idx}
          style={{ width: "100%" }}
        >
          <p className={'mx-2'}>{`Ingredient: ${idx + 1}`}</p>
          <input
            name="quantity"
            value={item.quantity}
            key={`quantity-${idx}`}
            placeholder="Quantity"
            onChange={(e) => updateIngredients(e, { idx, key: "quantity" })}
            margin="dense"
            className={
              "animate-fade-in-up border-solid border-2 border-white p-2 w-16 mx-1 my-1 text-center text-black"
            }
            style={{ boxShadow: "0 0 1.5rem #444" }}
          />
          <input
            name="ingredient"
            value={item.ingredient_name}
            key={idx}
            placeholder={`Ingredient ${idx + 1}`}
            onChange={(e) =>
              updateIngredients(e, { idx, key: "ingredient_name" })
            }
            margin="dense"
            className={
              "animate-fade-in-up border-solid border-2 border-white p-2 w-48 mx-1 my-1 text-center text-black"
            }
            style={{ boxShadow: "0 0 1.5rem #444" }}
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
        <div className={"flex flex-row flex-wrap items-center"} key={idx}>
          <p className={'mx-2'}>{`Step: ${idx + 1}`}</p>
          <input
            value={formValues.instruction}
            placeholder={`Step ${idx + 1}`}
            onChange={(e) => updateInstructions(e, idx)}
            margin="dense"
            className={
              "animate-fade-in-1 border-solid border-2 border-white p-2 w-72 mx-auto my-1 text-center text-black"
            }
            style={{ boxShadow: "0 0 1.5rem #444" }}
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

  const postNewRecipe = (req, newRecipe) => {
   
    setLocalUser(localStorage.getItem("user"))
    console.log('1 from userRecipes req:',req, 'user passed into endpoint', localUser);
    axiosWithAuth()
      .post(`/recipes/my-list/:${localUser}`, newRecipe)
      .then((res) => {
        setRecipe(res.data);
        console.log(recipe);
        console.log("API USAGE SUCCESSFUL", res.data);
        setFormValues(initialRecipeFormValues);
        history.push("/user_recipes");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);

    const newRecipe = {
      recipe_name: formValues.recipe_name,
      recipe_description: formValues.recipe_description,
      recipe_source: formValues.recipe_source,
      user_id: Number(localUser),
      image_source: formValues.image_source,
      category_id: Number(formValues.category_id),
      ingredients: formValues.ingredients,
      instructions: formValues.instructions,
    };

    postNewRecipe(newRecipe);
    alert("This Recipe Has Been Added To Your Recipe Box");
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
          style={{ textShadow: "0px 0px 1rem #000" }}
        >
          Recipe Vault
        </h2>
      </div>
      <div
        className={
          "bg-gray-800 text-white text-center flex flex-row flex-wrap items-start justify-center py-20"
        }
        name="outerDivContainer"
      >
        <div
          className="flex justify-center items-center flex-col border-r-2 py-0 px-10"
          style={{
            margin: "5vh auto",
            minWidth: 375,
            width: "50vw",
            textSelf: "center",
          }}
        >
          <div
            className="flex justify-center text-center item-center flex-col"
            style={{
              margin: "5vh",
              minWidth: 375,
              width: "50vw",
              textSelf: "center",
            }}
          >
       
            <h4 className="py-6 text-4xl px-10">
              Add your favorite recipes and get started collecting today.
            </h4>
          </div>
          <form
            className="flex items-center justify-center flex-col"
            id="recipeForm"
            onSubmit={handleSubmit}
          >
            <div
              className={
                "flex flex-row flex-wrap justify-evenly bg-yellow-600 border-2 pb-16 pt-10 px-5"
              }
              style={{ width: "47vw", minWidth: 375 }}
            >
              <h3
                className={"text-3xl mb-4"}
                style={{ width: "40vw", minWidth: 375 }}
              >
                -Details-
              </h3>
              <input
                type="text"
                name="recipe_name"
                id="recipe_name"
                value={formValues.recipe_name}
                onChange={handleChange}
                label="Recipe Name"
                placeholder="Recipe Name"
                margin="dense"
                className={
                  "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
                }
                style={{ boxShadow: "0 0 1.5rem #444" }}
              />
              <input
                type="text"
                name="recipe_description"
                id="recipe_description"
                value={formValues.recipe_description}
                onChange={handleChange}
                label="Description"
                placeholder="Description"
                margin="dense"
                  className={
                  "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
                }
                style={{ boxShadow: "0 0 1.5rem #444" }}
              />
              <input
                type="text"
                name="image_source"
                id="image_source"
                value={formValues.image_source}
                onChange={handleChange}
                label="Image Source"
                placeholder="Image Source"
                margin="dense"
                className={
                  "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
                }
                style={{ boxShadow: "0 0 1.5rem #444" }}
              />
              <input
                type="text"
                name="recipe_source"
                id="recipe_source"
                value={formValues.recipe_source}
                onChange={handleChange}
                label="Recipe Source"
                placeholder="Recipe Name"
                margin="dense"
                className={
                  "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
                }
                style={{ boxShadow: "0 0 1.5rem #444" }}
              />
            </div>
            <div
              className="flex justify-center items-center flex-column"
              style={{
                padding: "3vh 4vw",
                color: "white",
                fontSize: "3.5vh",
                margin: "2vh auto",
              }}
            >
              <label htmlFor="category_id">Meal Type</label>
            </div>
            <select
              onChange={handleChange}
              name="category_id"
              className={"h-10 text-white bg-gray-600 text-xl"}
            >
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
                className="flex flex-col justify-center items-center bg-yellow-600 "
                style={{ border: ".5px solid white", width: "100%" }}
              >
                <label
                  className={"text-3xl"}
                  htmlFor="ingredients"
                  style={{ color: "white", margin: "25px 5px" }}
                >
                  -Ingredients-
                </label>
                <div >{addIngredientInputs()}</div>
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
                <div>{createInstructionsInputs()}</div>
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
            className="flex justify-center items-center flex-col"
            style={{
              opacity: "0.8",
              width: "50vw",
              minWidth: 375,
              padding: "1vh 0",
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

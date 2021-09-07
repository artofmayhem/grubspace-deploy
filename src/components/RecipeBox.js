import React, { useState, useEffect } from "react";
import API from "../api/api";
import {RecipeBoxCards} from "./index";

export default function RecipeBox() {
  const [recipes, setRecipes] = useState([]);
  const ghost = "";
  useEffect(() => {
    API()
      .get("recipes/my-list")
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(
          "ERROR MESSAGE FROM getRecipes in RecipeBox component",
          error
        );
      });
  }, [ghost]);

  return (
    <div>
      {recipes.map((item, idx) => {
        return (
          <RecipeBoxCards
            key={idx}
            recipe_name={item.recipe_name}
            recipe_source={item.recipe_source}
            submitted_by={item.submitted_by}
            recipe_description={item.recipe_description}
            category_name={item.category_name}
            image_source={item.image_source}
            ingredients={item.ingredients}
            instructions={item.instructions}
          />
        );
      })}
    </div>
  );
}

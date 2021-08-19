import React from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";

export default function Nutrition() {


  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
    params: {
      timeFrame: 'day', // or week
      targetCalories: '2500', //input a number
      diet: 'Paleo', // Gluten Free, Ketogenic, Vegetarian, Lacto-Vegetarian, Ovo-Vegetarian, Vegan, Pescetarian, Paleo, Whole30, Omnivore
      exclude: 'chicken' // input a string with words separated by comma
    },
    headers: {
      'x-rapidapi-key': 'cc687eba84mshcc7485fcf110baap193a15jsnfb1be463a74d',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


  return (
    <React.Fragment>
       <ScrollToTop smooth />
      <div
        className={
          "nutrition-container bg-black text-center w-screen flex flex-col justify-center align-center"
        }
      >
        {" "}
        <h2
          className={"text-white mx-auto mt-32 text-5xl"}
          style={{ textShadow: "0 0 1rem Black" }}
        >
          Nutrition Corner
        </h2>
      </div>
      <div
        className={
          "bg-white h-96 w-screen flex flex-col justify-center text-center align-center"
        }
      ></div>
    </React.Fragment>
  );
}

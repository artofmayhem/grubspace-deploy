import React from "react";
import axios from "axios";
import { WineSet1Img, WineSet6Img, WineSet3Img } from "../assets/";
import ScrollToTop from "react-scroll-to-top";
import { AppPairingResults } from "../components/index";

const initialFoodSearchValue = "";
const initialPriceValue = "";

export default function Cocktail() {
  const [foodData, setFoodData] = React.useState([]);
  const [foodSearchValue, setFoodSearchValue] = React.useState(
    initialFoodSearchValue
  );
  const [priceValue, setPriceValue] = React.useState(initialPriceValue);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleFoodChange = (e) => {
    setFoodSearchValue(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing",
      params: {
        food: foodSearchValue,
        maxPrice: priceValue,
      },
      headers: {
        "x-rapidapi-key": "cc687eba84mshcc7485fcf110baap193a15jsnfb1be463a74d",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    setIsLoading(true);

    axios
      .request(options)
      .then((res) => {
        setFoodData(res.data);
        setIsLoading(false);
        setFoodSearchValue("");
        setPriceValue("");
      })
      .catch((error) => {
        console.log("This API request failed", { error });
      });
  };

  return (
    <React.Fragment>
      <ScrollToTop smooth/>
      <div
        className={
          "cocktail-container bg-black text-center w-screen flex flex-col justify-center align-center"
        }
      >
        {" "}
        <h1
          className={"text-white mt-20 mx-auto text-7xl "}
          style={{ textShadow: "1rem 1rem 2rem black" }}
        >
          Wine Source
        </h1>
      </div>
      <div
        className={
          "bg-white h-auto w-screen flex flex-col justify-center text-center align-center "
        }
      >
        <div className={"align-center bg-gray-600 bg-opacity-90"}>
          <h5 className={" text-white text-4xl w-6/12 mx-auto my-10 py-32  "}>
            Let Spoonacular help you find the right wine for your occasion
            today!
          </h5>
        </div>
        <div
          className={
            "flex flex-wrap justify-center my-20 grid-rows-2 justify-stretch mobile-hide"
          }
        >
          <label htmlFor="wine-set-1" className="w-72 text-xl mx-auto">
            <img
              name={"wine-set-1"}
              src={WineSet1Img}
              alt=""
              className={"w-96 my-4 shadow-2xl"}
            />
            Celebrating With Friends and Family
          </label>
          <label htmlFor="wine-set-1" className="w-72 text-xl mx-auto">
            <img src={WineSet6Img} alt="" className={"w-96 my-4 shadow-2xl"} />
            Looking For a Special Something
          </label>
          <label htmlFor="wine-set-1" className="w-72 text-xl mx-auto">
            <img src={WineSet3Img} alt="" className={"w-96 my-4 shadow-2xl"} />
            Find a wine that suits your taste
          </label>
        </div>
        <div
          className={
            "flex flex-row bg-gray-700 py-20 mt-10 flex-wrap justify-evenly"
          }
        >
          <div
            className={"px-10 py-20 bg-yellow-600 bg-opacity-80"}
            style={{ minWidth: 350, width: "50%" }}
          >
            <h2 className={"text-4xl text-white pt-16"}>
              Whether hosting a get together or looking for the right wine to
              pair with your day and budget, we have just the right suggestions
              for all of your needs.
            </h2>{" "}
          </div>
          <form
            className={
              "flex flex-wrap flex-col justify-center w-72 h-auto mx-10 my-10 border-2 py-10 px-2 bg-gray-200"
            }
          >
            <h3 className={"text-xl p-4"}>Get Started Today</h3>
            <input
              name={"foodSearch"}
              value={foodSearchValue}
              onChange={handleFoodChange}
              className={
                "border-b-2 border-l-2 border-fuchsia-600 m-3 p-3 h-12 w-60"
              }
              type="text"
              placeholder="Search for a specific food"
            />
            <input
              name={"price"}
              value={priceValue}
              onChange={handlePriceChange}
              className={
                "border-b-2 border-l-2 border-fuchsia-600 m-3 p-3 h-12 w-60"
              }
              type="text"
              placeholder="Price"
            />
            <button
              className={
                "border-b-2 bg-gray-400 text-white px-10 py-3 m-1.5 w-60"
              }
              onClick={handleSubmit}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <AppPairingResults data={foodData} isLoading={isLoading} />
      </div>
    </React.Fragment>
  );
}

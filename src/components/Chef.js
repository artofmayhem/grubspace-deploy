import React, { useState } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { CookingShow1Img, SurLaTableImg } from "../assets";
import YouTube from "react-youtube";

const initialState =
  "Cherries, apricots, plums, pears, apples, quinces, peaches, strawberries, and blackberries are all part of the rose family. These types of fruits typically have flowers with five equal petals arranged around a central core. Unlike many other fruits, once picked, unripe raspberries do not ripen.";

export default function Chef() {
  const [trivia, setTrivia] = useState(initialState);

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random",
    headers: {
      "x-rapidapi-key": "cc687eba84mshcc7485fcf110baap193a15jsnfb1be463a74d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const youtubeOptions = {
    height: 375,
    minWidth: 375,
    maxWidth: 640,
    playerVars: {
      rel: 0,
      showinfo: 0,
      controls: 1,
      autoplay: 0,
      loop: 1,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then(function (res) {
        setTrivia(res.data.text);
        console.log(res.data.text);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <ScrollToTop smooth />
      <div
        className={
          "chef-container bg-black  w-screen flex flex-col justify-center align-center"
        }
      >
        <h2 className={"text-white mx-auto -mt-10 text-5xl"}>The Chef Spot</h2>
      </div>
      <div
        className={
          "bg-white h-auto w-screen flex flex-col text-center justify-center align-center"
        }
      >
        <div className="h-auto flex flex-row flex-wrap justify-evenly pt-16 bg-white">
          <div
            className="flex flex-row flex-wrap justify-center my-24 "
            style={{ width: "50%" }}
          >
            <img
              src={CookingShow1Img}
              alt="Staff One"
              className="w-auto h-auto border-2"
              style={{ minWidth: 375, boxShadow: "1rem 1rem 2.55rem black" }}
            />
          </div>
          <div className="flex flex-col flex-wrap flex-center mt-24 text-center">
            <h5 className={"text-xl mt-20 mb-4"} style={{ width: 350 }}>
              You've reached the <strong>Chef Spot</strong>! It is this place
              that you will find videos to be inspired by or learn how to make
              something. This is where you can choose from a curated collection
              of videos that features the likes of Babish, Kent Rollins, or
              Kenji Lopez Alt.
            </h5>
            <h5 className={"text-xl"} style={{ width: 350 }}>
              Whether you are diving into a tasty treat with your little ones or
              experimenting with a new dish, a friend, and a bottle or wine,
              this is your one stop shop to find your new favorite dish.
            </h5>
          </div>
        </div>
        <div className="h-auto flex flex-row flex-wrap justify-evenly py-24 text-white bg-gray-600">
          <div
            className="flex flex-row flex-wrap justify-evenly bg-gray-800 border-4 text-center"
            style={{ width: 375 }}
          >
            <h2 className={"mx-auto my-auto text-5xl"}>Food Fun Facts!</h2>
            <button
              className={
                "px-20 py-6 bg-gray-400 h-20 text-white text-2xl mx-auto"
              }
              onClick={handleSubmit}
            >
              Get a Fun Fact!
            </button>
            <h4 className={"text-lg p-4"}>
              Randomly generated fun facts at the touch of a button
            </h4>
          </div>
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            <p
              className={"my-auto py-20 px-8 bg-yellow-600 text-xl"}
              style={{
                boxShadow: "0 1rem 2rem black",
                minWidth: 375,
                width: 640,
              }}
            >
              {trivia}
            </p>
          </div>
        </div>
        <div className="h-auto flex flex-row flex-wrap justify-evenly pt-16 bg-white">
          <div
            className="flex flex-row flex-wrap justify-center my-24 "
            style={{ width: "50%" }}
          >
            <a
              href={"https://www.surlatable.com/"}
              className="flex flex-col flex-wrap justify-center text-center"
            >
              <img
                src={SurLaTableImg}
                alt="Staff One"
                className="w-auto h-auto border-2 mb-6"
                style={{ minWidth: 375, boxShadow: "1rem 1rem 2.55rem black" }}
              />
            </a>
          </div>
          <a
            href={"https://www.surlatable.com/"}
            className="flex flex-col flex-wrap justify-center text-center"
          >
            <div className="flex flex-col flex-wrap justify-center text-center">
              <h5 className={"text-4xl"} style={{ width: 350 }}>
                Looking for the best way to make your life easier?
              </h5>
              <h5 className={"text-2xl my-6"} style={{ width: 350 }}>
                Visit <strong>Sur La Table</strong> to find all of the tools and
                gadgets you need today!
              </h5>
            </div>
          </a>
        </div>
        <div className="h-auto flex flex-col flex-wrap justify-center pt-16 bg-gray-600">
          <div className={"flex justify-center text-5xl mt-10  text-white"}>
            <h3>Latest Videos</h3>
          </div>
          <hr
            className="my-16 self-center"
            style={{ minWidth: 300, width: "60vw" }}
          />
          <div
            className={"h-auto flex flex-row flex-wrap justify-evenly pt-16"}
          >
            <div
              className="flex flex-col flex-wrap flex-center my-auto py-10 px-4 text-white bg-yellow-600 text-center"
              style={{ width: 350 }}
            >
              <h3 className={"text-3xl my-2"}><strong>Basics with Babish</strong></h3>
              <h3 className={"text-xl my-2"}><strong>Babish Culinary University</strong></h3>
              <h3 className={"text-xl my-2"}>Episode: Chopped Cheese</h3>
              <h3 className={"text-xl my-4"}>
                Join Babish as he throws down on a delicious New York City
                landmark, the ubiquitous chopped cheese.
              </h3>
              <a
                href={"https://basicswithbabish.co/basicsepisodes/date-night"}
                className={
                  "text-xl my-2 text-gray-800 border-2 py-2 bg-gray-400"
                }
              >
                Get the Recipe
              </a>
            </div>
            <div className="flex justify-center my-6 " style={{ width: "50%" }}>
              <YouTube opts={youtubeOptions} videoId="E1z55dYHv8c" />
            </div>
          </div>
          <div className={"h-auto flex flex-row flex-wrap justify-evenly"}>
            <div
              className="flex flex-col flex-wrap flex-center my-auto py-10 px-4 text-white bg-yellow-600 text-center"
              style={{ width: 350 }}
            >
              <h3 className={"text-3xl my-2"}><strong>Kenji Lopez-Alt</strong></h3>
              <h3 className={"text-xl my-2"}><strong>Kenji's Cooking Show</strong></h3>
              <h3 className={"text-xl my-2"}>Episode: Black Bean Burgers</h3>
              <h3 className={"text-xl my-4"}>
                Get your plant on with Kenji as he shares his sure fire,
                showstopping black bean burger recipe.
              </h3>
              <a
                href={
                  "https://www.seriouseats.com/the-best-black-bean-burger-recipe"
                }
                className={
                  "text-xl my-2 text-gray-800 border-2 py-2 bg-gray-400"
                }
              >
                Get the Recipe
              </a>
            </div>
            <div
              className="flex justify-center my-24 "
              style={{ width: "50%" }}
            >
              <YouTube opts={youtubeOptions} videoId="BMgLRD2v5w0" />
            </div>
          </div>
          <div className={"h-auto flex flex-row flex-wrap justify-evenly"}>
            <div
              className="flex flex-col flex-wrap flex-center my-auto py-10 px-4 text-white bg-yellow-600 text-center"
              style={{ width: 350 }}
            >
              <h3 className={"text-3xl my-2"}><strong>Marcus Meacham</strong></h3>
              <h3 className={"text-xl my-2"}><strong>Tastemade</strong></h3>
              <h3 className={"text-xl my-2"}>
                Episode: Ramen Fried Chicken Sandwich
              </h3>
              <h3 className={"text-xl my-4"}>
                Marcus makes his version of southern fried chicken sandwiches
                and adds an epic twist: he batters the chicken thighs in crushed
                Ramen.
              </h3>
              <a
                href={
                  "https://www.youtube.com/playlist?list=PLX98sAmndWt0QIK3nBvV4QWS5g8zlbhT_"
                }
                className={
                  "text-xl my-2 text-gray-800 border-2 py-2 bg-gray-400"
                }
              >
                Get More Recipes
              </a>
            </div>
            <div
              className="flex justify-center my-24 "
              style={{ width: "50%" }}
            >
              <YouTube opts={youtubeOptions} videoId="mCJUcJJUmvg" />
            </div>
          </div>
          <div className={"h-auto flex flex-row flex-wrap justify-evenly"}>
            <div
              className="flex flex-col flex-wrap flex-center my-auto py-10 px-4 text-white bg-yellow-600 text-center"
              style={{ width: 350 }}
            >
              <h3 className={"text-3xl my-2"}><strong>Niki Shariley</strong></h3>
              <h3 className={"text-xl my-2"}><strong>UrbanBushBabes</strong></h3>
              <h3 className={"text-xl my-2"}>Episode: Rice and Peas</h3>
              <h3 className={"text-xl my-4"}>
                Step into the fire with Niki as she breaks down the secrets to her amped up take on a Caribbean classic, Coconut Rice and Beans.
              </h3>
              <a
                href={
                  "https://www.pinterest.com/pin/108227197274383070/"
                }
                className={
                  "text-xl my-2 text-gray-800 border-2 py-2 bg-gray-400"
                }
              >
                Get the Recipe
              </a>
            </div>
            <div
              className="flex justify-center my-24 "
              style={{ width: "50%" }}
            >
              <YouTube opts={youtubeOptions} videoId="-65DoHCZGdQ" />
            </div>
          </div>
          <div className={"h-auto flex flex-row flex-wrap justify-evenly mb-20"}>
            <div
              className="flex flex-col flex-wrap flex-center my-auto py-10 px-4 text-white bg-yellow-600 text-center"
              style={{ width: 350 }}
            >
              <h3 className={"text-3xl my-2"}><strong>Joshua Weissman</strong></h3>
              <h3 className={"text-xl my-2"}><strong>Youtuber</strong></h3>
              <h3 className={"text-xl my-2"}>Episode: The $2 Sandwich</h3>
              <h3 className={"text-xl my-4"}>
              A great sandwich is usually overpriced. But you can make this homemade sandwich for a total of 2 dollars PER SERVING. That means your 12 dollar sandwich is going right out the window. 
              </h3>
              <a
                href={
                  "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                }
                className={
                  "text-xl my-2 text-gray-800 border-2 py-2 bg-gray-400"
                }
              >
                Get the Recipe
              </a>
            </div>
            <div
              className="flex justify-center my-24 "
              style={{ width: "50%" }}
            >
              <YouTube opts={youtubeOptions} videoId="gjhOPHoRJBs" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

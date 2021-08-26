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
    width: 375,
    height: 360,
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
        <h2
          className={"animate-fade-in-down text-white mx-auto -mt-10 text-5xl"}
        >
          The Chef Spot
        </h2>
      </div>
      <div
        className={
          "bg-white h-auto w-screen flex flex-col text-center justify-center align-center"
        }
      >
        <div className="h-auto flex flex-row flex-wrap justify-evenly py-20 bg-white">
          <div
            className="flex flex-row flex-wrap justify-center  "
            style={{ width: "50%" }}
          >
            <img
              src={CookingShow1Img}
              alt="Staff One"
              className="animate-fade-in-up w-auto h-auto border-2"
              style={{ minWidth: 375, boxShadow: "1rem 1rem 2.55rem black" }}
            />
          </div>
          <div className="animate-fade-in-right flex flex-col flex-wrap flex-center my-24 text-center">
            <h5 className={"text-xl mb-4"} style={{ width: 350 }}>
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
            <h2 className={"mx-auto my-auto py-10 text-yellow-600 text-5xl"}>
              Food Fun Facts!
            </h2>
            <button
              className={
                "animate-bounce px-20 py-6 bg-gray-400 h-20 text-white text-2xl mx-auto"
              }
              onClick={handleSubmit}
            >
              Get a Fun Fact!
            </button>
            <h4 className={"text-lg p-8"}>
              Randomly generated fun facts at the touch of a button
            </h4>
          </div>
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            <p
              className={
                "my-auto py-20 px-8 bg-yellow-600 border-4 border-white text-xl"
              }
              style={{
                boxShadow: "0 1rem 2rem black",
                minWidth: 350,
                height: 450,
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
            target="_blank"
            rel={"noreferrer"}
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
        <div className="h-auto w-screen flex flex-col flex-wrap justify-center pt-16 pb-48 bg-gray-600">
          <div
            className={
              "flex flex-col justify-center text-5xl mt-10  text-white"
            }
          >
            <h3 className={"text-yellow-600 text-7xl"}>Video Gallery</h3>
            <h5 className={"text-2xl pt-6"}>
              Find some inspiration for your next meal with some of the best in
              the game
            </h5>
          </div>
          <hr
            className="my-16 self-center"
            style={{ minWidth: 300, width: "60vw" }}
          />
          <div
            className={
              "flex flex-row flex-wrap justify-center text-white mx-auto"
            }
            style={{ width: 375 }}
          >
            <ul className="slides">
              <input type="radio" name="radio-btn" id="img-1" defaultChecked />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="E1z55dYHv8c" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://basicswithbabish.co/basicsepisodes/date-night"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-10" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-2" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-2" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube
                      name={"weissman"}
                      opts={youtubeOptions}
                      videoId="gjhOPHoRJBs"
                    />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-1" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-3" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-3" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="-65DoHCZGdQ" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.youtube.com/channel/UCUqHjTLwXaCjYIxK7XaD16A"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-2" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-4" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-4" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="mCJUcJJUmvg" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-3" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-5" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-5" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="BMgLRD2v5w0" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-4" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-6" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-6" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="UbNiP8ilvCc" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.youtube.com/channel/UCSX8k4RapYLGEO5G_y_M37Q"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-5" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-7" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-7" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="E8b7PwchlIg" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://kentrollins.com/homemade-candied-jalapeno-bacon/"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-6" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-8" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-btn" id="img-8" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="nW_Tpken5cg" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.youtube.com/channel/UCSX8k4RapYLGEO5G_y_M37Q"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-7" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-9" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-btn" id="img-9" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="bF9zOykErJ4" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={"https://www.youtube.com/watch?v=bF9zOykErJ4"}
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-8" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-10" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-btn" id="img-10" />
              <li className="slide-container">
                <div className="slide">
                  <p className={"text-2xl"}>
                    <YouTube opts={youtubeOptions} videoId="7IZeh7w5ekY" />{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.almazankitchen.com/bacon-eggs-pan-pie/"
                      }
                    >
                      Recipe
                    </a>
                  </p>
                </div>
                <div className="nav">
                  <label htmlFor="img-9" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-1" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <li className="nav-dots">
                <label
                  htmlFor="img-1"
                  className="nav-dot"
                  id="img-dot-1"
                ></label>
                <label
                  htmlFor="img-2"
                  className="nav-dot"
                  id="img-dot-2"
                ></label>
                <label
                  htmlFor="img-3"
                  className="nav-dot"
                  id="img-dot-3"
                ></label>
                <label
                  htmlFor="img-4"
                  className="nav-dot"
                  id="img-dot-4"
                ></label>
                <label
                  htmlFor="img-5"
                  className="nav-dot"
                  id="img-dot-5"
                ></label>
                <label
                  htmlFor="img-6"
                  className="nav-dot"
                  id="img-dot-6"
                ></label>
                <label
                  htmlFor="img-7"
                  className="nav-dot"
                  id="img-dot-7"
                ></label>
                <label
                  htmlFor="img-8"
                  className="nav-dot"
                  id="img-dot-8"
                ></label>
                <label
                  htmlFor="img-9"
                  className="nav-dot"
                  id="img-dot-9"
                ></label>
                <label
                  htmlFor="img-10"
                  className="nav-dot"
                  id="img-dot-10"
                ></label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

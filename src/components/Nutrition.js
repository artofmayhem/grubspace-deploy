import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

//animation imports
import { TimelineLite } from "gsap/gsap-core";

//import assets
import { Nutrition3Img, Nutrition2Img, Nutrition4Img } from "../assets/index";

//import components
import { AppMealPlanning } from "../components/index";

// // Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

// // install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const youtubeOptions = {
  width: 375,
  playerVars: {
    rel: 0,
    showinfo: 0,
    controls: 1,
    autoplay: 0,
    loop: 1,
  },
};

const initialFormValues = {
  timeFrame: "day",
  targetCalories: "2000",
  diet: "Omnivore",
  exclude: "",
};

export default function Nutrition() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [mealData, setMealData] = useState([]);
  let splash = useRef(null);
  //instantiate timeline
  const timeline = new TimelineLite();

  // useEffect is a React Hook that runs animations when the component mounts
  useEffect(() => {
    // getting all elements in splash for animation
    const firstImage = splash.firstElementChild;
    const secondImage = splash.firstElementChild.nextElementSibling;
    const lastImage = splash.lastElementChild;

    //console logs to ensure all elements needed are present
    // console.log(
    //   "1. splash",
    //   splash,
    //   "2. firstImage",
    //   firstImage,
    //   "3. secondImage",
    //   secondImage,
    //   "4. lastImage",
    //   lastImage
    // );

    timeline.from(firstImage, 1, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(firstImage, 1, {
          opacity: 1,
          y: 0,
        });
      },
    });
    timeline.from(secondImage, 0.75, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(secondImage, 0.75, {
          opacity: 1,
          y: 0,
        });
      },
    });
    timeline.from(lastImage, 0.75, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(lastImage, 0.75, {
          opacity: 1,
          y: 0,
        });
      },
    });
  }, []); // eslint-disable-line

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
    params: {
      timeFrame: formValues.timeFrame, // or week
      targetCalories: formValues.targetCalories, //input a number
      diet: formValues.diet, // Gluten Free, Ketogenic, Vegetarian, Lacto-Vegetarian, Ovo-Vegetarian, Vegan, Pescetarian, Paleo, Whole30, Omnivore
      exclude: formValues.exclude, // input a string with words separated by comma
    },
    headers: {
      "x-rapidapi-key": "cc687eba84mshcc7485fcf110baap193a15jsnfb1be463a74d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  // this function handles changes for all incoming form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log();
    e.preventDefault();
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMealData(response.data);
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
          "nutrition-container bg-black text-center w-screen flex flex-col justify-center align-center"
        }
      >
        {" "}
        <h2
          className={"animate-fade-in-down text-white mx-auto mt-32 text-5xl"}
          style={{ textShadow: "0 0 1rem Black" }}
        >
          Nutrition Corner
        </h2>
      </div>
      <div
        className={
          "bg-yellow-500 pb-48 w-screen my-auto mx-auto flex flex-col justify-center text-center align-center"
        }
        style={{ height: "100%", maxWidth: "100vw" }}
      >
        <p className={"animate-fade-in-right text-4xl text-white mt-32 mb-10"}>
          Healthy Living, Healthy Choices
        </p>
        <p
          className={
            "animate-fade-in-right text-2xl bg-gray-500 text-white m-auto py-10 px-6 mt-6 mb-10"
          }
          style={{ width: "100vw" }}
        >
          Check out our selection of curated recipes to help you stay healthy
          and healthy.
        </p>

        <div
          className={"flex flex-row flex-wrap justify-center mx-auto"}
          style={{ width: 375 }}
        >
          <ul className="slides">
            <input type="radio" name="radio-btn" id="img-1" defaultChecked />
            <li className="slide-container">
              <div className="slide">
                <YouTube opts={youtubeOptions} videoId="vmdITEguAnE" />{" "}
                <a href={"https://mailchi.mp/downshiftology/meal-prep/"}>
                  Meal prep guide here
                </a>
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
                <YouTube
                  name={"weissman"}
                  opts={youtubeOptions}
                  videoId="Acs7ZnIdo4o"
                />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://www.youtube.com/watch?v=Acs7ZnIdo4o"}>
                    Click here for the recipe
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
                <YouTube opts={youtubeOptions} videoId="bC0JJlBQK6M" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://www.ruled.me/"}>
                    Elevate your keto game here
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
                <YouTube opts={youtubeOptions} videoId="41Wu4pBtSvA" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://youtu.be/teOmeFZZJ5U"}>Meal prep hacks</a>
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
                <YouTube opts={youtubeOptions} videoId="0L6YCy_kDiM" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://www.youtube.com/watch?v=0L6YCy_kDiM"}>
                    Get the most from your veggies
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
                <YouTube opts={youtubeOptions} videoId="9QJC2e2Vnvk" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://youtu.be/9QJC2e2Vnvk"}>
                    Start your health journey here!
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
            {/* make three more slides */}
            <input type="radio" name="radio-btn" id="img-7" />
            <li className="slide-container">
              <div className="slide">
                <YouTube opts={youtubeOptions} videoId="MIF4Imp92OM" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://youtu.be/MIF4Imp92OM"}>
                    Sharpen your sushi game
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
                <YouTube opts={youtubeOptions} videoId="4kLpo6TjTPU" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://www.youtube.com/watch?v=4kLpo6TjTPU"}>
                    Healthy, easy, and delicious
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
                <YouTube opts={youtubeOptions} videoId="Lkl9_3-jX6c" />{" "}
                <p className={"text-2xl"}>
                  <a
                    href={"https://downshiftology.com/recipes/overnight-oats/"}
                  >
                    Need a simple way to start your day?
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
                <YouTube opts={youtubeOptions} videoId="xJrmUR7zvxo" />{" "}
                <p className={"text-2xl"}>
                  <a href={"https://youtu.be/xJrmUR7zvxo"}>
                    The art of loving food
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
              <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
              <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
              <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
              <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
              <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
              <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>
              <label htmlFor="img-7" className="nav-dot" id="img-dot-7"></label>
              <label htmlFor="img-8" className="nav-dot" id="img-dot-8"></label>
              <label htmlFor="img-9" className="nav-dot" id="img-dot-9"></label>
              <label
                htmlFor="img-10"
                className="nav-dot"
                id="img-dot-10"
              ></label>
            </li>
          </ul>
        </div>
        <div
          className=" hover02 column flex flex-row flex-wrap justify-evenly py-8 mt-32 text-white bg-white"
          ref={(el) => (splash = el)}
        >
          <div
            className="flex flex-row flex-wrap justify-center my-20 text-center"
            style={{ width: 350 }}
          >
            <figure>
              <img
                src={Nutrition4Img}
                style={{ boxShadow: "0 1rem 2rem black" }}
                alt="Staff four"
                className="h-96"
              />
            </figure>
            {/* <span>Live</span> */}
          </div>
          <div
            className="flex flex-row flex-wrap justify-center my-20 text-center"
            style={{ width: 350 }}
          >
            <figure>
              <img
                src={Nutrition3Img}
                style={{ boxShadow: "0 1rem 2rem black", height: '28.1rem' }}
                alt="Staff three"
                className="h-96"
              />
            </figure>
            {/* <span>Life</span> */}
          </div>
          <div
            className="flex flex-row flex-wrap justify-center my-20 text-center"
            style={{ width: 350 }}
          >
            <figure>
              <img
                src={Nutrition2Img}
                alt="Staff twp"
                style={{ boxShadow: "0 1rem 2rem black" }}
                className="h-96"
              />
            </figure>
            {/* <span>Love</span> */}
          </div>
        </div>
        <div className={"flex flex-col justify-center bg-gray-600 "}>
          <h2 className={"text-4xl text-white my-20"}>
            Get the most from your meals with our meal plan generator
          </h2>
          <form
            className={
              "flex flex-col bg-yellow-600 border-2 justify-center my-10 m-auto  py-20"
            }
            style={{ maxWidth: "50vw", minWidth: "375px" }}
          >
            <h3 className={"text-3xl text-white mb-8"}>
              Input your specifications and let us do the rest
            </h3>
            <p className={"text-xl mb-4 text-white mx-6"}> Timeframe </p>
            <input
              name={"timeFrame"}
              className={
                "animate-fade-in-1 border-solid border-2 border-white p-4 w-60 mx-auto text-center"
              }
              type="text"
              value={formValues.timeFrame}
              style={{ boxShadow: "0 0 1.5rem #444" }}
              onChange={handleChange}
              placeholder="Day or Week"
            />{" "}
            <p className={"text-xl mt-6 text-white mb-4"}>Target Calories </p>
            <input
              name={"targetCalories"}
              className={
                "animate-fade-in-1 border-solid border-2 border-white p-4 w-60 mx-auto text-center"
              }
              type="text"
              value={formValues.targetCalories}
              style={{ boxShadow: "0 0 1.5rem #444" }}
              onChange={handleChange}
              placeholder="2000 a day recommended"
            />{" "}
            <p className={"text-xl mt-6 text-white mb-4"}>Diet</p>
            <select
              name={"diet"}
              className={
                "animate-fade-in-1 border-solid border-2 border-white p-4 w-60 text-gray-400 text-center mx-auto"
              }
              style={{ boxShadow: "0 0 1.5rem #444" }}
              value={formValues.diet}
              onChange={handleChange}
            >
              <option value="Gluten Free">Gluten Free</option>
              <option value="Ketogenic">Ketogenic</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="Paleo">Paleo</option>
              <option value="Whole30">Whole30</option>
              <option value="Omnivore">Omnivore</option>
            </select>
            <p className={"text-xl mt-6 text-white mb-4"}>Exclude </p>
            <input
              name={"exclude"}
              className={
                "animate-fade-in-1 border-solid border-2 border-white p-4 w-60 text-center m-2  mx-auto"
              }
              type="text"
              value={formValues.exclude}
              style={{ boxShadow: "0 0 1.5rem #444" }}
              onChange={handleChange}
              placeholder="exclude separated by comma"
            />{" "}
            <br />
            <br />
            <button
              type="submit"
              className={
                "animate-fade-in-2 border-2 bg-gray-400 text-white px-10 py-4 m-auto w-60"
              }
              onClick={handleSubmit}
            >
              Enter
            </button>{" "}
          </form>
        </div>

        <AppMealPlanning data={mealData} />
      </div>
    </React.Fragment>
  );
}

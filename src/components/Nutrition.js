import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

//animation imports
import { TimelineLite } from "gsap/gsap-core";

//import assets
import { Nutrition3Img, Nutrition2Img, Nutrition4Img } from "../assets/index";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const youtubeOptions = {
  width: 640,
  height: 360,
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
    console.log(
      "1. splash",
      splash,
      "2. firstImage",
      firstImage,
      "3. secondImage",
      secondImage,
      "4. lastImage",
      lastImage
    );

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
        <p className={"animate-fade-in-right text-2xl bg-gray-500 text-white m-auto py-10 px-6 mt-6 mb-10"} style={{width: '100vw'}}>
          Check out our selection of curated recipes to help you stay healthy
          and healthy.
        </p>
        <Swiper
          spaceBetween={300}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={"animate-fade-in-left py-10 bg-white text-white"}
          style={{ maxWidth: "100vw", height: "auto", minWidth: "350px" }}
        >
          <SwiperSlide className={""}>
            <YouTube opts={youtubeOptions} videoId="vmdITEguAnE" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://mailchi.mp/downshiftology/meal-prep/"}>
                Meal prep guide here
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="bC0JJlBQK6M" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://www.ruled.me/"}>Elevate your keto game here</a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="0L6YCy_kDiM" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://www.youtube.com/watch?v=0L6YCy_kDiM"}>
                Get the most from your veggies
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="9QJC2e2Vnvk" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://youtu.be/9QJC2e2Vnvk"}>
                Start your health journey here!
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="MIF4Imp92OM" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://youtu.be/MIF4Imp92OM"}>
                Sharpen your sushi game
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="4kLpo6TjTPU" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://www.youtube.com/watch?v=4kLpo6TjTPU"}>
                Healthy, easy, and delicious
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="Lkl9_3-jX6c" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://downshiftology.com/recipes/overnight-oats/"}>
                Need a simple way to start your day?
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <YouTube opts={youtubeOptions} videoId="xJrmUR7zvxo" />{" "}
            <p className={"text-2xl"}>
              <a href={"https://youtu.be/xJrmUR7zvxo"}>
                The art of loving food
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide />
          ...
        </Swiper>
        <div
          className="h-auto flex flex-row flex-wrap justify-evenly py-8 mt-32 text-white bg-white"
          ref={(el) => (splash = el)}
        >
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            <img
              src={Nutrition4Img}
              style={{ boxShadow: "0 1rem 2rem black" }}
              alt="Staff One"
              className="w-auto h-auto"
            />
          </div>
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-justify"
            style={{ width: 350 }}
          >
            <img
              src={Nutrition3Img}
              style={{ boxShadow: "0 1rem 2rem black" }}
              alt="Staff One"
              className="w-auto h-auto"
            />
          </div>
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            <img
              src={Nutrition2Img}
              alt="Staff One"
              style={{ boxShadow: "0 1rem 2rem black" }}
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div
          className={
            "flex flex-col justify-center bg-gray-600 text-white -mb-48"
          }
        >
          <h2 className={"text-4xl my-20"}>
            Get the most from your meals with our meal plan generator
          </h2>
          <form className={"flex flex-col bg-yellow-600 border-2 justify-center my-10 m-auto px-48 py-20"} style={{maxWidth: '50vw', minWidth: '375px'}}>
            <h3 className={'text-3xl mb-8'}>Input your specifications and let us do the rest</h3>
            <p className={"text-xl mb-4 mx-6"}> Timeframe </p>
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
            <p className={"text-xl mt-6 mb-4"}>Target Calories </p>
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
            <p className={"text-xl mt-6 mb-4"}>Diet</p>
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
            <p className={"text-xl mt-6 mb-4"}>Exclude </p>
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
      </div>
    </React.Fragment>
  );
}

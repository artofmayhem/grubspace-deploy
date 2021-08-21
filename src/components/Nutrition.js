import React from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

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

export default function Nutrition() {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
    params: {
      timeFrame: "day", // or week
      targetCalories: "2500", //input a number
      diet: "Paleo", // Gluten Free, Ketogenic, Vegetarian, Lacto-Vegetarian, Ovo-Vegetarian, Vegan, Pescetarian, Paleo, Whole30, Omnivore
      exclude: "chicken", // input a string with words separated by comma
    },
    headers: {
      "x-rapidapi-key": "cc687eba84mshcc7485fcf110baap193a15jsnfb1be463a74d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
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
          className={"animate-fade-in-down text-white mx-auto mt-32 text-5xl"}
          style={{ textShadow: "0 0 1rem Black" }}
        >
          Nutrition Corner
        </h2>
      </div>
      <div
        className={
          "bg-white pb-48 w-screen my-auto mx-auto flex flex-col justify-center text-center align-center"
        }
        style={{ height: "100%", maxWidth: "100vw" }}
      >
        <p className={"animate-fade-in-right text-4xl text-gray-600 my-10"}>
          Healthy Living, Healthy Choices
        </p>
        <Swiper
          spaceBetween={300}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={"animate-fade-in-left py-10 white text-gray-800"}
          style={{ maxWidth: "98vw", minWidth: "350px" }}
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
          <SwiperSlide/>
          ...
        </Swiper>
      </div>
    </React.Fragment>
  );
}

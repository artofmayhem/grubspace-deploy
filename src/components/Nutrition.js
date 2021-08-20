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

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

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
          "bg-gray-600 py-48 w-screen my-auto mx-auto flex flex-col justify-center text-center align-center"
        }
        style={{ height: "100%", maxWidth: "100vw" }}
      >
        <Swiper
          spaceBetween={300}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={"py-10 bg-yellow-600 border-2 text-white"}
          style={{ maxWidth: "90vw", minWidth: "350px" }}
        >
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="E1z55dYHv8c" />{" "}
              <a href={"https://basicswithbabish.co/basicsepisodes/date-night"}>
                Click here for the best of Basics With Babish
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube
                name={"weissman"}
                opts={youtubeOptions}
                videoId="gjhOPHoRJBs"
              />{" "}
              <a
                href={
                  "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                }
              >
                Click here for Joshua Weissman's recipe
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="-65DoHCZGdQ" />{" "}
              <a
                href={
                  "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                }
              >
                Explore the tantalizing flavors of Nikisha Riley
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="mCJUcJJUmvg" />{" "}
              <a
                href={
                  "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                }
              >
                Get Creative with Chef Meach of Tastemade
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="BMgLRD2v5w0" />{" "}
              <a
                href={
                  "https://www.joshuaweissman.com/post/2-dollar-sandwich-but-cheaper"
                }
              >
                Experience the flavors and charm of Kenji Lopez-Alt
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="UbNiP8ilvCc" />{" "}
              <a
                href={
                  "https://www.youtube.com/channel/UCSX8k4RapYLGEO5G_y_M37Q"
                }
              >
                Try something new with the ladies of Natural Life TV Cooking
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="E8b7PwchlIg" />{" "}
              <a
                href={
                  "https://kentrollins.com/homemade-candied-jalapeno-bacon/"
                }
              >
                Experience the open trails with Cowboy Kent Rollins
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="nW_Tpken5cg" />{" "}
              <a
                href={
                  "https://www.youtube.com/channel/UCSX8k4RapYLGEO5G_y_M37Q"
                }
              >
               Re-live the classics with Julia Child
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={"text-2xl"}>
              <YouTube opts={youtubeOptions} videoId="7IZeh7w5ekY" />{" "}
              <a
                href={
                  "https://www.almazankitchen.com/bacon-eggs-pan-pie/"
                }
              >
                Feeling adventurous? Go bushcrafting with Almazan Kitchen
              </a>
            </p>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { CookingShow1Img, SurLaTableImg } from "../assets";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const initialState =
  "Cherries, apricots, plums, pears, apples, quinces, peaches, strawberries, and blackberries are all part of the rose family. These types of fruits typically have flowers with five equal petals arranged around a central core. Unlike many other fruits, once picked, unripe raspberries do not ripen.";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
            <h2 className={"mx-auto my-auto py-10 text-5xl"}>
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
                minWidth: 350,
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
        <div className="h-auto w-screen flex flex-col flex-wrap justify-center pt-16 pb-48 bg-gray-600">
          <div className={"flex justify-center text-5xl mt-10  text-white"}>
            <h3>Video Gallery</h3>
          </div>
          <hr
            className="my-16 self-center"
            style={{ minWidth: 300, width: "60vw" }}
          />
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
                <a
                  href={"https://basicswithbabish.co/basicsepisodes/date-night"}
                >
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
                <a href={"https://www.almazankitchen.com/bacon-eggs-pan-pie/"}>
                  Feeling adventurous? Go bushcrafting with Almazan Kitchen
                </a>
              </p>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}

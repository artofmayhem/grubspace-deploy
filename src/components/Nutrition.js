import React from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import YouTube from "react-youtube";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const youtubeOptions = {
  width: 350,
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
          className={"animate-fade-in-down text-white mx-auto mt-32 text-5xl"}
          style={{ textShadow: "0 0 1rem Black" }}
        >
          Nutrition Corner
        </h2>
      </div>
      <div
        className={
          "bg-white h-96 w-screen flex flex-col justify-center text-center align-center"
        }
      >
        <Swiper
      spaceBetween={300}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide >
      <YouTube opts={youtubeOptions} videoId="E1z55dYHv8c" />
      </SwiperSlide>
      <SwiperSlide> <YouTube opts={youtubeOptions} videoId="gjhOPHoRJBs" /></SwiperSlide>
      <SwiperSlide> <YouTube opts={youtubeOptions} videoId="-65DoHCZGdQ" /></SwiperSlide>
      <SwiperSlide>  <YouTube opts={youtubeOptions} videoId="mCJUcJJUmvg" /></SwiperSlide>
      <SwiperSlide>  <YouTube opts={youtubeOptions} videoId="BMgLRD2v5w0" /></SwiperSlide>
      ...
    </Swiper>
      </div>
    </React.Fragment>
  );
}

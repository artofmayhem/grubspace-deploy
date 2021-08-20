import React, { useEffect, useRef } from "react";
import { TimelineLite, Power3 } from "gsap/gsap-core";
import {
  StaffOneImg,
  StaffTwoImg,
  StaffThreeImg,
  StaffFourImg,
  StaffSixImg,
  StaffSevenImg,
  TeamOneImg,
  TeamTwoImg,
  TeamThreeImg,
} from "../assets/index";
import ScrollToTop from "react-scroll-to-top";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function About() {
  //instantiate variables for intro and splash
  let intro = useRef(null);
  let splash = useRef(null);
  //instantiate timeline
  const timeline = new TimelineLite();
  AOS.init()


  //animation options
  const animationOptions = {
    pinkImage: {
    duration: 3,
    opacity: 0,
    },
    intro: {
      scale: 0,
      opacity: 0,
      ease: Power3.easeOut,
    },
  }

 
  
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
      lastImage,
    );
  // getPinkImage.addEventListener("wheel", () => {
  //     timeline.to(getPinkImage, 2, animationOptions.pinkImage);
  //   });
    // adds animations to the timeline
    timeline.from(intro, 1.5, animationOptions.intro);

    // timeline.to('.pink-image', 1, animationOptions.pinkImage);

    timeline.from(firstImage, 1, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(firstImage, 1, {
          opacity: 1,
          y: 0,
        });
      }
    });
    timeline.from(secondImage, .75, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(secondImage, .75, {
          opacity: 1,
          y: 0,
        });
      }
    });
    timeline.from(lastImage, .75, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(lastImage, .75, {
          opacity: 1,
          y: 0,
        });
      }
    });

  }, []); // eslint-disable-line

  return (
    <React.Fragment>
      <ScrollToTop smooth />
      <div
        className={
          "about-container bg-black w-screen text-center flex flex-col justify-center align-center"
        }
      >
        {" "}
        <h1
          className={"text-white mt-20 mx-auto text-5xl"}
          style={{ textShadow: "0 0 1rem black" }}
          ref={(el) => {
            intro = el;
          }}
        >
          Meet the Grubspace team
        </h1>
      </div>
      <div
        className={
          "bg-white h-auto w-screen flex flex-col justify-center text-center align-center"
        }
      >
        <div
          className="h-auto flex flex-row flex-wrap justify-evenly py-8 text-white bg-gray-600"
          ref={(el) => (splash = el)}
        >
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            <img
              src={StaffOneImg}
              style={{ boxShadow: "0 1rem 2rem black" }}
              alt="Staff One"
              className="w-auto h-auto"
            />
          </div>
          <div
            className="flex flex-row flex-wrap flex-center text-justify"
            style={{ width: 350 }}
          >
            <p
              className={"my-auto py-20 px-8 bg-yellow-600 text-xl"}
              style={{ boxShadow: "0 1rem 2rem black" }}
            >
              First, We'd like to say welcome to our behind the scenes look at
              the creators and contributors who work hard every day to bring you
              and the people that you care about to the best Grubspace
              experience. We aren't all a bunch of chefs here. Some of us are
              just developers, others are just designers, and some of us are
              just people who love to make things (including things that taste
              great too!).
            </p>
          </div>
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            <img
              src={StaffSixImg}
              alt="Staff One"
              style={{ boxShadow: "0 1rem 2rem black" }}
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className="h-auto flex flex-row flex-wrap justify-evenly pt-16 bg-white">
          <div
            className="flex flex-row flex-wrap justify-center mt-24 mb-20 "
            style={{ width: "50%" }}
          >
            <img
              src={StaffTwoImg}
              alt="Staff One"
              id={'pink-image'}
              className="w-auto h-auto border-2"
              style={{ minWidth: 375, boxShadow: "1rem 1rem 2.55rem #e75480" }}
            />
          </div>
          <div className="flex flex-col flex-wrap flex-center mt-24 mb-10 text-center">
            <h3 className={"text-4xl mb-16"}>But Seriously!</h3>
            <h5 className={"text-2xl"} style={{ width: 350 }}>
              Who makes up this amazing (albeit sometimes insane) group of
              thinkers, tinkerers, food lovers, and creatives that are the
              driving force behind the scenes here at Grubspace and why do we
              have so much fun?
            </h5>
          </div>
          <div>
            <img src={StaffFourImg} alt="Staff One" className="w-auto h-auto" />
          </div>
          <div className="h-auto w-screen flex flex-wrap-reverse flex-row justify-evenly py-16  text-white bg-yellow-900">
            <div
              className="flex flex-row flex-wrap flex-center text-left my-auto py-6 px-8 bg-gray-600 text-white text-xl"
              style={{ width: 350, boxShadow: "0 1rem 2rem black" }}
            >
              <h1>Kelsey Lang / Co-Editor</h1>
              <hr className={"w-48 my-4"} />
              <p className={"my-4"}>Hometown: Los Angeles, CA</p>
              <p>Favorite Foods: Tacos, Pizza, Sushi</p>
              <p className={"my-4"}>
                Favorite Wine Types: Pinot Noir, Tokaj, White Zinfandel
              </p>
              <p>
                Favorite Movies: Star Wars, The Notebook, Eat Drink Man Woman
              </p>
              <p className={"my-4"}>
                Favorite Food Quote: <em>"Is it taco Tuesday?"</em>
              </p>
            </div>
            <div
              className="flex flex-row flex-wrap justify-center my-20 text-center"
              style={{ width: "50%" }}
            >
              <img
                src={StaffThreeImg}
                style={{ boxShadow: "0 1rem 2rem black", minWidth: 375 }}
                alt="Staff One"
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="h-auto w-screen flex flex-row flex-wrap justify-evenly py-16 text-white bg-white">
            <div
              className="flex flex-row flex-wrap justify-center my-20 text-center"
              style={{ width: "50%" }}
            >
              <img
                src={StaffSevenImg}
                style={{ boxShadow: "0 1rem 2rem black", minWidth: 375 }}
                alt="Staff One"
                className="w-auto h-auto"
              />
            </div>
            <div
              className="flex flex-row flex-wrap flex-center text-left my-auto py-20 px-8 bg-gray-600 text-white text-xl"
              style={{ width: 350, boxShadow: "0 1rem 2rem black" }}
            >
              <h1>John Walker Booth / Co-Editor</h1>
              <hr className={"w-48 my-4"} />
              <p className={"my-4"}>Hometown: Seattle, WA</p>
              <p>Favorite Foods: BBQ, Biriyani, Ramen</p>
              <p className={"my-4"}>
                Favorite Wine Types: Bordeaux, Malbec, White Rioja
              </p>
              <p>
                Favorite TV Shows: The Mandalorian, Great British Baking Show,
                Bob's Burgers
              </p>
              <p className={"my-4"}>
                Favorite Food Quote:{" "}
                <em>"Food is our common ground, a universal experience. "</em>{" "}
                <br />
                James Beard
              </p>
            </div>
          </div>
          <div className=" w-screen flex flex-col flex-wrap justify-evenly align-center pb-32 text-white bg-gray-800">
            <h3 className={"text-5xl bg-gray-600 w-screen py-10"}>
              Our Street Team
            </h3>
            <div className="flex flex-row flex-wrap justify-evenly align-center">
              <div
                className="flex flex-col flex-wrap flex-center justify-center align-center text-center h-auto"
                style={{ width: 350 }}
              >
                <h3 className={"text-2xl my-16"} htmlFor={"Gwendolyn Johnson"}>
                  Gwendolyn Johnson
                </h3>
                <img
                  name={"Gwendolyn Johnson"}
                  src={TeamOneImg}
                  alt="Staff One"
                  style={{ boxShadow: "0 1rem 2rem black mt-32" }}
                  className="w-auto h-auto"
                />
              </div>
              <div
                className="flex flex-col flex-wrap flex-center justify-center align-center text-center h-auto"
                style={{ width: 350 }}
              >
                <h3 className={"text-2xl my-16"} htmlFor={"Ahmed Khan"}>
                  Ahmed Khan
                </h3>
                <img
                  name={"Ahmed Khan"}
                  src={TeamThreeImg}
                  alt="Ahmed Khan"
                  style={{ boxShadow: "0 1rem 2rem black mt-32" }}
                  className="w-auto h-auto"
                />
              </div>
              <div
                className="flex flex-col flex-wrap flex-center justify-center align-center text-center h-auto"
                style={{ width: 350 }}
              >
                <h3 className={"text-2xl my-16"} htmlFor={"Noriko Sumida"}>
                  Noriko Sumida
                </h3>
                <img
                  name={"Noriko Sumida"}
                  src={TeamTwoImg}
                  alt="Staff One"
                  style={{ boxShadow: "0 1rem 2rem black mt-32" }}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

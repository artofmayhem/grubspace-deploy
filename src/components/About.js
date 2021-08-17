import React from "react";
import {
  StaffOneImg,
  StaffTwoImg,
  StaffThreeImg,
  StaffFourImg,
  StaffSixImg,
  StaffSevenImg,
} from "../assets/index";

export default function About() {
  return (
    <React.Fragment>
      <div
        className={
          "about-container bg-black w-screen text-center flex flex-col justify-center align-center"
        }
      >
        {" "}
        <h1
          className={"text-white mt-20 mx-auto text-5xl"}
          style={{ textShadow: "0 0 1rem black" }}
        >
          Meet the Grubspace team
        </h1>
      </div>
      <div
        className={
          "bg-white h-auto w-screen flex flex-col justify-center text-center align-center"
        }
      >
        <div className="h-auto flex flex-row flex-wrap justify-evenly py-24 text-white bg-gray-600">
          <div
            className="flex flex-row flex-wrap flex-center my-20 text-center"
            style={{ width: 350 }}
          >
            {/* <h1 className={"text-3xl w-48 py-20 w-72 h-96 bg-black"}>
              Welcome
              <br /> to <br /> our backstage area!
            </h1> */}
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
            {/* <h1 className={"text-5xl w-48 py-20 w-72 h-96 bg-black"}>
              Welcome
              <br /> to <br /> our backstage area!
            </h1> */}
            <img
              src={StaffSixImg}
              alt="Staff One"
              style={{ boxShadow: "0 1rem 2rem black" }}
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className="h-auto flex flex-row flex-wrap justify-evenly py-24 bg-white">
          <div className="flex flex-center my-20 " style={{ width: "50%" }}>
            <img src={StaffTwoImg} alt="Staff One" className="w-auto h-auto" />
          </div>
          <div className="flex flex-col flex-wrap flex-center my-20 text-center">
            <h3 className={"text-4xl my-32"}>But Seriously!</h3>
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
          <div className="h-auto w-screen flex flex-row flex-wrap justify-evenly py-24 -mb-24 text-white bg-yellow-900">
            
            <div
              className="flex flex-row flex-wrap flex-center text-left my-auto py-20 px-8 bg-gray-600 text-white text-xl"
              style={{ width: 350, boxShadow: "0 1rem 2rem black" }}
            >
              <h1>Kelsey Lang</h1>
              <hr className={"w-48 my-4"} />
              <p className={"my-4"}>Hometown: Los Angeles, CA</p>
              <p>Favorite Foods: Tacos, Pizza, Sushi</p>
              <p className={"my-4"}>
                Favorite Wine Types: Pinot Noir, Tokaj, White Zinfandel
              </p>
              <p>
                Favorite Movies: Star Wars, The Notebook, Eat Drink Man Woman
              </p>
              <p className={'my-4'}>
                Favorite Food Quote: <em>"Is it taco Tuesday?"</em>
              </p>
            </div>
            <div
              className="flex flex-row flex-wrap flex-center my-20 text-center"
              style={{ width: "50%" }}
            >
              <img
                src={StaffThreeImg}
                style={{ boxShadow: "0 1rem 2rem black" }}
                alt="Staff One"
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="h-auto w-screen flex flex-row flex-wrap justify-evenly py-24 -mb-24 text-white bg-white">
            
            <div
              className="flex flex-row flex-wrap flex-center my-20 text-center"
              style={{ width: "50%" }}
            >
              <img
                src={StaffSevenImg}
                style={{ boxShadow: "0 1rem 2rem black" }}
                alt="Staff One"
                className="w-auto h-auto"
              />
            </div>
            <div
              className="flex flex-row flex-wrap flex-center text-left my-auto py-20 px-8 bg-gray-600 text-white text-xl"
              style={{ width: 350, boxShadow: "0 1rem 2rem black" }}
            >
              <h1>John Walker Booth</h1>
              <hr className={"w-48 my-4"} />
              <p className={"my-4"}>Hometown: Seattle, WA</p>
              <p>Favorite Foods: BBQ, Biriyani, Ramen</p>
              <p className={"my-4"}>
                Favorite Wine Types: Bordeaux, Malbec, White Rioja
              </p>
              <p>
                Favorite TV Shows: The Mandalorian, Great British Baking Show, Bob's Burgers
              </p>
              <p className={'my-4'}>
                Favorite Food Quote: <em>"Food is our common ground, a universal experience. "</em> <br/>James Beard
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

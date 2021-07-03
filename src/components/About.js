import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div
        className={
          "about-container bg-black h-96 w-screen flex flex-col justify-center align-center"
        }
      ></div>
      <div
        className={
          "bg-white h-96 w-screen flex flex-col justify-center text-center align-center"
        }
      >
        <h1 className={"text-gray-800 mx-auto -mt-32 text-5xl"}>
          Meet the Grubspace team!
        </h1>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import { Link, useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  const logout = () => {
    alert("You have been logged out. Thank you for visiting");
    localStorage.clear();
    history.push("/");
  };

  return (
    <div   className={
      "logout-container bg-black h-screen w-screen flex justify-center items-center"
    }>
    <div
      className="d-flex flex-col justify-between items-center bg-black mt-10"
      style={{
        border: '5px solid',
        color: "white",
        textAlign: "center",
        padding: "2vh 3vw",
        opacity: "0.7",
        width: '40%',
        minWidth: 370
      }}
    >
      <Link
        to="/"
        onClick={() => logout()}
        style={{
          margin: "5vh 0",
          fontSize: "5vh",
          color: "white",
          textDecoration: "none",
          padding: "2rem 3rem",
          opacity: "",
        }}
      >
        <h2>Thank you for visiting Grubspace.</h2>
        <h3 style={{ marginTop: "2vh", marginBottom: "5vh" }}>Happy Eating!</h3>
        <h4>- Logout -</h4>
      </Link>
      </div>
    </div>
  );
};

export default Logout;

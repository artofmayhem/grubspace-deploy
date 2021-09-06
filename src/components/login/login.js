import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, LinearProgress, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import API from "../../api/api";
import signUpSchema from "./signUpSchema";
import loginSchema from "./loginSchema";
import initialFormErrors from "../../state/initial-states/initialFormErrors";
import initialCredentials from "../../state/initial-states/initialCredentials";
import { Parallax } from "react-parallax";
import * as yup from "yup";

import { FamilyDinner } from "../../assets/index";

const LoginForm = () => {
  const history = useHistory();

  const [user, setUser] = useState(initialCredentials);
  const [login, setLogin] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [formErrors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [backendError, setBackendError] = useState();

  //helper functions

  //Form Validation Feature
  const validateChange = (e) => {
    //allows react to keep the event object to play nicely with the async
    e.persist();
    if (login) {
      console.log(loginSchema, "login");
      yup
        .reach(loginSchema, e.target.name)
        .validate(e.target.name)
        .then((valid) => {
          //logs validation truthiness
          console.log(valid);
          setErrors({
            ...formErrors,
            [e.target.name]: "",
          });
        })
        .catch((error) => {
          setErrors({ ...formErrors, [e.target.name]: error.errors[0] });
          console.log({ error });
        });
    } else {
      console.log(signUpSchema, "signup");
      yup
        .reach(signUpSchema, e.target.name)

        .validate(e.target.name)
        .then((valid) => {
          //logs validation truthiness
          console.log(valid);
          setErrors({
            ...formErrors,
            [e.target.name]: "",
          });
        })
        .catch((error) => {
          setErrors({ ...formErrors, [e.target.name]: error.errors[0] });
          console.log({ error });
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateChange(e);
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  useEffect(() => {
    loginSchema.isValid(user).then((valid) => setDisabled(!valid));
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setFetching(true);
    if (login) {
      API.post("", user)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(initialCredentials);
          history.push("/recipes");
          setFetching(false);
        })
        .catch((err) => {
          alert(
            "Please Provide a Valid Username, and Password Combination or Start A New Account By Clicking The Sign-up Button"
          );
          const backError = err.response.data.message;
          setBackendError(backError);
          console.log(backError, "sign in error from the api");
        });
    } else {
      API.post("", user)
        .then(({ data }) => {
          alert("Account Created! Please Login to Continue");
          setLogin(true);
          setFetching(false);
          history.push("/login");
        })
        .catch((err) => {
          alert(
            "Please Provide a Valid Username, Email, and Password (6-15 characters long) to Create an Account"
          );
          const backError = err.response.data.message;
          setBackendError(backError);
          console.log(backError, "sign in error from the api");
        });
    }
  };

  return (
    <Parallax bgImage={FamilyDinner} strength={500}>
      <div
        className={"flex flex-col justify-center items-center"}
        style={{ height: "75vh" }}
      >
        <Form onSubmit={onSubmit}>
          <h2
            className={"text-white text-4xl"}
            style={{ textShadow: "0 0 1rem black", fontWeight: 400 }}
          >
            {login ? "Login" : "Sign Up"}
          </h2>
          <TextField
            required
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            label="username"
            margin="dense"
            style={{ width: 300 }}
          />
          {!login ? (
            <TextField
              required
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              // variant="outlined"
              label="email"
              margin="dense"
              style={{ width: 300 }}
            />
          ) : (
            <></>
          )}
          <TextField
            required
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            label="password"
            margin="dense"
            style={{ width: 300 }}
          />
          <h6 style={{ textAlign: "center", color: "red" }}>{backendError}</h6>
          <button
            disabled={disabled}
            type="submit"
            style={{
              color: "white",
              border: "1px solid white",
              width: 300,
              height: 40,
              marginTop: 20,
              background: "#444",
              borderRadius: 50,
              fontWeight: "bold",
            }}
          >
            {login ? "Login" : "Sign Up"}
          </button>
          {fetching ? <LinearProgress color="primary" /> : <></>}
        </Form>
        <Button
          size="small"
          variant="contained"
          style={{
            width: 300,
            height: 50,
            borderRadius: 50,
            marginTop: 50,
            background: "#444",
            color: "white",
            fontWeight: "bold",
            border: "1px solid white",
          }}
          onClick={() => setLogin(!login)}
        >
          {login ? "Go to Sign Up" : "Go to Log In"}
        </Button>
      </div>
    </Parallax>
  );
};

export default LoginForm;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  min-width: 375px;
  width: 30vw;
  padding: 5rem 3rem;
  gap: 0.25rem;
  background-color: transparent;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
  & h2 {
    text-align: center;
  }
`;

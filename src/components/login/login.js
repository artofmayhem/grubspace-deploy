import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import API from "../../api/api";
import signUpSchema from "./signUpSchema";
import loginSchema from "./loginSchema";
import initialFormErrors from "../../state/initial-states/initialFormErrors";
import initialCredentials from "../../state/initial-states/initialCredentials";
// import { Parallax } from "react-parallax";
import * as yup from "yup";
import { postLogIn, createUser } from "../../state/actionCreators";
// import { FamilyDinner } from "../../assets/index";
import { connect } from "react-redux";
const LoginForm = (props) => {
  const history = useHistory();
  const [user, setUser] = useState(initialCredentials);
  const [login, setLogin] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [formErrors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  //helper functions

  //Form Validation Feature
  const validateChange = (e) => {
    //allows react to keep the event object to play nicely with the async
    e.persist();
    if (login) {
      // console.log(loginSchema, "login");
      yup
        .reach(loginSchema, e.target.name)
        .validate(e.target.name)
        .then((valid) => {
          //logs validation truthiness
          // console.log(valid);
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
      // console.log(signUpSchema, "signup");
      yup
        .reach(signUpSchema, e.target.name)

        .validate(e.target.name)
        .then((valid) => {
          //logs validation truthiness
          // console.log(valid);
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
      console.log("user from login", user);
      props.postLogIn(user,(isSuccessful)=>{
        if(isSuccessful){
          history.push("/userrecipes");
        }
      });
    } else {
      console.log("user from register", user);
      props.createUser(user,(isSuccessful)=>{
        if(isSuccessful){
          alert("Account Created! Please Login to Continue");
          setLogin(true);
          setFetching(false);
          history.push("/login");
        }
      });
    }
  };
  // console.log("user data", userData );


  return (

      <div
        className={" login-container flex flex-col justify-center items-center py-10 "}
        style={{ height: "100vh", width: '100vw'}}
      >
        <Form onSubmit={onSubmit} style={{backgroundColor: '#222', opacity: 0.9, color: 'white', width: '35vw', minWidth: 370, margin: '5rem 0'}}>
          <h2
            className={"text-white text-4xl mb-4 "}
            style={{ textShadow: "0 0 1rem black", fontWeight: 400 }}
          >
            {login ? "Login" : "Sign Up"}
          </h2>
          <h6 className={'my-1'}>User Name</h6>
          <input
              className={
                "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
              }
              type="text"
            name="user_username"
            value={user.user_username}
            onChange={handleChange}
            label="username"
              style={{ boxShadow: "0 0 1.5rem #444" }}
            placeholder="User Name"
            />
        
          {!login ? (
            <>
            <h6 className={'my-1'}>Email</h6>
            <input
            className={
              "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
            }
            name="user_email"
            type="email"
          value={user.user_email}
          onChange={handleChange}
          label="Email"
            style={{ boxShadow: "0 0 1.5rem #444" }}
          placeholder="User Email"
          />
          </>
          ) : (
            <></>
          )}
          <h6 className={'my-1'}>Password</h6>
          <input
            className={
              "animate-fade-in-1 border-solid border-2 border-white p-2 w-60 mx-auto my-1 text-center text-black"
            }
            name="user_password"
            type="password"
            value={user.user_password}
            onChange={handleChange}
            placeholder="Password"
            label="password"
            style={{ boxShadow: "0 0 1.5rem #444" }}
          />
          {/* <h6 style={{ textAlign: "center", color: "red" }}>{backendError}</h6> */}
          <button
            disabled={disabled}
            type="submit"
            className={
              "animate-fade-in-2 border-2 bg-gray-400 text-white px-10 py-4 m-auto w-60"
            }
          >
            {login ? "Login" : "Sign Up"}
          </button>
          {fetching ? <LinearProgress color="primary" /> : <></>}
        </Form>
        <button

          className={
            "animate-fade-in-2 border-2 bg-gray-400 text-white px-10 py-4 mt-6 mb-10 w-60"
          }
          onClick={() => setLogin(!login)}
        >
          {login ? "Go to Sign Up" : "Go to Log In"}
        </button>
      </div>
  );
};

const mapStateToProps = (state) => ({
  // status: state.api.postLogIn.status,
  // error: state.api.postLogIn.errMsg
});

const mapDispatchToProps = {
  postLogIn,
  createUser
};


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);

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

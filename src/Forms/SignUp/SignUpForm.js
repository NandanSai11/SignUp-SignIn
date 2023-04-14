import React from "react";
import { Link } from "react-router-dom";
import "./mysignupStyle.css";
function SignUpForm(props) {
  return (
    <>
      <form onSubmit={props.signupHandler} style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="text">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            autoComplete="off"
            id="usernameSignUp"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="passwordSignUp"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            autoComplete="off"
            id="emailSignUp"
            required
          />
          <div className="clearfix">
            <Link to="/">
              <button type="button" className="cancelbtn">
                Already User ? Sign In
              </button>
            </Link>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;

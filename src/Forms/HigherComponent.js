import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUp/SignUpForm";

function HigherComponent() {
  //SignUp page code
  const [signupdata, setSignupdata] = useState([]);
  const SignupHandler = (event) => {
    event.preventDefault();
    const { email, name, password } = event.target.elements;

    const signUpFormData = {
      email: email.value,
      name: name.value,
      password: password.value,
    };
    setSignupdata([...signupdata, signUpFormData]);

    let username2 = document.getElementById("usernameSignUp");
    let email2 = document.getElementById("emailSignUp");
    let password2 = document.getElementById("passwordSignUp");
    username2.value = "";
    email2.value = "";
    password2.value = "";
  };
  console.log(signupdata);
  let newFormData = signupdata.map((item) => {
    return Object.values(item);
  });
  console.log(newFormData);
  let newArray = [];

  for (let i = 0; i < newFormData.length; i++) {
    newArray = newArray.concat(newFormData[i]);
  }
  console.log(newArray);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <SignInForm
                signupdata={signupdata}
                setSignupdata={setSignupdata}
                newarray={newArray}
              />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <SignUpForm
                signupdata={signupdata}
                setSignupdata={setSignupdata}
                signupHandler={SignupHandler}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default HigherComponent;

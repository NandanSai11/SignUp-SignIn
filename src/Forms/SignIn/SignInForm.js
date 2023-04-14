import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoggedIn from "../LoggedIn";
import SignUpForm from "../SignUp/SignUpForm";
function SignInForm(props) {
  const [formData, setFormData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, password } = event.target.elements;
    const newFormData = {
      name: name.value,
      password: password.value,
    };
    setFormData([...formData, newFormData]);

    var username1 = document.getElementById("usernameid");
    let password1 = document.getElementById("passwordid");
    username1.value = "";
    password1.value = "";
  };
  console.log(formData);
  let c = formData.map((ele) => {
    return Object.values(ele);
  });
  console.log(c);
  let d = [];
  for (let i = 0; i < c.length; i++) {
    d = d.concat(c[i]);
    console.log(d);
  }

  console.log(props.newarray);
  let render = false;
  for (let i = 0; i < props.newarray.length; i++) {
    for (let j = 0; j < d.length; j++) {
      if (props.newarray[i] === d[j]) {
        render = true;
      }
    }
  }
  console.log(render);
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "65px" }}>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <h6>UserName</h6>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="usernameid"
                aria-describedby="emailHelp"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <h6> Password</h6>
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="passwordid"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <p className="d-flex justify-content-center mt-2">
              Dont't a account? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </div>
      </form>

      {props.signupdata.map((ele, index) => {
        return (
          <div key={index}>
            <p>{ele.name}</p>
            <p>{ele.password}</p>
          </div>
        );
      })}
      {render ? <LoggedIn /> : ""}
    </>
  );
}

export default SignInForm;

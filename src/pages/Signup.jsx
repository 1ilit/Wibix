import React from "react";
import { Link, useNavigate } from "react-router-dom";
import rect from "../assets/rect.png";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { urlAccount } from "../endpoints";

const initialValues = {
  username: "",
  password: "",
  email: "",
  cpassword: "",
};

const Signup = () => {
  const [user, setUser] = useState({});
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (validate()) {
      await axios
        .post(`${urlAccount}/Register`, {
          userName: values.username,
          password: values.password,
          email: values.email,
        })
        .then((res) => {
          alert(
            "Yayy! You have successfully signed up.\n Login and get started"
          );
          navigate("/login");
          resetForm();
        })
        .catch((err) => console.log(err));
    }
  };

  const validate = () => {
    let temp = {};
    temp.username = values.username === "" ? false : true;
    temp.password = values.password === "" ? false : true;
    temp.email = values.email === "" ? false : true;
    temp.cpassword =
      values.cpassword === "" || values.cpassword !== values.password
        ? false
        : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? " invalid-field" : "";

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  function handleCallbackResponse(response) {
    console.log("encoded jwt id token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signinDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "676288802139-0nv2vc6pp4ff8tsvi6i979fkase8jle4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 m-0 p-0 d-none d-md-block">
            <img src={rect} alt="" className="full-height" />
          </div>

          <div className="col-md-6 bg-white">
            <div className="w-75 mx-auto my-5">
              <div className="text-center">
                <Link className="navbar-brand logo" to="/">
                  <i className="fa-brands fa-hubspot h2"></i>
                  <span className="h2 mx-2 fw-bold">wibix</span>
                </Link>
                <p className="text-start">
                  Join the <strong>biggest student hub</strong> and get access
                  to limitless resources and oppertunities.
                </p>
              </div>
              <form onSubmit={submit}>
                <div className="form-group my-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className={"form-control" + applyErrorClass("email")}
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className={"form-control" + applyErrorClass("username")}
                    name="userName"
                    value={values.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className={"form-control" + applyErrorClass("password")}
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    id="cpassword"
                    placeholder="Confirm password"
                    className={"form-control" + applyErrorClass("cpassword")}
                    name="cpassword"
                    value={values.cpassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <Link to="/login" className="wibix-link fw-bold">
                    Already have an account?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn-burnt-umber w-100 my-2 p-2"
                >
                  Submit
                </button>
                <div id="signinDiv" className="my-3 text-center"></div>
                {user && <div>{user.email}</div>}
                <p className="text-start">
                  By continuing, you agree to our{" "}
                  <Link to="/" className="wibix-link fw-bold">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/" className="wibix-link fw-bold">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

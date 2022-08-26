import React from 'react'
import {Link} from "react-router-dom"
import rect from "../assets/rect.png" 
import {useEffect, useState} from 'react'
import jwt_decode from 'jwt-decode'
const Signup = () => {
  const [user, setUser]=useState({});
  function handleCallbackResponse(response){
    console.log("encoded jwt id token: "+response.credential);
    var userObject=jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signinDiv").hidden=true;
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"676288802139-0nv2vc6pp4ff8tsvi6i979fkase8jle4.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signinDiv"),
      {theme: "outline", size: "large"}
    );

  }, [])

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
                      Join the <strong>biggest student hub</strong> and get access to limitless resources and oppertunities.
                    </p>
                  </div>
                  <form>
                      <div className="form-group my-3">
                          <label htmlFor="email">Email</label>
                          <input type="text" id="email" className="form-control"/>
                      </div>
                      <div className="form-group my-3">
                          <label htmlFor="username">Username</label>
                          <input type="text" id="username" className="form-control"/>
                      </div>
                      <div className="form-group my-3">
                          <label htmlFor="password">Password</label>
                          <input type="password" id="password" className="form-control"/>
                      </div>
                      <div className="form-group my-3">
                          <label htmlFor="cpassword">Confirm Password</label>
                          <input type="password" id="cpassword" className="form-control"/>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Link to="/login" className="wibix-link fw-bold">Already have an account?</Link>
                        
                      </div>
                      <button type="submit" className="btn-burnt-umber w-100 my-2 p-2">Submit</button>
                      <div id="signinDiv" className="my-3 text-center">
                          
                      </div>
                      {
                        user && 
                        <div>
                          {user.email}
                        </div>
                      }
                      <p className="text-start">
                      By continuing, you agree to our <Link to="/" className="wibix-link fw-bold">Terms and Conditions</Link> and <Link to="/" className="wibix-link fw-bold">Privacy Policy</Link>.
                    </p>
                  </form>

                </div>
                
              </div>
          </div>
      </div>
    </>
  )
}

export default Signup
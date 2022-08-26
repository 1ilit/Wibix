import React, { useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutBanner from "../components/AboutBanner";
import emailjs from "emailjs-com";
const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      emailjs
      .sendForm(
        "service_9jo4ous",
        "template_wh864ib",
        form.current,
        "BwoovTDqxbgULsH57"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been successfully submitted. Thanks for the feedback!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Oops, something went wrong. Please, try again.")
        }
      );



  };
  return (
    <div>
      <Navbar />

      <AboutBanner />
      <div className="container">
        <h1 className="fw-bold my-4 ms-4">About Us</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="bg-light border border-muted p-3">
              <h5 className="mb-4">
                <i className="fa-solid fa-list me-3"></i>Table of contents
              </h5>
              <p className="px-3 py-2 bg-white border border-muted li-accent">
                <a href="#1" className="wibix-link no-decor fw-bold">
                  Who are we
                </a>
              </p>
              <p className="px-3 py-2 bg-white border border-muted li-accent">
                <a href="#3" className="wibix-link no-decor fw-bold">
                  Our team
                </a>
              </p>
              <p className="px-3 py-2 bg-white border border-muted li-accent">
                <a href="#4" className="wibix-link no-decor fw-bold">
                  Our Partners
                </a>
              </p>
              <p className="px-3 py-2 bg-white border border-muted li-accent">
                <a href="#5" className="wibix-link no-decor fw-bold">
                  Careers
                </a>
              </p>
              <p className="px-3 py-2 bg-white border border-muted li-accent">
                <a href="#6" className="wibix-link no-decor fw-bold">
                  Contact us
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-9">
            {/* teams section */}
            <div className="row p-3 align-items-center" id="3">
              <div className="col-md-6 text-center">
                <hr className="mx-5" />
                <h3 className="fw-bold">This is our team</h3>
                <p className="px-5">
                  We are a strong team that believe in making education
                  accessible to all. We work hard to deliver the best platform
                  for people to connect and share knowledge.{" "}
                </p>
                <hr className="mx-5" />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-start align-items-center bg-light border border-muted mb-4 p-2">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                    alt="day"
                    width="120"
                    className="p-2"
                  />
                  <div className="ms-4 h5">
                    <p>Dummy 1 | CEO</p>
                    <p>
                      <a
                        href="https://www.linkedin.com/"
                        className="wibix-link"
                      >
                        LinkedIn{" "}
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center bg-light border border-muted mb-4 p-2">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                    alt="day"
                    width="120"
                    className="p-2"
                  />
                  <div className="ms-4 h5">
                    <p>Dummy 2 | CTO</p>
                    <p>
                      <a
                        href="https://www.linkedin.com/"
                        className="wibix-link"
                      >
                        LinkedIn{" "}
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center bg-light border border-muted mb-4 p-2">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                    alt="day"
                    width="120"
                    className="p-2"
                  />
                  <div className="ms-4 h5">
                    <p>Dummy 3 | COO</p>
                    <p>
                      <a
                        href="https://www.linkedin.com/"
                        className="wibix-link"
                      >
                        LinkedIn{" "}
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* career */}
            <div className="row">

            </div>

            {/* contact us section */}
            <div className="row m-0 text-center" id="6">
              <h3 className="fw-bold mb-4">Get In Touch</h3>
              <div className="col-md-4">
                <div className="bg-light border border-muted">
                  <i className="fa-solid fa-phone h2 m-4 mb-0 icon-color"></i>
                  <hr className="mx-5" />
                  <p className="fw-bold">Give us a call</p>
                  <p>+1 800 420 1683</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light border border-muted">
                  <i className="fa-solid fa-envelope h2 m-4 mb-0 icon-color"></i>
                  <hr className="mx-5" />
                  <p className="fw-bold">Email us at</p>
                  <p>wibix@wibix.mail.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light border border-muted">
                  <i className="fa-solid fa-location-dot h2 m-4 mb-0 icon-color"></i>
                  <hr className="mx-5" />
                  <p className="fw-bold">Visit us</p>
                  <p>Skellig Islands, Elfhelm</p>
                </div>
              </div>
              <p className="my-4 fw-bold text-muted">or</p>
              {/* Contact us form */}
              <div className="bg-light border border-muted p-4 mb-5 text-start">
                <h5>Contact us</h5>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <label className="my-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="for-group">
                    <label className="my-2">Email</label>
                    <input type="email" name="email"  id="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label className="my-2">Message</label>
                    <textarea name="message" id="message" className="form-control" placeholder="Message"/>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="submit"
                      value="Send message"
                      className="btn-burnt-umber py-2 px-3 mt-3"
                    />
                    <div className="text-danger d-none" id="message"> Please fill the form properly.</div>
                  </div>

                </form>
              </div>


            </div>

          </div>
        </div>
      </div>

      <div className="about-el my-3">
        <div className="layer p-0 m-0"></div>
        <h2 className="text-white position-absolute top-50 start-50 translate-middle mb-4 fw-bold">
          Made with love for you.
        </h2>
      </div>

      <div className="row align-items-center mb-4 m-0">
        <div className="col-md-8 text-center">
          <p>
            Project was funded by Creative Venus as a part of our compain{" "}
            <strong>
              <em>Learning Together</em>
            </strong>
          </p>
          <p>
            The idea behind{" "}
            <strong>
              <em>Learning Together</em>
            </strong>{" "}
            is to develop innovative tools to help connect people all around the
            world to encourage and support each other in their academic paths.
          </p>
        </div>
        <img
          src="https://i.ytimg.com/vi/ArjRFbzqDHs/maxresdefault.jpg"
          alt="day"
          className="col-md-4"
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;

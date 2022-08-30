import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ResNotFound = () => {
  return (
    <>
      <Navbar />

      <div className="container mb-5">
        <p>
          <Link to="/resources" className="wibix-link">
            Schools
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          Resource Not Found
        </p>
        <hr />
        <h1>Oops, the document you searched for was not found</h1>
        <hr />
        <div className="li-accent m-3 py-1">
          <p className="ms-2">
            Make sure you have entered the name of your document correctly.
          </p>
        </div>

        <div className="li-accent m-3 py-1">
          <p className="ms-2">
            Be the first to post your resources.
          </p>
        </div>
        <div className="li-accent m-3 py-1">
          <p className="ms-2">
            Post abot the document you're looking for on the fourm.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResNotFound;

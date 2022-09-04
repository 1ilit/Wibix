import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link , useNavigate} from "react-router-dom";

const CourseNotFound = (props) => {

    const history=useNavigate();
  return (
    <>
      <Navbar data={props.data}/>

      <div className="container mb-5">
        <p>
          <Link to="/resources" className="wibix-link">
            Schools
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          <a href="#0" className="wibix-link" onClick={(e)=>{history(-1)}}>
            Course
          </a>{" "}
          
          <i className="fa-solid fa-angles-right mx-2"></i>
          Course Not Found
        </p>
        <hr />
        <h1>Oops, the course you searched for was not found</h1>
        <hr />
        <div className="li-accent m-3 py-1">
          <p className="ms-2">
            Make sure you have entered the name of the course correctly.
          </p>
        </div>
        <div className="li-accent m-3 py-1">
          <p className="ms-2">
            Be the first to post your resources in your course.
          </p>
        </div>
        <div className="li-accent m-3 py-1">
          <p className="ms-2">
            Post about the document you're looking for on the fourm.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseNotFound;

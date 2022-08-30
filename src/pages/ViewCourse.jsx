import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { urlRes } from "../endpoints";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewCourse = (props) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response1 = await axios.get(`${urlRes}/Courses/${courseId}`);
      setCourse(response1.data);
    };
    getData();
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <p>
          <Link to="/resources" className="wibix-link">
            Schools
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          <Link to={`/resources/schools/${course.school?.id}`} className="wibix-link">
            {course.school?.name}
          </Link>
          <i className="fa-solid fa-angles-right mx-2"></i>
          <span className="fw-bold">{course.courseName}</span>
        </p>
        {course.resources?.map((c, k) => {
          return (
            <div className="">
              <h2>{c.title}</h2>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default ViewCourse;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { urlRes } from "../endpoints";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewSchool = () => {
  const { schoolId } = useParams();
  const [school, setSchool] = useState([]);
  const [courses, setCourses] = useState([]);
  const [mode, setMode] = useState("popular");

  useEffect(() => {
    const getData = async () => {
      const response1 = await axios.get(`${urlRes}/Schools/${schoolId}`);
      setSchool(response1.data);
      var path = "";
      switch (mode) {
        case "popular":
          path = "PopularCourses";
          break;
        case "all":
          path = "AllInSchool";
          break;
        default:
          path = "PopularCourses";
          break;
      }
      const response2 = await axios.get(`${urlRes}/${path}/${schoolId}`);
      console.log(response2);
      setCourses(response2.data);
    };
    getData();
  }, [mode, schoolId]);

  return (
    <>
      <Navbar />
      <div className="container">
        <p>
          <Link to="/resources" className="wibix-link">
            Schools
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          {school.name}
        </p>
        <hr />

        <div className="my-4 li-accent">
          <div className="ms-4">
            <h1>{school.name}</h1>
            <p>
              Total resources available: {school.numberOfRes} | Total Courses
              Registered: {school.courses?.length}
            </p>
          </div>
        </div>
        <hr />

        <div className="my-2">
          <button
            type="button"
            className={
              mode === "popular"
                ? "me-1 h6 modes wibix-link px-3 py-2 underlined"
                : "me-1 h6 modes wibix-link px-3 py-2"
            }
            onClick={() => setMode("popular")}
          >
            Popular
          </button>
          <button
            type="button"
            className={
              mode === "all"
                ? "mx-1 h6 modes wibix-link px-3 py-2 underlined"
                : "mx-1 h6 modes wibix-link px-3 py-2"
            }
            onClick={() => setMode("all")}
          >
            All
          </button>
        </div>

        <div className="my-4 d-flex no-wrap">
          {courses.map((c, key) => {
            return (
              <div className="me-3 bg-light border border-muted p-3 w-md-20">
                <Link
                  to={`/resources/schools/courses/${c.id}`}
                  className="fw-bold wibix-link"
                >
                  {c.courseName}
                </Link>
                <p className="text-muted">
                  Number of resources: {c.numberOfRes}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewSchool;

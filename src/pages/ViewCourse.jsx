import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { urlRes } from "../endpoints";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewCourse = (props) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  // const [res, setResources]=useState([]);
  const [mode, setMode] = useState("rating");
  const [searchStr, setSearchStr] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${urlRes}/Courses/${mode}/${courseId}`);
      setCourse(response.data);
    };
    getData();
  });

  const handleChange = (e) => {
    setSearchStr(e.target.value);
    console.log(searchStr);
    const newFilter = course.resources?.filter((value) => {
      return value.title.toLowerCase().includes(searchStr.toLowerCase());
    });

    setFilteredData(newFilter);
  };

  const handleCourseSearch = async (e) => {
    e.preventDefault();

    await axios
      .get(`${urlRes}/SRI/${searchStr}/${courseId}`)
      .then((response) => {
        console.log(response);
        navigate(`/resources/schools/courses/resources/${response.data}`);
      })
      .catch((error) => navigate("/resNotFound"));
  };

  const clearFilter = () => {
    setSearchStr("");
    setFilteredData([]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <p>
          <Link to="/resources" className="wibix-link">
            Schools
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          <Link
            to={`/resources/schools/${course.school?.id}`}
            className="wibix-link"
          >
            {course.school?.name}
          </Link>
          <i className="fa-solid fa-angles-right mx-2"></i>
          <span className="fw-bold">{course.courseName?.toUpperCase()}</span>
        </p>

        <hr />

        <div className="li-accent px-4 py-2">
          <h2>{course.courseName?.toUpperCase()}</h2>
          <p className="text-muted mt-3">School: {course.school?.name}</p>
          <p className="text-muted">
            Number of Resources: {course.numberOfRes}
          </p>
        </div>

        <hr />

        <div className="text-center mt-4">
          <h4>Search for resources by title</h4>
        </div>
        <form className="my-4">
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-3 w-40"
              placeholder="Title"
              onChange={handleChange}
              id="input"
            />
            <button
              className="btn-burnt-umber my-2 my-sm-0 px-3 py-2"
              type="button"
              onClick={handleCourseSearch}
              id="search-button"
            >
              Search
            </button>
          </div>

          {filteredData.length !== 0 && (
            <div className="bg-light border border-muted w-50 mx-auto my-2">
              <div className="text-end">
                <button type="button" className="px-2" onClick={clearFilter}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              {filteredData.map((s, key) => {
                return (
                  <div className="bg-white m-2 p-2 text-start">
                    <Link
                      className="wibix-link p-2"
                      to={`/resources/schools/courses/resources/${s.id}`}
                    >
                      {s.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </form>

        <hr />

        <div className="my-2">
          <button
            type="button"
            className={
              mode === "rating"
                ? "mx-1 h6 modes wibix-link px-3 py-2 underlined"
                : "mx-1 h6 modes wibix-link px-3 py-2"
            }
            onClick={() => setMode("rating")}
          >
            Most Liked
          </button>

          <button
            type="button"
            className={
              mode === "name"
                ? "me-1 h6 modes wibix-link px-3 py-2 underlined"
                : "me-1 h6 modes wibix-link px-3 py-2"
            }
            onClick={() => setMode("name")}
          >
            All
          </button>
        </div>

        <div className="my-4 d-flex no-wrap">
          {course.resources?.map((c, k) => {
            return (
              <div className="me-3 bg-light border border-muted p-3 w-md-20">
                <Link
                  to={`/resources/schools/courses/resources/${c.id}`}
                  className="fw-bold wibix-link"
                >
                  {c.title}
                </Link>
                <p className="text-muted">Rating: {c.rating}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewCourse;

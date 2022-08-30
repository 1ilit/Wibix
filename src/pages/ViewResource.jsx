import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { urlRes } from "../endpoints";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewResource = () => {
  const { resourceId } = useParams();

  const [res, setRes] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${urlRes}/Resources/${resourceId}`);
      setRes(response.data);
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
          <Link
            to={`/resources/schools/${res.schoolId}`}
            className="wibix-link"
          >
            {res.school}
          </Link>
          <i className="fa-solid fa-angles-right mx-2"></i>
          <Link
            to={`/resources/schools/courses/${res.courseId}`}
            className="wibix-link"
          >
            {res.courseName?.toUpperCase()}
          </Link>
          <i className="fa-solid fa-angles-right mx-2"></i>
          <span className="fw-bold">{res.title}</span>
        </p>
        <hr />
      </div>

      <Footer />
    </>
  );
};

export default ViewResource;

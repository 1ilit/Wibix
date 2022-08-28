import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { urlRes } from "../endpoints";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewSchool = () => {
  const { schoolId } = useParams();
  const [school, setSchool] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${urlRes}/Schools/${schoolId}`);
      setSchool(response.data);
    };
    getData();
  }, [schoolId]);

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

        

      </div>
      <Footer />
    </>
  );
};

export default ViewSchool;

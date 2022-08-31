import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { urlRaw, urlRes } from "../endpoints";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Viewer, Worker } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const ViewResource = () => {
  const { resourceId } = useParams();

  const [res, setRes] = useState({});
  //const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${urlRes}/Resources/${resourceId}`);
      setRes(response.data);

      // let reader=new FileReader();
      // reader.readAsDataURL(`${urlRaw}/Uploads/${res.fileName}`);
    };
    getData();
  });

  const applyClick = () => {
    return "";
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

        <div className="li-accent px-4 py-2">
          <div className="d-flex justify-content-between">
            <h2>{res.title}</h2>
            <div className="d-flex">
              <i
                className={"fa-solid fa-thumbs-up h2 wibix-link" + applyClick()}
              ></i>
              <p className="h3 mx-3">{res.rating}</p>
              <i
                className={
                  "fa-solid fa-thumbs-down h2 wibix-link mt-2" + applyClick()
                }
              ></i>
            </div>
          </div>

          <p className="text-muted mt-3">School: {res.school}</p>
          <p className="text-muted">Course: {res.courseName}</p>
        </div>

        <hr />
        <a
          href={`${urlRaw}/Uploads/${res.fileName}`}
          target="_blank"
          rel="noreferrer"
          className="ms-2 wibix-link h6 fw-bold"
        >
          Download file here
        </a>
      </div>

      <div className="pdf-viewer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer fileUrl={`${urlRaw}/Uploads/${res.fileName}`} />
        </Worker>
      </div>

      <Footer />
    </>
  );
};

export default ViewResource;

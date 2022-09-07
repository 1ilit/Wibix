import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { urlRaw, urlRes } from "../endpoints";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ViewResource = (props) => {
  const { resourceId } = useParams();

  const [res, setRes] = useState({});
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${urlRes}/${resourceId}`)
        .then((res) => setRes(res.data))
        .catch(err=>console.log("error in fetching res "+err));
    };
    getData();
  });

  const applyClick = () => {
    return "";
  };

  return (
    <>
      <Navbar data={props.data}/>

      <div className="container my-3">
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
        <div className="li-accent px-4 py-3 my-4 bg-light">
          <div className="d-flex justify-content-between">
            <h2>{res.title}</h2>
            <div className="d-flex">
              <i
                className={"fa-solid fa-sort-up h2 wibix-link mt-2" + applyClick()}
              ></i>
              <p className="h3 mx-3">{res.rating}</p>
              <i
                className={
                  "fa-solid fa-sort-down h2 wibix-link" + applyClick()
                }
              ></i>
            </div>
          </div>
          <p className="text-muted mt-3">School: {res.school}</p>
          <p className="text-muted">Course: {res.courseName}</p>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-8">
            <div className="pdf-viewer my-4">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                <div
                  style={{
                    height: "920px",
                  }}
                >
                  <Viewer
                    fileUrl={`${urlRaw}/Uploads/${res.fileName}`}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker>
            </div>
          </div>
          <div className="col-md-4 my-4">
            <div className="bg-light p-3 border border-muted">
              <h3 className="fw-bold">Description</h3>
              <hr />
              <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
            </div>
              
              <div className="bg-light border border-muted my-5 p-3">
                <h3 className="fw-bold">You may also like</h3>
                  <hr />
                {
                  res.similar?.map((r, k)=>{
                    return(
                      <div className="bg-white border border-muted p-3 mb-3">
                <Link
                  to={`/resources/schools/courses/resources/${r.id}`}
                  className="fw-bold wibix-link"
                >
                  {r.title}
                </Link>
                <p className="text-muted">Rating: {r.rating}</p>
              </div>
                    )
                  })
                }
              </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ViewResource;

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
import UserLi from "../components/UserLi";

const ViewResource = (props) => {
  const { resourceId } = useParams();

  const [res, setRes] = useState({});
  const [upP, setUpP] = useState(false);
  const [downP, setDownP] = useState(false);
  let pseudoR = parseInt(res.rating);

  const upvote = async (e) => {
    setUpP(!upP);

    var response;
    if (!upP && !downP) {
      pseudoR++;
      response = await axios.post(`${urlRes}/UpvoteRes/${resourceId}`);
    } else {
      response = await axios.post(`${urlRes}/DownvoteRes/${resourceId}`);
    }

    document.getElementById("post-rating").innerHTML = pseudoR;
    console.log(response);
  };

  const downvote = async (e) => {
    setDownP(!downP);

    var response;
    if (downP && !upP) {
      response = await axios.post(`${urlRes}/UpvoteRes/${resourceId}`);
    } else {
      pseudoR--;
      response = await axios.post(`${urlRes}/DownvoteRes/${resourceId}`);
    }

    document.getElementById("post-rating").innerHTML = pseudoR;
    console.log(response);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${urlRes}/${resourceId}`)
        .then((res) => setRes(res.data))
        .catch((err) => console.log("error in fetching res " + err));
    };
    getData();
  });

  return (
    <>
      <Navbar data={props.data} />

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
              <button
                type="button"
                onClick={upvote}
                className="h2 m-0 vote-btn"
                style={{ color: upP ? "rgba(95, 27, 44, 0.3)" : "#8f352ed2" }}
              >
                <i className="fa-solid fa-sort-up h2 wibix-link mt-2"></i>
              </button>

              <p className="h3 mx-3">{res.rating}</p>
              <button
                type="button"
                onClick={downvote}
                className="h2 m-0 vote-btn"
                style={{ color: upP ? "rgba(95, 27, 44, 0.3)" : "#8f352ed2" }}
              >
                <i className="fa-solid fa-sort-down h2 wibix-link"></i>
              </button>
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
              <h6 className="mt-3">Posted by</h6>
              <UserLi
                id={res.user?.id}
                userName={res.user?.userName}
                displayName={res.user?.displayName}
                bio={res.user?.bio}
                rating={res.user?.rating}
                imageSrc={res.user?.imageSrc}
              />
            </div>

            <div className="bg-light border border-muted my-5 p-3">
              <h3 className="fw-bold">You may also like</h3>
              <hr />
              {res.similar?.map((r, k) => {
                return (
                  <div className="bg-white border border-muted p-3 mb-3">
                    <Link
                      to={`/resources/schools/courses/resources/${r.id}`}
                      className="fw-bold wibix-link"
                    >
                      {r.title}
                    </Link>
                    <p className="text-muted">Rating: {r.rating}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewResource;

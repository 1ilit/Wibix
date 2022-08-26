import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import { urlForum } from "../endpoints";
import FancyLI from "../components/FancyLI";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [mode, setMode] = useState("recent");

  useEffect(() => {
    const getData = async () => {
      var path = "";
      switch (mode) {
        case "recent":
          path = "Recent";
          break;
        case "hottest":
          path = "Hottest";
          break;
        case "upvoted":
          path = "Upvoted";
          break;
        default:
          path = "Recent";
          break;
      }
      const response = await axios.get(`${urlForum}/${path}`);
      console.log(response);
      setPosts(response.data);
    };
    getData();
  }, [mode]);

  return (
    <>
      <Navbar />
      <div className="ask-header mb-3">
        <div id="ask-image"></div>
        <div className="layer p-0 m-0"></div>
        <h2 className="text-white position-absolute bottom-0 start-0 ms-5 mb-4 ps-md-5 fw-bold">
          <span className="ms-md-4">Top Questions</span>
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-md-10 m-0">
            <button
              type="button"
              className={
                mode === "hottest"
                  ? "me-1 h6 modes wibix-link px-3 py-2 underlined"
                  : "me-1 h6 modes wibix-link px-3 py-2"
              }
              onClick={() => setMode("hottest")}
            >
              Hottest
            </button>
            <button
              type="button"
              className={
                mode === "recent"
                  ? "mx-1 h6 modes wibix-link px-3 py-2 underlined"
                  : "mx-1 h6 modes wibix-link px-3 py-2"
              }
              onClick={() => setMode("recent")}
            >
              Most Recent
            </button>
            <button
              type="button"
              className={
                mode === "upvoted"
                  ? "mx-1 h6 modes wibix-link px-3 py-2 underlined"
                  : "mx-1 h6 modes wibix-link px-3 py-2"
              }
              onClick={() => setMode("upvoted")}
            >
              Upvoted
            </button>
          </div>
          <Link
            to="/askQuestion"
            className="ms-3 ms-md-5 h6 modes px-3 py-2 col-md-2 w-auto ask-btn"
          >
            Ask a question
          </Link>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 my-4">
                <div className="bg-light border border-muted p-3">
                    <h5 className="ms-4">Rules</h5>
                    <FancyLI number="1" text="No spam/ no advertizing or self-promotion"/>
                    <FancyLI number="2" text="Do not post “offensive” posts, links or images"/>
                    <FancyLI number="3" text="Remain respectful of other members"/>
                    <FancyLI number="4" text="Stay on topic when answering"/>
                    <FancyLI number="5" text="Be descriptive and precise"/>
                </div>
                <div className="bg-light border border-muted p-3 my-4">
                    <h5>Top Users</h5>
                    <hr />
                </div>
            </div>

            <div className="col-md-9">
              {posts.map((post) => {
                return (
                  <Post
                    heading={post.heading}
                    rating={post.rating}
                    body={post.body}
                    date={post.date}
                    answers={post.answerCount}
                    id={post.id}
                    key={post.id}
                  ></Post>
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

export default Forum;

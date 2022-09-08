import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { urlForum, urlRaw } from "../endpoints";
import Answer from "../components/Answer";
import katex from "katex";
import "katex/dist/katex.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

window.katex = katex;
const ViewPost = (props) => {
  const { postId } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const [html, setHtml] = useState([]);
  const [upP, setUpP] = useState(false);
  const [downP, setDownP] = useState(false);
  let pseudoR = parseInt(post.rating);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${urlForum}/${postId}`);
      setPost(response.data);
    };
    getData();
  }, [postId]);

  const submit = async (e) => {
    if (props.data != null) {
      const config = {
        headers: {
          Authorization: "Bearer " + props.data?.token,
        },
      };
      await axios
        .post(
          `${urlForum}/AddAnswer/${props.data?.user?.id}`,
          {
            body: html,
            postId: postId,
          },
          config
        )
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        })
        .catch((err) => console.log("error"));
    } else {
      navigate("/login");
    }
  };

  const upvotePost = async (e) => {
    setUpP(!upP);

    var response;
    if (!upP && !downP) {
      pseudoR++;
      response = await axios.post(`${urlForum}/UpvotePost/${postId}`);
    } else {
      response = await axios.post(`${urlForum}/DownvotePost/${postId}`);
    }

    document.getElementById("post-rating").innerHTML = pseudoR;
    console.log(response);
  };

  const downvotePost = async (e) => {
    setDownP(!downP);

    var response;
    if (downP && !upP) {
      response = await axios.post(`${urlForum}/UpvotePost/${postId}`);
    } else {
      pseudoR--;
      response = await axios.post(`${urlForum}/DownvotePost/${postId}`);
    }

    document.getElementById("post-rating").innerHTML = pseudoR;
    console.log(response);
  };

  return (
    <>
      <Navbar data={props.data} />
      <div className="container my-3">
        <p>
          <Link to="/forum" className="wibix-link">
            Forum
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          {post.heading}
        </p>
        <hr />

        <h2 className="ms-4">{post.heading}</h2>

        <div className="ms-4 ms-md-0 d-md-flex justify-content-between align-items-center">
          <p className="ms-md-4 text-muted">
            Posted on <Moment format="llll">{post.date}</Moment>
          </p>
          <div className="d-flex align-items-center">
             <span className="me-3 fw-bold">By</span>
            <img
              src={
                post.user?.imageSrc
                  ? `${urlRaw}/Uploads/${post.user?.imageSrc}`
                  : "https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
              }
              alt="profile pic"
              height="50"
              className="border rounded-circle me-3"
            />
            <p className="mt-3">{post.user?.displayName}</p>
          </div>
        </div>

        <hr />

        <div className="d-flex">
          <div className="mx-3 text-center">
            <button
              type="button"
              className="h2 m-0 vote-btn"
              style={{ color: upP ? "rgba(95, 27, 44, 0.3)" : "#8f352ed2" }}
              onClick={upvotePost}
            >
              <i className="fa fa-caret-up fw-bold"></i>
            </button>
            <h4 className="mb-0" id="post-rating">
              {pseudoR}
            </h4>
            <button
              type="button"
              className="h2 m-0 vote-btn"
              style={{ color: downP ? "rgba(95, 27, 44, 0.3)" : "#8f352ed2" }}
              onClick={downvotePost}
            >
              <i className="fa fa-caret-down fw-bold"></i>
            </button>
          </div>

          <div className="mt-3">
            <div
              dangerouslySetInnerHTML={{ __html: post.body }}
              className="mb-5"
            ></div>
            <hr />

            {post.answers?.length === 0 && (
              <h5 style={{ color: "#af7a6d" }}>
                This question has not been answered yet.
              </h5>
            )}
            {post.answers?.length === 1 && <h4 className="my-4">1 Answer</h4>}
            {post.answers?.length > 1 && (
              <h4 className="my-4">{post.answers?.length} Answers</h4>
            )}

            <ul>
              {post.answers?.map((a, i) => {
                return (
                  <div>
                    <Answer
                      key={i}
                      id={a.id}
                      body={a.body}
                      rating={a.rating}
                      date={a.date}
                      user={a.user}
                      data={props.data}
                    />
                    <hr />
                  </div>
                );
              })}
            </ul>
            <div>
              <h5>Your answer</h5>
              <ReactQuill
                id="ql-editor"
                style={{
                  background: "#fff",
                  color: "black",
                }}
                theme="snow"
                value={html}
                placeholder="Write something..."
                modules={ViewPost.modules}
                formats={ViewPost.formats}
                onChange={(e) => {
                  setHtml(e);
                }}
              />
              <button
                className="btn-burnt-umber px-3 py-2 my-4 mx-1"
                onClick={submit}
              >
                Post Answer
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

ViewPost.modules = {
  toolbar: [
    [{ header: 1 }, { header: 2 }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ script: "sub" }, { script: "super" }],
    ["link", "image", "video", "formula"],
    ["clean"],
    ["code-block"],
  ],
};

export default ViewPost;

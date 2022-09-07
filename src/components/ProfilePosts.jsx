import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlForum, urlRes } from "../endpoints";
import Post from "./Post";
import { Link } from "react-router-dom";

const ProfilePosts = (props) => {
  const [mode, setMode] = useState("forumPosts");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (mode === "forumPosts") {
        await axios
          .get(`${urlForum}/GetPostsByUserId/${props.data?.user?.id}`)
          .then((res) => setPosts(res.data))
          .catch((err) =>
            console.log("error in profile post forumPost " + err)
          );
      }
      if (mode === "resources") {
        await axios
          .get(`${urlRes}/GetResourcesByUserId/${props.data?.user?.id}`)
          .then((res) => setPosts(res.data))
          .catch((err) => console.log("error in profile post resource " + err));
      }
    };
    getData();
  }, [mode]);

  return (
    <>
      <button
        type="button"
        className={
          mode === "forumPosts"
            ? "me-1 h6 modes wibix-link px-3 py-2 underlined"
            : "me-1 h6 modes wibix-link px-3 py-2"
        }
        onClick={() => setMode("forumPosts")}
      >
        Your Forum Posts
      </button>
      <button
        type="button"
        className={
          mode === "resources"
            ? "mx-1 h6 modes wibix-link px-3 py-2 underlined"
            : "mx-1 h6 modes wibix-link px-3 py-2"
        }
        onClick={() => setMode("resources")}
      >
        Your Resources
      </button>
      {mode === "forumPosts" &&
        posts.map((post, i) => {
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
      {mode === "resources" && (
        <div className="mt-4">
          {posts.map((c, i) => {
            return (
              <div
                className="me-3 bg-light border border-muted p-3 mb-4"
                key={i}
              >
                <div className="ms-3">
                  <Link
                    to={`/resources/schools/courses/resources/${c.id}`}
                    className="fw-bold wibix-link h3"
                  >
                    {c.title}
                  </Link>
                  <p className="text-muted mt-3">Rating: {c.rating}</p>
                  <p className="text-muted">
                    School: {c.school} | Course: {c.courseName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProfilePosts;

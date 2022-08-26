import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const Post = (props) => {
  return (
    <>
      <div className="d-flex border border-muted m-4 p-3 bg-light">
        <div className="mx-3 mt-1 text-center"> 
          <p className="mb-0">Votes {props.rating}</p>
          <p className="mb-0 text-muted">Answers {props.answers}</p>
        </div>
        <div className="ms-3">
          <h3>
            <Link to={`/forum/${props.id}`} className="wibix-link fw-bold">
              {props.heading}
            </Link>
          </h3>
          <p className="text-muted">
            Posted on <Moment format="llll">{props.date}</Moment>
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;

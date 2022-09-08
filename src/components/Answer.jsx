import React, { useState } from "react";
import Moment from "react-moment";
import { urlRaw, urlForum } from "../endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Answer = (props) => {
  const [upP, setUpP] = useState(false);
  const [downP, setDownP] = useState(false);

  const navigate = useNavigate();

  const upvote = async (e) => {
    if (props.data === null) {
      navigate("/signup");
    } else {
      e.preventDefault();
      setUpP(!upP);
      const config = {
        headers: {
          Authorization: "Bearer " + props.data?.token,
        },
      };
      await axios
        .post(`${urlForum}/UpvoteAnswer/${props.id}`, config)
        .catch((err) => "error in upvote answer " + err);
    }
  };

  const downvote = async (e) => {
    if (props.data === null) {
      navigate("/signup");
    } else {
      e.preventDefault();
      setDownP(!downP);
      const config = {
        headers: {
          Authorization: "Bearer " + props.data?.token,
        },
      };
      await axios
        .post(`${urlForum}/DownvoteAnswer/${props.id}`, config)
        .catch((err) => "error in upvote answer " + err);
    }
  };

  return (
    <>
      <div className="d-flex m-4 p-3 bg-light">
        <div className="mx-3 text-center">
          <button
            type="button"
            onClick={upvote}
            className="h2 m-0 vote-btn"
            style={{ color: upP ? "rgba(95, 27, 44, 0.3)" : "#8f352ed2" }}
          >
            <i className="fa fa-caret-up fw-bold"></i>
          </button>
          <h4 className="mb-0">{props.rating}</h4>
          <button
            type="button"
            onClick={downvote}
            className="h2 m-0 vote-btn"
            style={{ color: downP ? "rgba(95, 27, 44, 0.3)" : "#8f352ed2" }}
          >
            <i className="fa fa-caret-down fw-bold"></i>
          </button>
        </div>
        <div className="ms-3">
          <div
            dangerouslySetInnerHTML={{ __html: props.body }}
            className="mb-5"
          ></div>
          <div>
            <p className="text-muted">
              Posted on <Moment format="llll">{props.date}</Moment>
            </p>
            <div className="d-flex align-items-center">
              <img
                src={
                  props.user?.imageSrc
                    ? `${urlRaw}/Uploads/${props.user?.imageSrc}`
                    : "https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                }
                alt="profile pic"
                height="50"
                className="border rounded-circle me-3"
              />
              <p className="mt-3">{props.user?.displayName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;

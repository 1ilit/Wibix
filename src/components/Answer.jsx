import React from "react";
import Moment from "react-moment";
const Answer = (props) => {
  return (
    <>
      <div className="d-flex m-4 p-3 bg-light">
      <div className="mx-3 text-center">
            <button type="button" className="h2 m-0 vote-btn">
              <i className="fa fa-caret-up fw-bold"></i>
            </button>
            <h4 className="mb-0">{props.rating}</h4>
            <button type="button" className="h2 m-0 vote-btn">
              <i className="fa fa-caret-down fw-bold"></i>
            </button>
          </div>
        <div className="ms-3">
        <div dangerouslySetInnerHTML={{ __html: props.body }} className="mb-5"></div>
          <p className="text-muted">
            Posted on <Moment format="llll">{props.date}</Moment>
          </p>
        </div>
      </div>
    </>
  );
};

export default Answer;

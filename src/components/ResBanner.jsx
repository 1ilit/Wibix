import React from "react";
import resBanner from "../assets/resbanner.jpg";

const ResBanner = () => {
  return (
    <>
      <div className="abt-banner">
        <div>
          <img src={resBanner} alt="banner" />
          <div className="layer p-0 m-0"></div>
        </div>
        <div className="text-white position-absolute top-50 start-50 mt-5 translate-middle">
          <h1 className="text-center">All the resources you need</h1>
          <p className="mb-5 w-100 fw-bold text-center">
            Upload and download study notes, quizzes, exams, etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default ResBanner;

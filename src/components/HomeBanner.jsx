import React from "react";
import video from "../assets/homebanner.mp4";

const HomeBanner = () => {
  return (
    <>
      <div className="home-banner">
        <div>
          <video src={video} autoPlay loop muted className="">
            your browser does not support this feature
          </video>
          <div className="layer p-0 m-0"></div>
        </div>
        <div className="text-white position-absolute top-50 start-50 translate-middle">
          <p className="mt-4">24/7 course help</p>
          <h1>
            Revolutionize your academics with{" "}
            <span className="logo-font">wibix</span>
          </h1>
          <p className="mb-5">
            Join the <strong>biggest and strongest</strong> student hub, get the
            answers to your questions, make friends, and enjoy learning.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;

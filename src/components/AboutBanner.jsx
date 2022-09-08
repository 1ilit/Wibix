import React from "react";
import video from "../assets/abtbanner.mp4";

const AboutBanner = () => {
  return (
    <>
      <div className="abt-banner">
        <div>
          <video src={video} autoPlay loop muted>
            your browser does not support this feature
          </video>
          <div className="layer p-0 m-0"></div>
        </div>
        <div className="text-white position-absolute top-50 start-50 mt-5 translate-middle">
          <h1 className="text-center">
            <span className="logo-font">wibix</span> is here to help you
          </h1>
          <p className="mb-5 w-100 fw-bold">
            One step closer to building a community that celebrates learning...
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;

import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import sliderImages from "../sliderimages";
// import { urlRes } from "../endpoints";
// import axios from "axios";
import { Link } from "react-router-dom";
const Home = (props) => {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <>
      <Navbar data={props.data} color="white" />
      <HomeBanner />
      <div className="bg-grey m-0 p-2">
        <motion.h2 className="fw-bold text-center my-5">
          Start your journey on <span className="logo-font">wibix</span>
        </motion.h2>
        <div className="v-card bg-white mt-3 mx-5 px-4 py-5 px-md-14 py-md-6 mx-md-12 elevation-4 border border-secondary shadow-lg p-3 my-6 bg-white rounded">
          <div className="row justify-space-around flex-row px-2">
            <div className="px-0 col-md-4 col-12">
              <div className="d-flex justify-space-around align-center pb-4 px-7 px-md-0 pl-md-8">
                <hr className="flex-grow-1 mt-5" />
                <img
                  alt="lifesaver icon"
                  src="https://cdn-icons-png.flaticon.com/512/3846/3846885.png"
                  width="100px"
                  height="auto"
                  className="px-3"
                />
                <hr className="flex-grow-1 mt-5" />
              </div>
              <div className="px-8">
                <h6 className="text-h5 text-md-h6 mb-3 fw-bold text-center">
                  Adipiscing elit, sed do eiusmod sed do eiusmod
                </h6>
                <p className="text-center">
                  Sed do eiusmod tempor incididunt ut labore et dolore.dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod. sed do
                  eiusmod tempor incididunt ut labore et dolore.dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod. sed do eiusmod
                  tempor incididunt ut labore et dolore.dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
            </div>
            <div className="px-0 col-md-4 col-12">
              <div className="d-flex justify-space-around align-center pb-4 px-7 px-md-0">
                <hr className="flex-grow-1 mt-5" />
                <img
                  alt="chart icon"
                  src="https://cdn-icons-png.flaticon.com/512/3846/3846774.png"
                  width="100px"
                  height="auto"
                  className="px-3"
                />
                <hr className="flex-grow-1 mt-5" />
              </div>
              <div className="px-8 mx-3">
                <h6 className="text-h5 text-md-h6 mb-3 fw-bold text-center">
                  Incididunt ut labore et dolore sit amet
                </h6>
                <p className="text-center">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore.dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore.dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>

            <div className="px-0 col-md-4 col-12">
              <div className="d-flex justify-space-around align-center pb-4 px-7 px-md-0 pr-md-8">
                <hr className="flex-grow-1 mb-0 mt-5" />
                <img
                  alt="trophy icon"
                  src="https://cdn-icons-png.flaticon.com/512/2436/2436837.png"
                  width="100px"
                  height="auto"
                  className="px-3"
                />
                <hr className="flex-grow-1 mt-5" />
              </div>
              <div className="px-8 mx-3">
                <h6 className="text-h5 text-md-h6 mb-3 fw-bold text-center">
                  Cupidatat non proident sunt in culpa qui officia
                </h6>
                <p className="text-center">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6">
          <h2 className="fw-bold text-center my-4">
            Connect with people from universities all over the world
          </h2>
          <motion.div ref={slider} className="slider">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-slider"
            >
              {sliderImages.map((v, i) => {
                return (
                  <motion.div key={i} className="item">
                    <img src={v} alt="slider-img" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <hr/>

        <div className="row mt-5 mb-4 mx-0">
          
            <div className="col-md-6 text-end">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3846/3846889.png"
                width="200"
                alt="folder pic"
                className="me-3"
              />
            </div>

            <div className="col-md-6 text-start">
              <div className="mb-5 ms-3">
                <h5 className="fw-bold">Become One of Us!</h5>
                <p className="my-3 mb-4 w-md-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veritatis quaerat temporibus accusantium suscipit eaque quisquam blanditiis sunt accusamus dolorem optio quo impedit excepturi quod exercitationem error harum eum facilis!
                </p>
                <h5 className="mt-3">
                  <Link
                    to="/signup"
                    className="btn-burnt-umber px-3 py-2"
                  >
                    Get Started
                  </Link>
                </h5>
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

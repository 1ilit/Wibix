import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
const Home = (props) => {
  return (
    <>
      <Navbar data={props.data} color="white" />
      <HomeBanner />
      <div className="bg-grey m-0 p-2">
        <h2 className="fw-bold text-center my-4">
          Start your journey on <span className="logo-font">wibix</span>
        </h2>
        <div className="v-card bg-white mt-3 mx-5 px-4 py-5 px-md-14 py-md-6 mx-md-12 elevation-4 border border-secondary shadow-lg p-3 mb-5 bg-white rounded">
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
                  Practice stock trading with virtual money.
                </h6>
                <p className="text-center">
                  No deposit needed. Practice trading with virtual money to
                  sharpen your knowledge of how the stock market works and how
                  to use an online brokerage. The Investopedia Simulator will
                  help you gain confidence before risking your own money.
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
                  Trade a wide range of stocks, ETFs, and options.
                </h6>
                <p className="text-center">
                  Whether you are investing for the first time or looking to get
                  more familiar with more advanced trading methods, there is
                  something for you. The Investopedia Simulator offers over
                  6,000 equities on the NYSE and the Nasdaq for you to practice
                  trading and investing in.
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
                <hr class="flex-grow-1 mt-5" />
              </div>
              <div className="px-8 mx-3">
                <h6 className="text-h5 text-md-h6 mb-3 fw-bold text-center">
                  Trade by yourself or compete with others.
                </h6>
                <p className="text-center">
                  Practice trading and investing by yourself or join a game with
                  hundreds of thousands of other like-minded educated investors
                  and compete for the top rank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

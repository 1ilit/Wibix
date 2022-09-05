import React from "react";
import FAQLi from "../components/FAQLi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import faqs from "../faqs";
const FAQs = (props) => {
  return (
    <>
      <Navbar data={props.data}/>
      <div className="ask-header mb-3">
        <div id="ask-image"></div>
        <div className="layer p-0 m-0"></div>
        <h2 className="text-white position-absolute bottom-0 start-0 ms-5 mb-4 ps-md-5 fw-bold">
          <span className="ms-md-4">Frequently Asked Questions</span>
        </h2>
      </div>

      <div className="container mb-5">

        <p className="mt-5 mb-4">If you do not find the answer to your questions here, please <Link to="/about" className="wibix-link">contact us</Link>.</p>

        {
          faqs.map((v, i)=>{
            return(
              <FAQLi key={i} question={v.question} answer={v.answer} num={v.num}/>
            )
          })
        }
        
      </div>
      <Footer />
    </>
  );
};

export default FAQs;

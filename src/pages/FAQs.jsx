import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const FAQs = (props) => {
  return (
    <>
      <Navbar data={props.data}/>
        
      <Footer />
    </>
  );
};

export default FAQs;

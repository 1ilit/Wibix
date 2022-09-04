import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const FAQs = (props) => {
  return (
    <>
      <Navbar />
        {props.data &&
        
        <h1>hi {props.data.user?.userName}</h1>
        
        }
        {
          !props.data && <h1>Faqs</h1>
        }
      <Footer />
    </>
  );
};

export default FAQs;

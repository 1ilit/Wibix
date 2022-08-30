import React, { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { urlRes } from "../endpoints";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ViewResource = () => {

    

  return (
    <>
        <Navbar/>

        <Footer/>
    </>
  )
}

export default ViewResource
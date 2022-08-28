import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResBanner from '../components/ResBanner'
//import {Link} from "react-router-dom"
const Resources = () => {
  const handleSchoolSearch=()=>{
    
  }
  return (
    <div>
      <Navbar/>
      <ResBanner/>
      <div className="container text-center my-5">
      <h1 className="fw-bold">Find resources by school</h1>
      <h5>Enter the name of your school to find the courses and available resources</h5>
      <form class="my-4">
        <div className="d-flex justify-content-center">
          <input class="form-control me-sm-2 w-40" type="search" placeholder="American Univeristy of Ubiland" aria-label="Search"/>
          <button class="btn-burnt-umber my-2 my-sm-0 px-3 py-2" type="submit" onClick={handleSchoolSearch}>Search</button>
        </div>
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Resources
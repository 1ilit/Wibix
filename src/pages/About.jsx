import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const About = () => {
  return (
    <div>
      <Navbar/>
      About
      <div className="about-el">
        <div className="layer p-0 m-0"></div>
        {/* <img src="http://www.clker.com/cliparts/R/Y/r/z/p/z/white-filled-map-of-ireland-trans-no-outline-md.png" alt="elfhelm" className="text-white position-absolute bottom-0 end-0 me-5 mb-0 pe-md-5 fw-bold"/> */}
        <h2 className="text-white position-absolute top-50 start-50 translate-middle ms-5 mb-4 ps-md-5 fw-bold">
          Made with love by day from Elfhelm for students all over the universe.
        </h2>
      </div>
      
      <Footer/>
    </div>
  )
}

export default About
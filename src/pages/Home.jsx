import React from 'react'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/HomeBanner'
import Footer from '../components/Footer'
const Home = (props) => {
  return (
    <>
      <Navbar data={props.data}/>
      <HomeBanner/>
      <Footer/>
    </>
  )
}

export default Home
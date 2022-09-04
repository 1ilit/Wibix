import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Profile = (props) => {
  return (
    <>
      <Navbar data={props.data}/>
      <div>Dashboard ubidayyy</div>
      <Footer/>
    </>
    
  )
}

export default Profile
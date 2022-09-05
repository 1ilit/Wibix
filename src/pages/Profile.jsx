import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Profile = (props) => {
  return (
    <>
      <Navbar data={props.data}/>
      <div className="container">
          <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-8">
              
            </div>
          </div>
        </div>
      <Footer/>
    </>
    
  )
}

export default Profile
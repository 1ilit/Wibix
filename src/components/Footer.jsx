import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className="bg-beige row p-5 pb-2 me-0">
            <div className="col-md-4 mt-2 ms-5">
                <Link className="navbar-brand logo" to="/">
                    <i className="fa-brands fa-hubspot h2"></i>
                    <span className="h2 mx-2 fw-bold">wibix</span>
                </Link>
                <h5 className="mt-4 fw-bold">Follow Us</h5>
                <div className="d-flex justify-content-start">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="socials me-2 mt-2"><i className="h4 mt-2 ms-1 fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="socials mx-2 mt-2"><i className="h4 mt-2 fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="socials mx-2 mt-2"><i className="h4 mt-2 ms-1 fa-brands fa-twitter"></i></a>
                    <a href="https://discord.com/" target="_blank" rel="noreferrer" className="socials mx-2 mt-2"><i className="h4 mt-2 fa-brands fa-discord"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="socials ms-2 mt-2"><i className="h4 mt-2 ms-1 fa-brands fa-linkedin-in"></i></a>
                </div>

            </div>
            <div className="col-md-2 ms-5 mt-3">
                <h6 className="fw-bold mb-3">Navigate</h6>
                <p><Link className="footer-link" to="/">Home</Link></p>
                <p><Link className="footer-link" to="/resources">Resources</Link></p>
                <p><Link className="footer-link" to="/forum">Forum</Link></p>
                <p><Link className="wibix-link fw-bold" to="/signup">Sign up</Link></p>
            </div>
            <div className="col-md-2 ms-5 mt-3">
                <h6 className="fw-bold mb-3">About</h6>
                <p><Link className="footer-link" to="/about">About Us</Link></p>
                <p><Link className="footer-link" to="/faq">FAQs</Link></p>
            </div>
            <div className="col-md-2 ms-5 mt-3">
                <h6 className="fw-bold mb-3">Legal</h6>
                <p><Link className="footer-link" to="/privacy">Privacy Policy</Link></p>
                <p><Link className="footer-link" to="/terms">Terms and Conditions</Link></p>
            </div>
            <hr className="my-3"/>
            <p className="text-center">&copy; 2022 <strong>wibix</strong>. All Rights Reserved. - daywa1kr</p>
        </div>
    </>
  )
}

export default Footer
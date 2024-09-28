import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" />
                <p>Copyright 2022. All rights reserved.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div> */}
                <h2 className='fottercontenth2'>Who We Are</h2>
                <p>We are a platform dedicated to providing accurate agricultural commodity price predictions by analyzing critical factors like weather, production, and market trends.</p>
            </div>
            <div className="footer-content-center">
                <h2 className='fottercontenth2'>Our Mission</h2>
                {/* <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                </ul> */}
                <p>Our mission is to help farmers and businesses make informed decisions that lead to better market performance and financial stability.</p>
            </div>
            {/* <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91 9090909090</li>
                    <li>agripredict@gmail.com</li>
                </ul>

            </div> */}
        </div>
            <div className='contentaboutus'>
                <h1>Our Journey in Pictures</h1>
                <img src={assets.aboutusimg1} alt="Our Journey" className="aboutus-image" />
                <img src={assets.aboutusimg2} alt="Our Journey" className="aboutus-image" />
                <img src={assets.aboutusimg3} alt="Our Journey" className="aboutus-image" />
                <img src={assets.aboutusimg4} alt="Our Journey" className="aboutus-image" />
            </div>
        
        <hr />
        <p className="footer-copyright">
            &copy; 2024 AgriPrdict. Accurate Commodity price Prediction.
        </p>

    </div>
  )
}

export default Footer
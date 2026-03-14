import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>NK</h1>
                <p>
                  Thank you for visiting my portfolio. If you’d like to collaborate 
                  or have any questions, feel free to get in touch.
                </p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>&copy; 2026 Neethu Kommeri. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
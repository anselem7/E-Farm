import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>E-FARMERS</p>


    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li></li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icons-container">
          
            <img src={instagram_icon} alt="" />
            <p></p>
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>

    </div>
    <p>Efarmers on all social media platforms</p>
    <div className="footer-copyright">
        <hr />
        <p> For Customer service contact +363010203040 or email at Efarmers@gmail.com</p>
        <p>copyright @ 2024 - All right Reserved</p>

    </div>
    </div>
  )
}

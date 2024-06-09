import React from 'react'
import './Footer.css'
import {assets} from './../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique voluptatem error. Inventore nobis quo quidem, architecto aperiam, velit possimus ipsam corporis molestiae fugit aliquam sequi dolor. Veritatis, sint fugiat!</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
          
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH </h2>
          <ul>
            <li>09357696321</li>
            <li>diacouw@gmail.com</li>
          </ul>
        </div>
      </div>  
      <hr />
      <p className="footer-copyright">copyright 2024 DiacFood.com - all right reserved</p>
    </div>
  )
}

export default Footer
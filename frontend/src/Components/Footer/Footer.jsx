import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import gmail_icon from '../Assets/gmail_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
         <img src={footer_logo} alt="" />
         <p>SANDU FASHION</p>
        </div>
       
    <p><img src={gmail_icon} alt="" className="icon-gap"/>sandufashion40@gmail.com</p>
    <p><img src={whatsapp_icon} alt="" className="icon-gap"/>0767685774</p>
    <p><img src={facebook_icon} alt="" className="icon-gap"/>Sandu Fashion</p>
    <p><img src={instagram_icon} alt="" className="icon-gap"/>sandu_fashion40</p>
        
        
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
     </div>
    </div>
  )
}
export default Footer
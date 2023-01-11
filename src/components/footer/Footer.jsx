import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>YEWANT</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/yewant13"><FaFacebook/></a>
        <a href="https://instagram.com/yewant___"><FiInstagram/></a>
        <a href="https://twitter.com/yewantraj"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; YEWANT KARKI. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
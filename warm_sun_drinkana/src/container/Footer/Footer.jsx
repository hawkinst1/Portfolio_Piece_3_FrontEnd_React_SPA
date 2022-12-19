import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi";

import './Footer.css';
import { images } from '../../constants';

const date = new Date();
const [year] = [
  date.getFullYear(),
];

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
  
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>953, Picadilly Circus, London, UK</p>
        <p className='p__opensans'>+44 2123-44-12</p>
        <p className='p__opensans'>+44 2125-55-12</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.wmsName} alt="footer_logo" />        
        <img src={images.barrelIcon} alt="spoon" className='spoon__img' style={{height:"50px", marginTop:"2rem"}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>09:00 - 17:00</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>11:00 - 16:00</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>{year} Warm Sun Drinkana. All Rights Reserved</p>
     
    </div>
  </div>
);

export default Footer;

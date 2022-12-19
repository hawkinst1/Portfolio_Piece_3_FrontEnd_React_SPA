import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import { useHistory, Link } from 'react-router-dom';


import images from "../../../constants/images";

import './Navbar.css';

const verifiedCheck =() => {

}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let history = useHistory();
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.wmsName} alt="Warm Sun Drinkana" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Whiskies</a></li>
        <li className='p__opensans'><a href="#distillaries">Distillaries</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <p className='p__opensans'onClick={()=>{history.push("/login")}}>Log In/ Register</p>
        <div />
        <p  className='p__opensans' onClick={() => {history.push("/tourGuides")}}>Book a Tour</p>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu className='app__navbar-burgerIcon' color="#fff" fontSize={27} onClick={()=> setToggleMenu(true)}/>
          {/*this is an if that will carry out if the togglemenu is true */}
      
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={()=>setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <img src={images.bottleIcon} alt="whiskey bottle icon" className='app__navbar-smallscreen_bottle'/>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Whiskies</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;

import React, { Component } from 'react';
import Dropdown from './dropdown';
import logo from '../assets/images/logo.jpg'


class Header extends Component {
  render() {
   let width = window.innerWidth;
     if (width > 768) {
       return (
          <div className="navbar-container">
            <div className="navbar-image-logo">
              <a href="#navbar">
                <img className="logo" src={logo} alt="logo" />
              </a>
              <h1>Bärsilien</h1>
            </div>

            <div className="navbar-links">
              <li><a href="#pictures">PICTURES</a></li>
              <li><a href="#reviews" >REVIEWS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </div>
          </div>
        );
       } else {
          return (
            <div className="navbar-container">
              <div className="navbar-image-logo">
                <a href="#navbar">
                  <img className="logo" src={logo} alt="logo"/>
                </a>
                <h1>Bärsilien</h1>
              </div>

              <div style={{display: 'flex', justifyContent: 'center'}} >
                <Dropdown />
             </div>
            </div>
          );
        }
    }
}

export default Header;

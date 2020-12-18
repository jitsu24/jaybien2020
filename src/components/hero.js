/**
 * Hero component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import PropTypes from "prop-types";
import '../styles/hero.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {Logo} from './images';



const Hero = ({ children }) => {

    return (
      <div className={`section dark`} data-anchor="hero" id="hero">
          <div className={`hero`}>
           <Logo className={'hero__logo'}></Logo>
           <h1 className="hero__title">DEV, NY</h1>
           <h3 className={'hero__subtitle'}> Javascript, React, Node</h3>
           </div>
      </div>
    )
  }
  
  Hero.propTypes = {
    children: PropTypes.node,
  }
  
  export default Hero
  
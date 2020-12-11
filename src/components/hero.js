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
           <h1 className="title">DEV, NY</h1>
           <h3>Javascript, React, Node</h3>
           <button onClick={()=> scrollTo('#project')} >Scroll to project</button>
           </div>
      </div>
    )
  }
  
  Hero.propTypes = {
    children: PropTypes.node,
  }
  
  export default Hero
  
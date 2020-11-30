/**
 * Hero component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types";
import '../styles/hero.scss';

import {Logo} from './images';



const Hero = ({ children }) => {

    return (
      <div className={`section`}>
          <div className={`hero`}>
           <Logo className={'hero__logo'}></Logo>
           <h1 className="title">DEV, NY</h1>
           <h3>Javascript, React, Node</h3>
           </div>
      </div>
    )
  }
  
  Hero.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Hero
  
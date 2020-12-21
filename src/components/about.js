/**
 * Hero component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import PropTypes from "prop-types";
import '../styles/about.scss';

import {WorkingLate} from './images';



const About = () => {

    return (
      <div className={`section dark`} data-anchor="about" id="about">
          <div className={`about`}>
              <div className="about__display">
                <WorkingLate className={"about__svg"}/>
              </div>
              <div className="about__information">
                <h1 className="about__title">Hello.</h1>
                <h3 className={'hero__subtitle'}> I am developer in NYC</h3>
                <p className="about_para">I previously worked at a creative agency where I designed and built custom WordPress themes & plugins. I have also worked as a self
                    employed dev for 4+ years building web apps, websites, automation tools, scripts, plugins, and react native apps.
                </p>
              </div>
           

           </div>
      </div>
    )
  }
  
  About.propTypes = {
  
  }
  
  export default About
  
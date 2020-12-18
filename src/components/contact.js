/**
 * Hero component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import PropTypes from "prop-types";
import '../styles/contact.scss';

import {WorkingLate} from './images';



const Contact = () => {

    return (
      <div className={`section dark`} data-anchor="contact" id="contact">
          <div className={`contact`}>
          <h1 className={'contact__title'}>Want to talk?</h1>
          <h3 className={'contact__subtitle'}>
              Email me at <a href="mailto:jaybien0@gmail.com">jaybien0@gmail.com</a>
            </h3>
          <h3 className={'contact__subtitle'}>
            Visit me on <a href="https://www.linkedin.com/in/jay-bien/" target="_tab">My LinkedIn</a>
          </h3>
           

           </div>
      </div>
    )
  }
  
  Contact.propTypes = {
  
  }
  
  export default Contact
  
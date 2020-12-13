/**
 * Header component
 * 
 */


import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav";


import '../styles/header.scss';

const Header = ({ siteTitle, theme, toggleMenu, menuVisible}) => (
  <header className={['header']}
  >
    <Nav theme={theme} toggleMenu={toggleMenu} menuVisible={menuVisible}></Nav>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

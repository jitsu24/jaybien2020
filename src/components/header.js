import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav";


import '../styles/header.scss';

const Header = ({ siteTitle, navTheme }) => (
  <header className={['header']}
  >
    <Nav navTheme={navTheme}></Nav>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

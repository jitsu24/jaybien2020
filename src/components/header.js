import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav";


import '../styles/header.scss';

const Header = ({ siteTitle }) => (
  <header className={['header dark']}
  >
    <Nav></Nav>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

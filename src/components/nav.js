import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useContext} from "react";
import {ThemeContext} from '../context/ThemeContext';
import useThemeContext from '../hooks/useThemeContext';


import '../styles/nav.scss';


const Nav = ({ siteTitle, theme}) => {

  return (
  <nav className={`nav ${theme}`} >
      <div className={['nav__left']}>
          <h3><a className={'nav__brand'} href={'#'}>Jay Bien-aimé</a></h3>
      </div>

      <div className={'nav__right'}>
          <div className="nav__menu-trigger">
            <span className="nav__menu-span"></span>
            <span className="nav__menu-span"></span>
            <span className="nav__menu-span"></span>
          </div>


      </div>
  </nav>
)}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav;

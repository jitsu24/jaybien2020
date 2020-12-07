import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import '../styles/nav.scss';


const Nav = ({ siteTitle, navTheme }) => (
  <nav className={`nav ${navTheme}`}>
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
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav;

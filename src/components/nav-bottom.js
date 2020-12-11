/**
 * Nav bottom component
 * navigation location and social media
 * toggle arrows 
 */


import PropTypes from "prop-types";
import React from "react";



import {SOCIALS} from '../constants';
import {Dribbble, Github, Instagram, LinkedIn} from '../components/icons';
import '../styles/nav-bottom.scss';


const NavBottom = ({sectionIndex, totalSections, theme}) => {

    function renderIcon(name, classNames){
        switch(name){
            case 'dribbble':
                return <Dribbble className={classNames}></Dribbble>;
            case "github":
                return <Github className={classNames}></Github>;
            case "instagram":
                return <Instagram className={classNames}></Instagram>;
            case "linkedin":
                return <LinkedIn className={classNames}></LinkedIn>;
            default:
                return <></>;
        }
    }
 

  return (
  <div className={`nav-bottom ${theme}`} >
      <div className={['nav-bottom__left']}>
          <h1 className={'nav-bottom__head'}>{sectionIndex} | {totalSections}</h1>
      </div>

      <div className={'nav-bottom__right'}>

          
          
        {SOCIALS.map(social=>{

            return(
                <div className="nav-bottom__social-link">
                    {renderIcon(social.name.toLowerCase(), 'nav-bottom__social-icon')};
                </div>
            )
        })}

      </div>
  </div>
)}

NavBottom.propTypes = {
  siteTitle: PropTypes.string,
}

NavBottom.defaultProps = {
  siteTitle: ``,
}

export default NavBottom;

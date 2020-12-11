/**
 * Menu component for displaying menu and navigation options
 */

import React from 'react';
import '../styles/menu.scss';


const Menu = ({isVisible})=>{
    console.log({isVisible})

    return isVisible ? (<div className="menu"> 

    </div>)
    : null;
}

export default Menu;
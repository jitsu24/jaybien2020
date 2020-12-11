/**
 * useMenu hook for triggering menu and managin state
 */


import {useState} from 'react';

const useMenu = ()=>{
    const [menuIsVisible, setMenuVisibility] = useState(false);

    function menuToggleVisibility(){
        setMenuVisibility(!menuIsVisible);
    }


    return{
        menuIsVisible,
        menuToggleVisibility
    }
}

export default useMenu;
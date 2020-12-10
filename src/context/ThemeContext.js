import { useStaticQuery } from 'gatsby';
import React, {useState} from 'react';


const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

const ThemeProvider= ({children})=>{
    const [state, setState] = useState(false);

    function toggleTheme(){
        console.log('toggle theme');
        console.log(state);
        return state;
    }

    return(
        <ThemeContext.Provider value={[state, setState]}>
       {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};
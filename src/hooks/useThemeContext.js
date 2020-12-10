import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const useThemeContext = ()=> {
    const [state, setState] = useContext(ThemeContext);

    function seeState(){
        return  state;
    }

    function toggleTheme(){
        setState(!state);
    }

    return{
        seeState,
        toggleTheme
    }
}
export default useThemeContext;
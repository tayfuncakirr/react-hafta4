import React,{useContext} from "react";
import ChangeTheme from './components/ChangeTheme'
import ChangeLang from './components/ChangeLang'
import ThemeContext from "./context/ThemeContext";

function Container () {
 const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme}`}>
            <ChangeTheme/>
         <ChangeLang/>
        </div>
    )
}


export default Container
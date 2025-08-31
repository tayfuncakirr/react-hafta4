import { useContext } from "react";
import React from "react";
import ThemeContext from "../context/ThemeContext";

function ChangeTheme(){
 const data = useContext(ThemeContext);

 console.log(data);
    return (
        <div>
            <button>ChangeTheme</button>
        </div>
    )
}

export default ChangeTheme
import { useContext } from "react";
import React from "react";
import ThemeContext from "../context/ThemeContext";

function ChangeTheme(){
 const data = useContext(ThemeContext);

 console.log(data);
    return (
        <div>
            <div>{data.theme}</div>
            <button onClick={() => data.setTheme(data.theme === "light" ? "dark": "light")}>ChangeTheme</button>
        </div>
    )
}

export default ChangeTheme
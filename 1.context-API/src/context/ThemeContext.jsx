import {createContext, useEffect, useState} from "react";

const ThemeContext = createContext();
const defaultTheme = localStorage.getItem("theme") || "light";
export const ThemeContextProvider = ({children})=> {
    const [theme, setTheme] = useState(defaultTheme);
    
    useEffect (()=>{
      localStorage.setItem("theme", theme);
    },[theme])
    const values = {
        theme,setTheme,
    };
    return ( <ThemeContext.Provider value ={values}>{children}</ThemeContext.Provider>
)
}


export default ThemeContext
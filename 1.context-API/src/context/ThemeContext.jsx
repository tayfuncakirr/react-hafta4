import {createContext, useState} from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=> {
    const [theme, setTheme] = useState("light");

    const values = {
        theme,setTheme,
    };
    return ( <ThemeContext.Provider value ={values}>{children}</ThemeContext.Provider>
)
}


export default ThemeContext
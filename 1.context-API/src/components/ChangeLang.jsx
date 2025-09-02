import React from "react";
import LangContext from "../context/LangContext";
import { useContext } from "react";


function ChangeLang(){
    const {lang, setLang} = useContext(LangContext);
    return (
        <>
        <div>Aktif dil:{lang}</div>
        <button onClick={()=> setLang("tr")}>TR</button>
        <button onClick={()=> setLang("en")}>EN</button>
        <button onClick={()=> setLang("de")}>DE</button>
        </>
    )
}

export default ChangeLang;
import React from "react";
import ContentFooter from "../components/ContentFooter";
import List from "./list";

function Content () {
    return(
         <>
         <section className="main">
            <input type="checkbox" className="toggle-all" />
            <label htmlFor="toggle-all">complate</label>
             <List/>
        </section>
        <ContentFooter/>
         </>
    )
}

export default Content
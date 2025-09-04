import React from "react";
import ContentFooter from "./ContentFooter";

function Content () {
    return(
         <>
         <section className="main">
            <input type="checkbox" className="toggle-all" />
            <label htmlFor="toggle-all">complate</label>
            <ul className="todo-list">
                <li className="completed">
                    <div className="view">
                        <input type="checkbox" className="toggle" />
                        <label> learn</label>
                        <button className="destroy"></button>
                    </div>
                 </li>
                 <li>
                    <div className="view">
                        <input type="checkbox" className="toggle" />
                        <label> learn</label>
                        <button className="destroy"></button>
                    </div>
                    </li>
                    <li>
                        <div className="view">
                        <input type="checkbox" className="toggle" />
                        <label> learn</label>
                        <button className="destroy"></button>
                    </div>
                    </li>
            </ul>
        </section>
        <ContentFooter/>
         </>
    )
}

export default Content
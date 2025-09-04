import React from "react";

function Header () {

    return (
        <>
     <header className="header">
        <h1>Todos</h1>
        <form action="">
            <input type="text" className="new-todo" placeholder="Bugün neler yapacaksın?" autoFocus/>
        </form>
     </header>
     </>
    )
}

export default Header
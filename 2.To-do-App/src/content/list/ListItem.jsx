import React from "react";

function ListItem({todo}) {

    return (
        <li className={todo.completed ? "completed" : "" }>
                    <div className="view">
                        <input type="checkbox" className="toggle" checked={todo.completed} />
                        <label>{todo.text}</label>
                        <button className="destroy"></button>
                    </div>
                 </li>
    )
}

export default ListItem
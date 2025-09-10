import React from "react";
import { useTodo } from "../../context/TodoContext";

function ListItem({todo}) {
    const {toggleTodo,destroyTodo} = useTodo();

    const onChange = (id) => toggleTodo(id)
    
    const onDestroy = (id) => destroyTodo(id)
    return (
        <li className={todo.completed ? "completed" : "" }>
                    <div className="view">
                        <input type="checkbox" className="toggle" checked={todo.completed} onChange={() => onChange(todo.id)} />
                        <label>{todo.text}</label>
                        <button className="destroy" onClick={()=> onDestroy(todo.id)}></button>
                    </div>
                 </li>
    )
}

export default ListItem
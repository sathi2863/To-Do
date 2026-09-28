import { useState } from "react";
import Todo from "./Todo";
import initialTodos from "../Data/initialTodos";

export default function TodoList(){
    const [todos, setTodos] = useState(initialTodos);
    const todoArray = [];

    for(let i = 0; i< todos.length; i++){
        const todoItem = (
        <li>
             <Todo/> 
        </li>
        );

        todoArray.push(todoItem)
    }
    return (
        <ul>
           {todoArray}
            
        </ul>

    )
}









/*
// ai vabe o likha jai array of jsx :
{[
                <li>
                <Todo />
            </li>,

            <li>
                <Todo />
            </li>,

            <li>
                <Todo />
            </li>
        ]}
        */
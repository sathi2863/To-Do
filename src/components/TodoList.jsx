import { useState } from "react";
import Todo from "./Todo";
import initialTodos from "../Data/initialTodos";

export default function TodoList(){
    const [todos, setTodos] = useState(initialTodos);

    
    /* use for loop
    const todoArray = [];
    for(let i = 0; i< todos.length; i++){
        const todoItem = (
        <li>
             <Todo/> 
        </li>
        );

        todoArray.push(todoItem)
    }
*/
    return (
        <ul>
     {todos.map((todo) => (
        <li key={todo.id}>{<Todo todo={todo}/>}</li>
     ))} 
     </ul>

         // use for loop
        // <ul>
        //    {todoArray}
            
        // </ul>

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
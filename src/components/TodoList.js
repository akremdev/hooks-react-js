import React, {useState} from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
         {text : 'Pay Bills', id: 1},
         {text : 'Do Your homework', id: 2},
         {text : 'Feed the dog', id: 3},
     ]);
    const addTodo = (text) => {
        setTodos([
            ...todos, //get all the todos previous ones.
            {text,  id: Math.random()}
        ])
    }   
    return (
        <div>
            <ul>
                {/* <li>Pay Bills</li>
                <li>Do Your homework</li>
                <li>Feed the dog</li> */}
                {
                    todos.map((todo) => {
                        return(
                            <li key={todo.id}>
                                {todo.text}
                            </li>    
                        )
                    })
                }
            </ul>
            <AddNewTodo addTodo={addTodo} />
        </div>
    )
}

export default TodoList;

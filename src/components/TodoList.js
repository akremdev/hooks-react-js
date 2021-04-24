import React, {useState, useEffect} from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
         {text : 'Pay Bills', id: 1},
         {text : 'Do Your homework', id: 2},
         {text : 'Feed the dog', id: 3},
     ]);

     const [count, setCount] = useState(0);
    const addTodo = (text) => {
        setTodos([
            ...todos, //get all the todos previous ones.
            {text,  id: Math.random()}
        ])
    }
    useEffect(() => {
        console.log('use effec', todos);
    }, [todos]);
    useEffect(() => {
        console.log('use effect', count);
    }, [count]); 
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
            <button onClick={() => setCount(count + 1 )}>Score: {count}</button>
        </div>
    )
}

export default TodoList;

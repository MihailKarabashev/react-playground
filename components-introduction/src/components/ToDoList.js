import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

    let [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room', isDone: false },
        { id: 2, text: 'Wash the dishes', isDone: false },
        { id: 3, text: 'Go to the gym', isDone: false }
    ]);

    useEffect(() => {
        console.log('Mounted');
    }, []);

    const onTodoInputBlue = (e) => {
        let todo = {
            id: todos.length + 1,
            text: e.target.value,
            isDone: false
        };

        setTodos(oldState => [
            ...oldState,
            todo
        ]);

        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(x => x.id != id));
    };

    const toggleTodoItemClickHandler = (id) => {

    };


    return (
        <>
            <input onBlur={onTodoInputBlue} type="text" name="todo" />
            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        id={todo.id}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />
                )}
                {/* {todos.map(todo => <TodoItem key={todo.id} todo={todo} id={todo.id} onDelete={() => deleteTodoItemClickHandler(todo.id)} />)} */}
            </ul>
        </>
    );
}



















// import { Fragment } from "react";
// import ToDoListItem from "./ToDolistItem";
// import { useState } from "react";
// export default function ToDoList() {
//     let [count, setCount] = useState(0);

//     return (
//         <>
//             <ul>
//                 <ToDoListItem>{count}</ToDoListItem>
//             </ul>

//             <button onClick={() => setCount(count += 1)}>Click me</button>
//         </>
//     );
// }

//Wrap two elements in react fragment and return them
// We can do it with array []

// export default function ToDoList() {
//     return (
//         <Fragment>

//             <h2>Tasks</h2>
//             <ul>
//                 <li>Clean your room</li>
//                 <li>Go shopping</li>
//                 <li>Learn React</li>
//             </ul>
//         </Fragment>
//     );
// }


//Best solution is to wrap two elements in one empty html element
//We don't need Fragment or div or array
// export default function ToDoList() {
//     return (
//         <>

//             <h2>Tasks</h2>
//             <ul>
//                 <li>Clean your room</li>
//                 <li>Go shopping</li>
//                 <li>Learn React</li>
//             </ul>
//         </>
//     );
// }
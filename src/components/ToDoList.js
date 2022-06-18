// import { Fragment } from "react";
import ToDoListItem from "./ToDolistItem";
import { useState } from "react";

export default function ToDoList() {
    let [todos, setTodo] = useState([
        'Clean your room',
        'Go shopping',
        'Learn React',
        'Do whatever you want'
    ]);

    return (
        <>
            <ul>
                {todos.map(x => <ToDoListItem>{x}</ToDoListItem>)}
            </ul>

            <button onClick={() => console.log('HI')}>Click me</button>
        </>
    );
}

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
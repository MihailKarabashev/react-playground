export default function TodoItem({
    id,
    todo,
    onDelete,
    onClick
}) {
    return (
        <li onClick={() => onClick(id)}>
            {todo.text}
            <button onClick={() => onDelete(id)}>
                x
            </button>
        </li>

        // <li>{todo.text} <button onClick={onDelete}>x</button></li>
    );
}
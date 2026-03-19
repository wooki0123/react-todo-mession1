function TodoItem({ todo, removeTodo, handleChecked }) {
    return (
        <li key={todo.id}>
            <input
                type="checkbox"
                onChange={() => {
                    handleChecked(todo.id)
                }}
                checked={todo.checked}
            />
            {todo.text}
            <button
                onClick={() => {
                    removeTodo(todo.id)
                }}
            >
                X
            </button>
        </li>
    )
}

export default TodoItem

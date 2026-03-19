function TodoItem({ todo, removeTodo, handleChecked }) {
    return (
        <li key={todo.id}>
            <input
                type="checkbox"
                onChange={() => {
                    handleChecked
                }}
                checked={todo.checked}
            />
            {todo.text}
            <button
                onClick={() => {
                    removeTodo
                }}
            >
                X
            </button>
        </li>
    )
}

export default TodoItem

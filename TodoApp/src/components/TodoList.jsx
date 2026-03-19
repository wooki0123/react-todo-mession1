export default function TodoList({ todos, setTodos, handleChecked }) {
    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.checked} onChange={(e) => handleChecked(todo.id)} />
                        {todo.text}
                        <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>X</button>
                    </li>
                )
            })}
        </ul>
    )
}

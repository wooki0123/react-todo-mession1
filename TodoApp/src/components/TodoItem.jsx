function TodoItem({ todo, removeTodo, handleChecked }) {
    return (
        <li key={todo.id} className="p-1 flex gap-2">
            <input
                className=""
                type="checkbox"
                onChange={() => {
                    handleChecked(todo.id)
                }}
                checked={todo.checked}
            />
            <span className={`flex-8 ${todo.checked ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
            <button
                className="bg-red-300 flex-1 hover:bg-red-500"
                onClick={() => {
                    removeTodo(todo.id)
                }}
            >
                삭제
            </button>
        </li>
    )
}

export default TodoItem

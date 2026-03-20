import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, handleChecked }) {
    return (
        <ul className="p-1">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} handleChecked={handleChecked} />
            ))}
        </ul>
    )
}

export default TodoList

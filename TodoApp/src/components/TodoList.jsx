import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, handleChecked }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} handleChecked={handleChecked} />
            ))}
        </ul>
    )
}

export default TodoList

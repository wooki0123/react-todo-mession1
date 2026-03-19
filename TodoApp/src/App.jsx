import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'
import useTodos from './hooks/useTodos'

function App() {
    const { todos, removeTodo, addTodo, handleChecked } = useTodos()

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white border w-1/2 h-2/5 p-1">
                <TodoWriteForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} addTodo={addTodo} handleChecked={handleChecked} />
            </div>
        </div>
    )
}

export default App

import { useRef, useState } from 'react'
import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'

function App() {
    const [todos, setTodos] = useState([
        { id: 3, text: '할일', checked: false },
        { id: 2, text: '할일', checked: false },
        { id: 1, text: '할일', checked: false },
    ])

    const lastId = useRef(4)

    const addTodo = (text) => {
        const todo = { id: lastId.current, text, checked: false }
        setTodos([todo, ...todos])
        lastId.current++
    }

    const handleChecked = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white border w-1/2 h-2/5 p-1">
                <TodoWriteForm addTodo={addTodo} />
                <TodoList todos={todos} setTodos={setTodos} addTodo={addTodo} handleChecked={handleChecked} />
            </div>
        </div>
    )
}

export default App

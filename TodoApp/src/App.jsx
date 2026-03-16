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

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target.todo.value
        setTodos([{ id: lastId.current, text: form, checked: false }, ...todos])
        lastId.current++
        e.target.todo.value = ''
    }

    const handleChecked = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
    }

    return (
        <>
            <TodoWriteForm handleSubmit={handleSubmit} />
            <TodoList todos={todos} setTodos={setTodos} handleChecked={handleChecked} />
        </>
    )
}

export default App

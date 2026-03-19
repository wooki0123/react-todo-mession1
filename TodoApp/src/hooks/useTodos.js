import { useEffect, useRef, useState } from 'react'
import { getItem, setItem } from '../utils/storage'

function useTodos() {
    const [todos, setTodos] = useState(
        getItem('todos', [
            { id: 3, text: '할일', checked: false },
            { id: 2, text: '할일', checked: false },
            { id: 1, text: '할일', checked: false },
        ]),
    )

    const lastId = useRef(4)

    useEffect(() => {
        setItem('todos', todos)
    }, [todos])

    const addTodo = (text) => {
        const todo = { id: lastId.current, text, checked: false }
        lastId.current++

        setTodos([todo, ...todos])
    }

    const removeTodo = (selectId) => {
        const filterTodos = todos.filter((todo) => todo.id !== selectId)
        setTodos(filterTodos)
    }

    const handleChecked = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
    }
    return { todos, addTodo, removeTodo, handleChecked }
}

export default useTodos

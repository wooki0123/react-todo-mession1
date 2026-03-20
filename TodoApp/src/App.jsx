import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'
import useTodos from './hooks/useTodos'

function App() {
    const { todos, removeTodo, addTodo, handleChecked } = useTodos()

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-center text-3xl font-bold text-indigo-500 mb-4 tracking-tight text-center drop-shadow-sm">
                    Todo List
                </h1>
                <div className="bg-white border w-1/2 h-2/5 p-4 flex flex-col shadow-lg rounded-2xl">
                    <TodoWriteForm addTodo={addTodo} />
                    <div className="flex-1 overflow-y-auto mt-4 custom-scrollbar">
                        <TodoList
                            todos={todos}
                            removeTodo={removeTodo}
                            addTodo={addTodo}
                            handleChecked={handleChecked}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

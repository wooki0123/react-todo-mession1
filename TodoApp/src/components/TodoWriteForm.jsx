export default function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target.todo
        addTodo(form.value)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input name="todo" type="text" placeholder="할일을 입력하세요" />
            <button type="submit">등록</button>
        </form>
    )
}

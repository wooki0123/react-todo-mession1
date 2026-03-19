export default function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target.todo
        addTodo(form.value)
        form.value = ''
    }

    return (
        <form onSubmit={handleOnSubmit} className="">
            <input className="p-1 w-4/5" name="todo" type="text" placeholder="할일을 입력하세요" />
            <button className="w-1/6 bg-gray-300 border rounded-lg text-center hover:bg-gray-200" type="submit">
                등록
            </button>
        </form>
    )
}

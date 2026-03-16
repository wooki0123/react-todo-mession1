export default function TodoWriteForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input name="todo" type="text" placeholder="할일을 입력하세요" />
            <button type="submit">등록</button>
        </form>
    )
}

export default function TodoItem({ id, text, isDone, onRemoveTodo, onUpdateTodoIsDone }) {
  return (
    <li>
      <span onClick={() => onUpdateTodoIsDone(id)} style={{textDecoration: isDone ? 'line-through' : 'none'}}>{text}</span>
      <button onClick={() => onRemoveTodo(id)}>삭제</button>
    </li>
  )
}
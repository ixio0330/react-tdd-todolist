import { useState } from "react"

export default function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState('');
  function onClickAddTodo() {
    onAddTodo(todo);
    setTodo('');
  }
  function onDisabled() {
    if (todo === '') {
      return true;
    }
    return false;
  }
  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={onClickAddTodo} disabled={onDisabled()}>추가</button>
    </div>
  )
}

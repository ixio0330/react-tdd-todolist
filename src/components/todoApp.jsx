import { useRef, useState } from "react"

import TodoFrom from "./todoFrom";
import TodoList from "./todoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);
  function onAddTodo(todo) {
    setTodos(todos.concat({
      id: idRef.current,
      text: todo,
      isDone: false,
    }));
    idRef.current++;
  }
  function onUpdateTodoIsDone(id) {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
  }
  function onRemoveTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <TodoFrom onAddTodo={onAddTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onUpdateTodoIsDone={onUpdateTodoIsDone} />
    </>
  )
}